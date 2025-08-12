# Jan - 本地AI助手

![Jan AI](docs/src/pages/docs/_assets/jan-app.png)

<p align="center">
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/menloresearch/jan"/>
  <img alt="Github Last Commit" src="https://img.shields.io/github/last-commit/menloresearch/jan"/>
  <img alt="Github Contributors" src="https://img.shields.io/github/contributors/menloresearch/jan"/>
  <img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/menloresearch/jan"/>
  <img alt="Discord" src="https://img.shields.io/discord/1107178041848909847?label=discord"/>
</p>

<p align="center">
  <a href="https://jan.ai/docs/quickstart">Getting Started</a>
  - <a href="https://jan.ai/docs">Docs</a>
  - <a href="https://jan.ai/changelog">Changelog</a>
  - <a href="https://github.com/menloresearch/jan/issues">Bug reports</a>
  - <a href="https://discord.gg/AsJ8krTT3N">Discord</a>
</p>

Jan是一款能在您设备上100%离线运行的AI助手。下载并运行各类大语言模型，享受**完全掌控**与**隐私保护**。

## 安装

最简单的入门方式是下载适用于您操作系统的版本：

<table>
  <tr>
    <td><b>Platform</b></td>
    <td><b>Stable</b></td>
    <td><b>Nightly</b></td>
  </tr>
  <tr>
    <td><b>Windows</b></td>
    <td><a href='https://app.jan.ai/download/latest/win-x64'>jan.exe</a></td>
    <td><a href='https://app.jan.ai/download/nightly/win-x64'>jan.exe</a></td>
  </tr>
  <tr>
    <td><b>macOS</b></td>
    <td><a href='https://app.jan.ai/download/latest/mac-universal'>jan.dmg</a></td>
    <td><a href='https://app.jan.ai/download/nightly/mac-universal'>jan.dmg</a></td>
  </tr>
  <tr>
    <td><b>Linux (deb)</b></td>
    <td><a href='https://app.jan.ai/download/latest/linux-amd64-deb'>jan.deb</a></td>
    <td><a href='https://app.jan.ai/download/nightly/linux-amd64-deb'>jan.deb</a></td>
  </tr>
  <tr>
    <td><b>Linux (AppImage)</b></td>
    <td><a href='https://app.jan.ai/download/latest/linux-amd64-appimage'>jan.AppImage</a></td>
    <td><a href='https://app.jan.ai/download/nightly/linux-amd64-appimage'>jan.AppImage</a></td>
  </tr>
</table>

从[jan.ai](https://jan.ai/)或[GitHub Releases](https://github.com/menloresearch/jan/releases)下载。

## 功能特性

- **本地AI模型**：从HuggingFace下载并运行各类大语言模型（Llama、Gemma、Qwen等）
- **云端集成**：连接OpenAI、Anthropic、Mistral、Groq等服务
- **定制助手**：为特定任务创建专属AI助手
- **OpenAI兼容API**：本地服务器运行于`localhost:1337`，可供其他应用调用
- **模型上下文协议**：集成MCP协议增强功能
- **隐私优先**：所有操作均可按需在本地完成

## 从源码构建

适合喜欢折腾的用户：

### 环境要求

- Node.js ≥ 20.0.0
- Yarn ≥ 1.22.0
- Make ≥ 3.81
- Rust（用于Tauri框架）

### 使用Make运行

```bash
git clone https://github.com/menloresearch/jan
cd jan
make dev
```

一键完成所有操作：安装依赖、构建核心组件并启动应用。

**可用make指令：**

- `make dev` - 完整开发环境配置并启动
- `make build` - 生产环境构建
- `make test` - 运行测试与代码检查
- `make clean` - 清除所有文件重新开始

### 使用Mise运行（更简单）

您也可以使用 [mise](https://mise.jdx.dev/) 运行，这种方式更为简便，因为它能自动管理 Node.js、Rust 和其他依赖项的版本：

```bash
git clone https://github.com/menloresearch/jan
cd jan

# Install mise (if not already installed)
curl https://mise.run | sh

# Install tools and start development
mise install    # installs Node.js, Rust, and other tools
mise dev        # runs the full development setup
```

**可用的 mise 命令：**

- `mise dev` - 完整的开发环境设置并启动
- `mise build` - 生产环境构建
- `mise test` - 运行测试和代码检查
- `mise clean` - 清除所有内容并重新开始
- `mise tasks` - 列出所有可用任务

### 手动命令

```bash
yarn install
yarn build:core
yarn build:extensions
yarn dev
```

## 系统要求

**获得良好体验的最低配置：**

- **macOS**: 13.6+ (3B 模型需 8GB 内存，7B 需 16GB，13B 需 32GB)
- **Windows**: 10+ 并支持 NVIDIA/AMD/Intel Arc GPU
- **Linux**: 大多数发行版均可运行，支持 GPU 加速

详细兼容性信息请查阅我们的[安装指南](https://jan.ai/docs/desktop/mac)。

## 故障排除

如果出现问题：

1. 查看我们的[故障排除文档](https://jan.ai/docs/troubleshooting)
2. 复制错误日志和系统配置信息
3. 在我们的 [Discord](https://discord.gg/FTk2MvZwJH) `#🆘|jan-help` 频道寻求帮助

## 参与贡献

欢迎贡献代码。完整说明请参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 相关链接

- [文档](https://jan.ai/docs) - 您应该阅读的手册
- [API 参考](https://jan.ai/api-reference) - 面向技术人员
- [更新日志](https://jan.ai/changelog) - 我们修复和破坏的内容
- [Discord](https://discord.gg/FTk2MvZwJH) - 社区交流平台

## 联系我们

- **问题反馈**: [GitHub Issues](https://github.com/menloresearch/jan/issues)  
- **商务合作**: hello@jan.ai  
- **招聘信息**: hr@jan.ai  
- **社区讨论**: [Discord](https://discord.gg/FTk2MvZwJH)

## 许可协议

Apache 2.0 许可证 - 因为分享即关怀。

## 致谢

站在巨人的肩膀上构建：

- [Llama.cpp](https://github.com/ggerganov/llama.cpp)  
- [Tauri](https://tauri.app/)  
- [Scalar](https://github.com/scalar/scalar)