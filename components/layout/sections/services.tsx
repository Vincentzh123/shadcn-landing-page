import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "自定义域名接入",
    description:
      "使用专属域名打造统一的品牌形象。",
    pro: 0,
  },
  {
    title: "社交媒体集成",
    description:
      "连接社交平台，扩大内容触达范围。",
    pro: 0,
  },
  {
    title: "邮件营销集成",
    description: "高效触达用户，持续培育客户关系。",
    pro: 0,
  },
  {
    title: "SEO 优化",
    description: "提升搜索排名，让更多用户发现你。",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        服务项目
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        助力业务增长
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        从营销销售到运营策略，我们拥有帮助你实现目标的专业能力。
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
