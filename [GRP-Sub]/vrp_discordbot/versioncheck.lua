print("[^1Galaxy Discord Bot^7]: " .. 'Checking for vRP Discord Bot Updates..')
local version = module("vrp_discordbot", "version")
PerformHttpRequest("https://raw.githubusercontent.com/JamesEU/dunko_vrp/master/vrp_discordbot/version.lua",function(err,text,headers)
if err == 200 then
    text = string.gsub(text,"return ","")
    local r_version = tonumber(text)
    if version ~= r_version then
        print("[^1Galaxy Discord Bot^7]:" .. 'A vRP Discord Bot Update is available from: https://github.com/DunkoUK/dunko_vrp')
    else 
        print("[^1Galaxy Discord Bot^7]: " .. 'You are running the most up to date Galaxy vRP Bot Version. Thanks for using Jam_e_s_U_K bot and thanks to our contributors for updating the project. Support Found At: https://discord.gg/b8wQn2XqDt')
    end
else
    print("[vRP] unable to check the remote version")
end
end, "GET", "")
