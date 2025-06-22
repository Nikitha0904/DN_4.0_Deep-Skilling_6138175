package com.example.factory;

public class PdfFactory extends DocumentFactory {
    @Override
    public IDocument createDocument() {
        return new PdfDocument();
    }
}
