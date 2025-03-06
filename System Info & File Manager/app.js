const fs = require("fs");
const path = require("path");
const os = require("os");


const ops = os.platform
const arch = os.arch()
const homeDir = os.homedir
console.log(`OS: ${ops}`);
console.log(`Architecture: : ${arch}`);
console.log(`Home Directory: ${homeDir}`);

const folderName = path.join(__dirname, "test");

if(!fs.existsSync(folderName)){
    fs.mkdir(folderName, (err) => {
        if(err) console.error("Error creating folder:", err);
        else console.log(`Folder created: ${folderName}`);
    });
}
else{
    console.log("Error: folder already exists !");
}

const content = `${ops}\n${arch}\n${homeDir}`;
const filePath = path.join(__dirname, "info.txt");

fs.writeFileSync(filePath, content, (err) => {
    if(err) console.log("Error writing to file!");
    else console.log("File created and infos written successfully !");
});

fs.readFile(filePath, "utf8", (err, data) =>{
    if(err) console.log("Error reading file!");
    else console.log(`info's content: \n${data}`);
})


const newPath = path.join(__dirname, "system-info.txt");

fs.rename(filePath, newPath, (err) => {
    if (err) console.error("Error renaming file:");
     else console.log(`File renamed to: ${newPath}`);
    
});

setTimeout(() => {
    fs.unlink(newPath, (err) => {
        if (err) {
            console.error("Error deleting file:");
        } else {
            console.log("File deleted successfully after 5 seconds!");
        }
    });
}, 5000);

