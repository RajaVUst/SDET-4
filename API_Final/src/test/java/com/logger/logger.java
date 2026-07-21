package com.logger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class logger {

    private logger(){}

    public static Logger getLogger(Class<?> clazz){
        return LoggerFactory.getLogger(clazz);
    }

}