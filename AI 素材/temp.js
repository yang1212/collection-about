const fs = require('fs');
const path = require('path');

// === 自定义设置 ===
const username = 'yang1212';
const repo = 'collection-about';
const branch = 'master';
const folderPath = '/4-其他'; // 仓库内路径
const localPath = path.join(__dirname, folderPath);
const outputFile = path.join(__dirname, 'cdn-links.txt'); // 输出文件名

// === 生成链接 ===
fs.readdir(localPath, (err, files) => {
  if (err) {
    console.error('❌ 读取目录失败：', err);
    return;
  }

  const links = files
    .filter(f => /\.(png|jpe?g|gif|webp|svg)$/i.test(f))
    .map(file => {
      const encodedPath = folderPath
        .split('/')
        .map(encodeURIComponent)
        .join('/');
      const encodedFile = encodeURIComponent(file);
      return `https://cdn.jsdelivr.net/gh/${username}/${repo}@${branch}/AI 素材${encodedPath}/${encodedFile}`;
    });

  // 写入文件
  fs.writeFile(outputFile, links.join('\n'), err => {
    if (err) {
      console.error('❌ 写入文件失败：', err);
    } else {
      console.log(`✅ 成功生成 ${links.length} 条链接，已保存到：${outputFile}`);
    }
  });
});
