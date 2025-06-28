import re


def verify_email(email: str):
    email = email.strip()
    match = re.search(
        r'[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}',
        email
    )

    result = match.group()

    if result:
        return result

    return None


def veify_password(pws: str):
    pass


if __name__ == '__main__':
    print(verify_email('Pedro.hcorradini05@gmail.com'))
