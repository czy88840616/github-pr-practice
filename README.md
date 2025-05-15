# GitHub PR 练习项目

这是一个专为学习如何在 GitHub 上提交 Pull Request (PR) 而设计的指导项目。通过这个项目，你可以练习如何发现问题、创建分支、修复代码并提交 PR。

## 项目目的

- 学习 Git 和 GitHub 的基本工作流程
- 理解如何发现和修复代码中的问题
- 掌握提交 PR 的完整流程
- 体验代码审查和协作开发

## 项目结构

```
.
├── README.md          # 项目说明文档
├── CONTRIBUTING.md    # 贡献指南
├── LICENSE            # 开源许可证
├── .github/           # GitHub 相关配置
│   └── PULL_REQUEST_TEMPLATE.md  # PR 模板
└── src/               # 源代码目录
    ├── index.html     # 包含一些 HTML 错误
    ├── styles.css     # 包含一些 CSS 错误
    └── script.js      # 包含一些 JavaScript 错误
```

## 如何开始

1. Fork 这个仓库到你的 GitHub 账号
2. 克隆你 fork 的仓库到本地
   ```bash
   git clone https://github.com/你的用户名/sole-template.git
   cd sole-template
   ```
3. 创建一个新的分支
   ```bash
   git checkout -b fix-issue-描述
   ```
4. 找到并修复代码中的问题
5. 提交你的更改
   ```bash
   git add .
   git commit -m "修复: 问题描述"
   ```
6. 推送到你的 GitHub 仓库
   ```bash
   git push origin fix-issue-描述
   ```
7. 在 GitHub 上创建一个新的 Pull Request

## 待修复的问题

项目中故意留有一些问题，供你练习修复：

1. HTML 文件中的标签未正确闭合
2. CSS 文件中的样式冲突
3. JavaScript 文件中的逻辑错误
4. 拼写错误和不一致的命名
5. 缺少注释或文档

## 贡献指南

请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 文件了解如何贡献代码。

## 许可证

本项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件。

## 联系方式

如有任何问题，请通过 Issues 提问。

---

祝你学习愉快！希望这个项目能帮助你更好地理解 GitHub 协作流程。