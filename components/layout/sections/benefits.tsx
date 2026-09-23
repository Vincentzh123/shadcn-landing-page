import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "建立品牌信任",
    description:
      "通过清晰专业的呈现方式，让用户更信任你的品牌。",
  },
  {
    icon: "LineChart",
    title: "获取更多潜客",
    description:
      "用更有吸引力的内容带来更多高质量线索。",
  },
  {
    icon: "Wallet",
    title: "提升转化率",
    description:
      "优化用户体验，帮助更多访客完成转化。",
  },
  {
    icon: "Sparkle",
    title: "验证营销创意",
    description:
      "快速测试新的营销想法，找到最有效的增长方式。",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">核心优势</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            通往成功的捷径
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            从品牌建设到用户转化，一套设计帮你更快实现业务目标。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
