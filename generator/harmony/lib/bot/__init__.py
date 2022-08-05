from datetime import datetime
from discord import Intents
from discord import embeds, File
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from discord.ext.commands import Bot as BotBase

PREFIX = "+"
OWNER_IDS = [957163491087773716]

class Bot(BotBase):
    def __init__(self):
        self.PREFIX = PREFIX
        self.ready = False
        self.guild = None
        self.scheduler = AsyncIOScheduler()
        super().__init__(command_prefix=PREFIX, owner_ids=OWNER_IDS, intents=Intents.all())

    def run(self, version):
        self.VERSION = version
        with open("./lib/bot/token.0", "r", encoding="utf-8") as tf:
            self.TOKEN = tf.read()
            print("running bot...")
            super().run(self.TOKEN, reconnect=True) # invokes bot base

    async def on_connect(self):
        print("bot connected")

    async def on_disconnect(self):
        print("bot disconnected")

    async def on_ready(self):
        if not self.ready:
            self.ready = True
            self.guild = self.get_guild(921166250435043389) # for single server bot
            print("bot ready")
            channel = self.get_channel(5695695679596658)
            await channel.send("Bot is now online")
            embed = Embed(title="Now online!", description="The bot is now online", colour=0xFF0000, timestamp=datetime.utcnow())
            fields = [("Name", "Value", True),
                ("Name2", "Value2", True),
                ("Name3", "Value3", False)]
            for name, value, inline in fields:
                embed.add_field(name=name, value=value, inline=inline)
            embed.set_author(name="Bot the bot", icon_url=self.guild.icon_url)
            embed.set_footer(text="Bot embed footer")
            embed.set_thumbnail(url=self.guild.icon_url)
            embed.set_image(url = self.guild.icon_url)
            await channel.send(embed=embed)
            await channel.send(file=File("../../src/assets/images/bot-profile.png"))
        else:
            print("bot reconnected")

    async def on_message(self, message):
        pass

bot = Bot()