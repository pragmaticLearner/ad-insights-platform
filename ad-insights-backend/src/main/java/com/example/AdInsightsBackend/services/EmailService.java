package com.example.adinsightsbackend.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
class EmailService {
    @Autowired
    JavaMailSender mailSender;

    @Autowired
    TemplateEngine templateEngine;

    @Value("${email.name.password-reset}")
    private String emailNamePasswordReset;

    public void sendWelcomeEmail(String to, String name) throws MessagingException {
        Context context = new Context();
        context.setVariable("name", name);

        String processHtml = templateEngine.process("welcome-email", context);

        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        try {
            helper.setText(processHtml, true);
            helper.setTo(to);
            helper.setSubject("Welcome!");
            helper.setFrom(emailNamePasswordReset);
            mailSender.send(mimeMessage);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void sendForgotPasswordEmail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("noreply.example.com");
        message.setTo(email);
        message.setSubject("Forgot Password Reset");
        message.setText("Your email has been sent to " + email);

        mailSender.send(message);
    }
}
