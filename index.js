const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "👋🏻ㅣ입장로그";
const byeChannelName = "👋🏻ㅣ퇴장로그";
const welcomeChannelComment = "어서오세요. 여기는 BAY SHOP 입니다";
const byeChannelComment = "안녕히가세요. 다음에 또 와요";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setPresence({ game: { name: 'BAY SHOP 관리중...' }, status: 'online' })
});


client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == ""));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
    if(message.content === '&출근') {
      let img = 'https://cdn.discordapp.com/attachments/764813157909790721/764815638874292224/htht.gif'; // 임베드에 나오는 사진
      let embed = new Discord.RichEmbed()
        .setColor('#01DF01')
        .setTitle('모든 문의 받습니다.')// 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
        .setThumbnail(img)
        .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 출근하셨습니다 **') //  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다 , + 뒤에 있는건 수정하셔도 됩니다 
        .setTimestamp()
        .setFooter('BAY SHOP', img) // 제작자 ( 수정금지 )
  
      message.channel.send(embed)
    }
    if(message.content === '&퇴근') {
      let img = 'https://cdn.discordapp.com/attachments/764813157909790721/764815638874292224/htht.gif'; // 임베드에 나오는 사진
      let embed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTitle('문의가 불가능합니다')// 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
        .setThumbnail(img)
        .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 퇴근하셨습니다 **')//  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다, + 뒤에 있는건 수정하셔도 됩니다 
        .setTimestamp()
        .setFooter('BAY SHOP', img) // 제작자 ( 수정금지 )
  
      message.channel.send(embed)
    }
    if(message.content === '&임시퇴근') {
      let img = 'https://cdn.discordapp.com/attachments/764813157909790721/764815638874292224/htht.gif';
      let embed = new Discord.RichEmbed()
        .setColor('#D7DF01')
        .setTitle('문의가 가능합니다')
        .setThumbnail(img)
        .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 임시퇴근하셨습니다 **')//  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다
        .addField('** 문의확인시 답변해드리겠습니다 . **', ' ** 문의 남겨주세요 **  ') // 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
        .setTimestamp()
        .setFooter('BAY SHOP', img)// 제작자 ( 수정금지 )
  
      message.channel.send(embed)
    }
    if(message.content === '&휴가') {
      let img = 'https://cdn.discordapp.com/attachments/764813157909790721/764815638874292224/htht.gif'; // 임베드에 나오는 사진
      let embed = new Discord.RichEmbed()
        .setColor('#FF0000')
        .setTitle('휴가중 입니다.')// 한번 켜보시고 테스트 하면서 원하는대로 수정하심됩니다
        .setThumbnail(img)
        .setDescription(` <@${message.author.id}> ` + '님 , ** 정상적으로 휴가 가셨습니다. **')//  <@${message.author.id}> 이 구문은 사용자를 태그하는 구문입니다 손대시면 오류뜹니다, + 뒤에 있는건 수정하셔도 됩니다 
        .setTimestamp()
        .setFooter('BAY SHOP', img)// 제작자 ( 수정금지 )
  
      message.channel.send(embed)
    }
});

client.on('message', (message) => {
    if(message.author.bot) return;
  
    if(message.content == 'ping') {
      return message.reply('pong');
    }
    if(message.content == '&보기') {
      let img = 'https://cdn.discordapp.com/attachments/764813157909790721/764815638874292224/htht.gif';
      let embed = new Discord.RichEmbed()
        .setColor('#CCEEFF')
        .setTitle('BAY SHOP')
        .setURL('http://www.naver.com')
        .setAuthor('BAY SHOP', img, 'http://www.naver.com')
        .setThumbnail(img)
        .addBlankField()
        .addField('오버워치', '많은 핵,게정')
        .addField('서든어택', '좋은 핵', true)
        .addField('발로라트', '좋은 핵', true)
        .addField('다양한 계정', '무려 8개 상품!', true)
        .addField('무료 상품', '다양한 무료상품들')
        .addBlankField()
        .setTimestamp()
        .setFooter('by 파더덛 만듬', img)
  
      message.channel.send(embed)
    } else if(message.content == '&도움') {
      let helpImg = 'https://cdn.discordapp.com/attachments/764813157909790721/764815638874292224/htht.gif';
      let commandList = [
        {name: '&도움', desc: '도움말을 펼칩니다.'},
        {name: '&참여', desc: '이벤트 참여를 합니다.'},
        {name: '&보기', desc: 'BAY BOT 정보를 봅니다.'},
        {name: '&전체공지', desc: 'dm으로 전체 공지 보내기'},
        {name: '&전체공지2', desc: 'dm으로 전체 embed 형식으로 공지 보내기'},
        {name: '&청소', desc: '텍스트 지움'},
        {name: '&초대코드', desc: '해당 채널의 초대 코드 표기'},
        {name: '&초대코드2', desc: '봇이 들어가있는 모든 채널의 초대 코드 표기'},
        {name: '&출근', desc: '출근을 합니다.'},
        {name: '&퇴근', desc: '퇴근을 합니다.'},
        {name: '&임시퇴근', desc: '임시퇴근을 합니다.'},
        {name: '&휴가', desc: '휴가를 합니다.'},
      ];
      let commandStr = '';
      let embed = new Discord.RichEmbed()
        .setAuthor('Help of BAY BOT', helpImg)
        .setColor('#186de6')
        .setFooter(`BAY BOT`)
        .setTimestamp()
      
      commandList.forEach(x => {
        commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
      });
  
      embed.addField('Commands: ', commandStr);
  
      message.channel.send(embed)
    } else if(message.content == '&초대코드2') {
      client.guilds.array().forEach(x => {
        x.channels.find(x => x.type == 'text').createInvite({maxAge: 0}) 
          .then(invite => {
            message.channel.send(invite.url)
          })
          .catch((err) => {
            if(err.code == 50013) {
              message.channel.send('**'+x.channels.find(x => x.type == 'text').guild.name+'** 채널 권한이 없습니다.')
            }
          })
      });
    } else if(message.content == '&초대코드') {
      if(message.channel.type == 'dm') {
        return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
      }
      message.guild.channels.get(message.channel.id).createInvite({maxAge: 0}) 
        .then(invite => {
          message.channel.send(invite.url)
        })
        .catch((err) => {
          if(err.code == 50013) {
            message.channel.send('**'+message.guild.channels.get(message.channel.id).guild.name+'** 채널 권한이 없습니다.')
          }
        })
    } else if(message.content.startsWith('&전체공지2')) {
      if(checkPermission(message)) return
      if(message.member != null) { 
        let contents = message.content.slice('&전체공지2'.length);
        let embed = new Discord.RichEmbed()
          .setAuthor('공지 of BAY SERVER BOT')
          .setColor('#186de6')
          .setFooter(`BAY SERVER BOT`)
          .setTimestamp()
    
        embed.addField('공지: ', contents);
    
        message.member.guild.members.array().forEach(x => {
          if(x.user.bot) return;
          x.user.send(embed)
        });
    
        return message.reply('공지를 전송했습니다.');
      } else {
        return message.reply('채널에서 실행해주세요');
      }
    } else if(message.content.startsWith('&전체공지')) {
      if(checkPermission(message)) return
      if(message.member != null) { 
        let contents = message.content.slice('&전체공지'.length);
        message.member.guild.members.array().forEach(x => {
          if(x.user.bot) return;
          x.user.send(`<@${message.author.id}> ${contents}`);
        });
    
        return message.reply('공지를 전송했습니다.');
      } else {
        return message.reply('채널에서 실행해주세요.');
      }
    } else if(message.content.startsWith('&청소')) {
      if(message.channel.type == 'dm') {
        return message.reply('dm에서 사용할 수 없는 명령어 입니다.');
      }
      
      if(message.channel.type != 'dm' && checkPermission(message)) return
  
      var clearLine = message.content.slice('&청소 '.length);
      var isNum = !isNaN(clearLine)
  
      if(isNum && (clearLine <= 0 || 100 < clearLine)) {
        message.channel.send("1부터 100까지의 숫자만 입력해 주십쇼.")
        return;
      } else if(!isNum) { 
        if(message.content.split('<@').length == 2) {
          if(isNaN(message.content.split(' ')[2])) return;
  
          var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
          var count = parseInt(message.content.split(' ')[2])+1;
          let _cnt = 0;
  
          message.channel.fetchMessages().then(collected => {
            collected.every(msg => {
              if(msg.author.id == user) {
                msg.delete();
                ++_cnt;
              }
              return !(_cnt == count);
            });
          });
        }
      } else {
        message.channel.bulkDelete(parseInt(clearLine)+1)
          .then(() => {
            AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
          })
          .catch(console.error)
      }
    }
  });
  
  function checkPermission(message) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 않습니다.")
      return true;
    } else {
      return false;
    }
  }
  
  function changeCommandStringLength(str, limitLen = 8) {
    let tmp = str;
    limitLen -= tmp.length;
  
    for(let i=0;i<limitLen;i++) {
        tmp += ' ';
    }
  
    return tmp;
  }
  
  async function AutoMsgDelete(message, str, delay = 3000) {
    let msg = await message.channel.send(str);
  
    setTimeout(() => {
      msg.delete();
    }, delay);
  }

client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '&이벤트참여') {
      let embed = new Discord.RichEmbed()
      .setColor('#2EFE9A')
      .setTitle('이벤트 참여')
      .setDescription('이벤트 참여가 완료되었습니다. 참여해주셔서 감사합니다.')
      .addField('by 파더덛')
      message.channel.send(embed)
  }});

  
  client.login(token);