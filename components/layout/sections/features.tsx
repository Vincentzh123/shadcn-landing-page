import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "移动端友好",
    description:
      "在手机、平板和桌面设备上都能保持出色体验。",
  },
  {
    icon: "BadgeCheck",
    title: "社会认同",
    description:
      "通过真实评价与案例建立用户信任。",
  },
  {
    icon: "Goal",
    title: "精准内容",
    description:
      "围绕目标用户组织内容，传达清晰有效的信息。",
  },
  {
    icon: "PictureInPicture",
    title: "视觉表现力",
    description:
      "用有力的视觉设计吸引注意并强化品牌印象。",
  },
  {
    icon: "MousePointerClick",
    title: "明确的行动号召",
    description:
      "让用户始终清楚下一步该做什么。",
  },
  {
    icon: "Newspaper",
    title: "清晰的标题",
    description:
      "用简洁有力的标题迅速传达核心价值。",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        功能特色
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        我们有何不同
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        从内容到交互，每个细节都为更好的用户体验而设计。
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
