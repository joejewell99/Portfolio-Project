# EmailJS Template

Use these values when you create your EmailJS email template.

## Template Subject

```txt
Portfolio contact: {{subject}}
```

## Template Body

```txt
You have a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

## Reply-To

```txt
{{from_email}}
```

## Variables Sent By The Website

```txt
from_name
from_email
subject
message
to_email
```

The form sends `to_email` as `joejewell99@hotmail.com`.
