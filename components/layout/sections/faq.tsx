import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "这个模板免费吗？",
    answer: "是的，这是一个免费的 Next.js Shadcn 模板。",
    value: "item-1",
  },
  {
    question: "这个模板适合哪些项目？",
    answer:
      "它适合产品官网、个人作品集、创业项目和各类营销页面。",
    value: "item-2",
  },
  {
    question:
      "可以自定义页面样式吗？",
    answer:
      "可以。你可以根据品牌需求调整颜色、字体、图片和页面内容。",
    value: "item-3",
  },
  {
    question: "支持响应式布局吗？",
    answer: "支持，页面会适配桌面、平板和移动设备。",
    value: "item-4",
  },
  {
    question:
      "如何获取技术支持？",
    answer: "你可以通过社区或联系表单向我们提交问题。",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          常见问题
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          常见问题解答
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
