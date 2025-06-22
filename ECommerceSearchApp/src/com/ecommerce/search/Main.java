package com.ecommerce.search;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Fashion"),
            new Product(3, "Camera", "Electronics"),
            new Product(4, "Watch", "Accessories")
        };

        Arrays.sort(products, (a, b) -> a.productName.compareToIgnoreCase(b.productName));

        String searchItem = "Camera";

        Product result1 = SearchUtils.linearSearch(products, searchItem);
        System.out.println("Linear Search Result: " +
            (result1 != null ? result1.productName : "Not Found"));

        Product result2 = SearchUtils.binarySearch(products, searchItem);
        System.out.println("Binary Search Result: " +
            (result2 != null ? result2.productName : "Not Found"));
    }
}
