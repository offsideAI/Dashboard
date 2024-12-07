import discord
from discord.ext import commands
import aiohttp
import os
from dotenv import load_dotenv

load_dotenv()

DISCORD_TOKEN = os.getenv('DISCORD_TOKEN')
API_URL = "http://localhost:8000"  # FastAPI backend URL

class DashboardBot(commands.Bot):
    def __init__(self):
        intents = discord.Intents.default()
        intents.message_content = True
        super().__init__(command_prefix='!', intents=intents)

    async def setup_hook(self):
        await self.add_cog(DataEntryCog(self))

class DataEntryCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name='task')
    async def create_task(self, ctx, title: str, *, description: str = None):
        """Create a new task"""
        async with aiohttp.ClientSession() as session:
            task_data = {
                "title": title,
                "description": description,
                "status": "pending",
                "progress": 0.0
            }
            async with session.post(f"{API_URL}/tasks/", json=task_data) as response:
                if response.status == 200:
                    await ctx.send(f"✅ Task created: {title}")
                else:
                    await ctx.send("❌ Failed to create task")

    @commands.command(name='data')
    async def create_data_entry(self, ctx, title: str, *, content: str):
        """Create a new data entry"""
        async with aiohttp.ClientSession() as session:
            data = {
                "title": title,
                "content": content,
                "source": "discord",
                "created_by": str(ctx.author)
            }
            async with session.post(f"{API_URL}/data/", json=data) as response:
                if response.status == 200:
                    await ctx.send(f"✅ Data entry created: {title}")
                else:
                    await ctx.send("❌ Failed to create data entry")

bot = DashboardBot()

@bot.event
async def on_ready():
    print(f'{bot.user} has connected to Discord!')

def run_bot():
    bot.run(DISCORD_TOKEN)
