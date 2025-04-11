#!/usr/bin/env python
# -*- coding: utf-8 -*-

import pdfplumber
import json
import os

JSON_RESUlT_FOLDER = "./json/"
PDF_SOURCE_FOLDER = "./kice_resources/"

def parse_pdf_to_json(
    pdf_path: str,
    output_json_path: str,
    screenshot_dir: str = "screenshots",
    source_info: str = "2024학년도 수능 수학 홀수형"
):
    """
    pdf_path: PDF 파일 경로
    output_json_path: 결과를 저장할 JSON 파일 경로
    screenshot_dir: 각 페이지별 스크린샷 PNG를 저장할 디렉터리
    source_info: 출처(시험 이름 등)
    """
    if not os.path.exists(screenshot_dir):
        os.makedirs(screenshot_dir)

    results = []
    
    # pdfplumber로 PDF 열기
    with pdfplumber.open(pdf_path) as pdf:
        for page_index, page in enumerate(pdf.pages, start=1):
            # 1) 페이지 텍스트 추출
            page_text = page.extract_text()
            
            # 2) 페이지 스크린샷 저장
            #    pdfplumber의 to_image() 사용
            page_image = page.to_image(resolution=150)
            screenshot_filename = f"page_{page_index}.png"
            screenshot_path = os.path.join(screenshot_dir, screenshot_filename)
            page_image.save(screenshot_path)
            
            # 3) JSON에 넣을 데이터 구성
            #    여기서는 '페이지 단위'로 하나의 객체를 만들고,
            #    '출처'와 '페이지 텍스트', '스크린샷 경로' 정도만 저장
            page_data = {
                "page_number": page_index,
                "source": source_info,
                "text": page_text,
                "screenshot_path": screenshot_path
            }
            
            results.append(page_data)
    
    # 모든 페이지 데이터 results를 JSON으로 저장
    with open(output_json_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    import os
    
    pdf_filenames = os.walk(PDF_SOURCE_FOLDER).__next__()[2]
    for name in pdf_filenames:
        pdf_file = os.path.join(PDF_SOURCE_FOLDER, name)
        json_file = os.path.join(JSON_RESUlT_FOLDER, name.replace(".pdf", ".json"))
        parse_pdf_to_json(pdf_file, output_json_path=json_file, source_info=name)
