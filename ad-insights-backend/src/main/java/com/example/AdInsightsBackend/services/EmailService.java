package com.example.adinsightsbackend.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
class EmailService {
    @Autowired
    JavaMailSender mailSender;

    @Autowired
    TemplateEngine templateEngine;

    @Value("${spring.mail.username}")
    private String emailFrom;

    @Async
    public void sendWelcomeEmail(String to, String name) throws MessagingException {
        Context context = new Context();
        context.setVariable("name", name);

        String htmlBody = templateEngine.process("emails/welcome.html", context);

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setFrom(emailFrom);
        helper.setTo(to);
        helper.setSubject("Welcome");
        helper.setText(htmlBody, true);

        mailSender.send(mimeMessage);
    }

    @Async
    public void sendForgotPasswordEmail(String email) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();

            message.setFrom(emailFrom);
            message.setTo(email);
            message.setSubject("Forgot Password Reset");
            message.setText("Please reset your password for " + email);

            mailSender.send(message);
            System.out.println("Forgot Password Reset Email Sent");
        }  catch (Exception e) {
            e.printStackTrace();
        }
    }
}
