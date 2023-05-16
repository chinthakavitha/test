package com.star.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.star.entity.Admin;

import com.star.service.AdminService;

@RestController
@RequestMapping("/api/Admin")
@CrossOrigin("http://localhost:4200")
public class AdminController {

    @Autowired
    AdminService adminservice;

    @PostMapping("/login")
   
    public boolean findbyusername(@RequestBody Admin obj) {
        Admin admin = adminservice.getAdminbyusername(obj.getUsername());
        if (admin != null) {
            if ((obj.getUsername()).equals(admin.getUsername()) && (obj.getPassword()).equals(admin.getPassword()))
                return true;
            else
                return false;
        } else
            return false;
    }

    @GetMapping("/list")
    public List<Admin> printAdmin() {
        return adminservice.getallAdmin();
    }
}
