export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({error:"Method not allowed"});
  }

  const {message} = req.body;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const url = 'https://api.telegram.org/bot${token}/sendMessage;

  await fetch(url,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      chat_id:chatId,
      text:message
    })
  });

  res.status(200).json({
    success:true
  });
}
