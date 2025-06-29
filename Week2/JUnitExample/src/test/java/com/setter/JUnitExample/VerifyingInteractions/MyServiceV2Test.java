package com.setter.JUnitExample.VerifyingInteractions;


import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class MyServiceV2Test {

    @Test
    public void testVerifyInteraction() {
        ExternalApiV2 mockApi = mock(ExternalApiV2.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyServiceV2 service = new MyServiceV2(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
        verify(mockApi).getData(); // Verifying interaction
    }
}