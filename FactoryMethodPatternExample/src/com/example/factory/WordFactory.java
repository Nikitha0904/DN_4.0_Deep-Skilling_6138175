package com.example.factory;

public class WordFactory extends DocumentFactory {
    @Override
    public IDocument createDocument() {
        return new WordDocument();
    }
}
