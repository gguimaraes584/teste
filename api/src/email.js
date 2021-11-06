import nodemailer from 'nodemailer';

const sender = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: 'da88609faee084',
        pass: '68707b0056e99d',
    },

});

async function enviarEmail(para, assunto, mensagem){
    const response = await sender.sendMail({
        from: '"TCC INSF" <mailing.tcc.info@acaonsfatima.org.br>',
        to: para,
        subject: assunto,
        html: mensagem
    })
    return response;
}

export default enviarEmail;