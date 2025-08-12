import ThemeImage from '@/components/ThemeImage'
import { useState } from 'react'
// import { BsArrowRight } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

const features = [
  {
    title: '与 AI 聊天',
    experimantal: false,
    description:
      '在你的设备上运行的 AI，随时回答问题、头脑风暴、学习，让你更高效。',
    image: {
      light: '/assets/images/homepage/features01.png',
      dark: '/assets/images/homepage/features01dark.png',
    },
  },
  {
    title: '模型中心',
    experimantal: false,
    description: `在你的电脑上下载并运行强大的模型，如 Llama3、Gemma 或 Mistral。`,
    image: {
      light: '/assets/images/homepage/features02.png',
      dark: '/assets/images/homepage/features02dark.png',
    },
  },
  {
    title: '连接云端 AI',
    experimantal: false,
    description: `在需要时，你还可以接入更强大的云端模型，如 OpenAI、Groq、Cohere 等。`,
    image: {
      light: '/assets/images/homepage/features03.png',
      dark: '/assets/images/homepage/features03dark.png',
    },
  },
  {
    title: '本地 API 服务器',
    experimantal: false,
    description: `只需一键即可使用本地模型搭建并运行兼容 OpenAI 的 API 服务器。`,
    image: {
      light: '/assets/images/homepage/features04.png',
      dark: '/assets/images/homepage/features04dark.png',
    },
  },
  {
    title: '与文件对话',
    experimantal: true,
    description: `直接与 PDF、笔记及其他文档对话，获取摘要、答案或洞察。`,
    image: {
      light: '/assets/images/homepage/features05.png',
      dark: '/assets/images/homepage/features05dark.png',
    },
  },
]

const Feature = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <>
      <div className="nextra-wrap-container">
        <div className="w-full mx-auto relative py-8 lg:pt-24">
          <div className="flex p-4 lg:px-0 lg:justify-between flex-col lg:flex-row items-center">
            <div className="w-full text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl !font-normal leading-tight lg:leading-tight mt-2 font-serif">
                功能
              </h1>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col items-start gap-10 xl:gap-14 mt-10">
            <div className="w-full lg:w-1/2 px-4 lg:p-0">
              {features.map((feature, i) => {
                const isActive = activeFeature === i
                return (
                  <div
                    key={i}
                    className={twMerge(
                      'mb-4 py-6 lg:p-6 rounded-xl cursor-pointer',
                      isActive && 'lg:dark:bg-[#1F1F1F] lg:bg-[#F5F5F5]'
                    )}
                    onClick={() => setActiveFeature(i)}
                  >
                    <div
                      className={twMerge(
                        'flex items-center gap-4',
                        isActive && 'items-start'
                      )}
                    >
                      <h1 className="dark:text-[#4C4C4C] text-[#C4C4C4] text-[32px] font-bold">
                        0{i + 1}
                      </h1>
                      <div>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-x-2">
                          <h6 className="text-xl font-bold">{feature.title}</h6>
                          {feature.experimantal && (
                            <div className="flex mt-2 lg:mt-0">
                              <div className="font-medium text-sm bg-blue-100 rounded-lg px-2 py-1 text-blue-700">
                                Experimental
                              </div>
                            </div>
                          )}
                        </div>
                        <p
                          className={twMerge(
                            'mt-1 leading-relaxed text-black/60 dark:text-white/60 hidden',
                            isActive && 'block'
                          )}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="lg:hidden block mt-4">
                      <ThemeImage
                        alt="App Screenshot Feature"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover object-center"
                        priority
                        source={{
                          light: feature.image?.light,
                          dark: feature.image?.dark,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="relative w-full overflow-hidden  hidden lg:block">
              {activeFeature === 0 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center"
                  priority
                  source={{
                    light: '/assets/images/homepage/features01.png',
                    dark: '/assets/images/homepage/features01dark.png',
                  }}
                />
              )}
              {activeFeature === 1 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center"
                  priority
                  source={{
                    light: '/assets/images/homepage/features02.png',
                    dark: '/assets/images/homepage/features02dark.png',
                  }}
                />
              )}
              {activeFeature === 2 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center"
                  priority
                  source={{
                    light: '/assets/images/homepage/features03.png',
                    dark: '/assets/images/homepage/features03dark.png',
                  }}
                />
              )}
              {activeFeature === 3 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center"
                  priority
                  source={{
                    light: '/assets/images/homepage/features04.png',
                    dark: '/assets/images/homepage/features04dark.png',
                  }}
                />
              )}
              {activeFeature === 4 && (
                <ThemeImage
                  alt="App Screenshot Feature"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center"
                  priority
                  source={{
                    light: '/assets/images/homepage/features05.png',
                    dark: '/assets/images/homepage/features05dark.png',
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature
