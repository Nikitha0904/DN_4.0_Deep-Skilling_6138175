package com.setter.JUnitExample.VerifyingInteractions;

public class MyServiceV2 {
    private ExternalApiV2 api;

    public MyServiceV2(ExternalApiV2 api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}
