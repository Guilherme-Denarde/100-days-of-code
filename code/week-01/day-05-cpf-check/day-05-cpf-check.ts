function validateCPF(cpf: string): string {
    cpf = cpf.replace(/[^\d]+/g, '');   // Removing all [space]

    if (cpf.length !== 11) {
        return 'CPF must have 11 digits.';
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        return 'CPF with all identical digits is invalid.';
    }

    let sum: number;
    let remainder: number;

    
    sum = 0;
    for (let i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return 'First check digit is incorrect.';
    }

    
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return 'Second check digit is incorrect.';
    }

    return 'CPF is valid.';
}

console.log(validateCPF("123.456.789-09"));     // CPF is valid.
console.log(validateCPF("111.111.111-11"));     // CPF with all identical digits is invalid.
console.log(validateCPF("529.982.247-25"));     // CPF is valid.