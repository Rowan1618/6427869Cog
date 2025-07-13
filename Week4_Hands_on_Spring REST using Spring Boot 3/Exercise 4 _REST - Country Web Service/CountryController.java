package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.Country;
import org.springframework.beans.factory.support.DefaultListableBeanFactory;
import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @RequestMapping("/country")
    public Country getCountryIndia() {
        GenericApplicationContext context = new GenericApplicationContext();
        new XmlBeanDefinitionReader(context).loadBeanDefinitions(new ClassPathResource("country.xml"));
        context.refresh();

        return (Country) context.getBean("in");
    }
}
