import ThemeImage from '@/components/ThemeImage'
import React from 'react'

const Customizable = () => {
  return (
    <div className="pt-24 pb-20 nextra-wrap-container">
      <div className="w-full text-center">
        <h1 className="text-5xl lg:text-7xl !font-normal leading-tight lg:leading-tight mt-2 font-serif">
          高度可定制
        </h1>

        <div className="lg:w-1/2 mx-auto">
          <p className="leading-relaxed mt-2 text-black/60 dark:text-white/60">
            根据你的需求和偏好，自定义 Jan。
          </p>
        </div>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row mt-10 ">
        <div className="w-full lg:w-1/2 border border-neutral-200 rounded-2xl dark:border-neutral-800">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
              <h1 className="text-2xl font-medium">助手与记忆</h1>
              <div className="flex">
                <div className="font-medium text-sm bg-blue-100 rounded-lg px-2 py-1 text-blue-700">
                  即将推出
                </div>
              </div>
            </div>
            <p className="text-lg mt-4 text-black/60 dark:text-white/60">
              创建个性化的 AI
              助手，它们能记住你的对话，并在你的系统中执行特定任务。
            </p>
          </div>

          <div className="relative p-3">
            <ThemeImage
              alt="App Screenshot Feature"
              width={800}
              height={800}
              className="w-full h-full object-cover object-center"
              priority
              source={{
                light: '/assets/images/homepage/assistant-light.png',
                dark: '/assets/images/homepage/assistant-dark.png',
              }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 border border-neutral-200 rounded-2xl dark:border-neutral-800">
          <div className="p-6">
            <h1 className="text-2xl font-medium">扩展功能</h1>
            <p className="text-lg mt-4 text-black/60 dark:text-white/60">
              使用扩展功能自定义 Jan，涵盖云端 AI 连接器、工具和数据连接器等。
            </p>
          </div>

          <div className="relative p-3">
            <ThemeImage
              alt="App Screenshot Feature"
              width={800}
              height={800}
              className="w-full h-full object-cover object-center"
              priority
              source={{
                light: '/assets/images/homepage/extension-light.png',
                dark: '/assets/images/homepage/extension-dark.png',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customizable
