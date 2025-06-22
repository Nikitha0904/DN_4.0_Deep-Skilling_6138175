package com.example.factory;

public class Main {
    public static void main(String[] args) {
        // Word document
        DocumentFactory wordFactory = new WordFactory();
        IDocument word = wordFactory.createDocument();
        word.open();

        // PDF document
        DocumentFactory pdfFactory = new PdfFactory();
        IDocument pdf = pdfFactory.createDocument();
        pdf.open();

        // Excel document
        DocumentFactory excelFactory = new ExcelFactory();
        IDocument excel = excelFactory.createDocument();
        excel.open();
    }
}
