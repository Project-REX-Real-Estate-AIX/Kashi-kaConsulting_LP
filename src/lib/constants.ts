export const SITE_CONFIG = {
  title: "業務可視化コンサルティング",
  description: "中規模オーナー企業の業務改善をサポートします",
  consultation_url: "https://www.jicoo.com/t/Kashika_Consulting/e/hearing"
}

export const NAVIGATION_LINKS = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/contact", label: "Contact" }
]

import { ServiceCardProps } from "@/components/ServiceCard"

export const FEATURES: ServiceCardProps[] = [
  {
    icon: "PieChart",
    title: "現行業務の可視化",
    description: "現状の業務を分析し、業務フローとして可視化"
  },
  {
    icon: "Search",
    title: "ボトルネックの特定",
    description: "可視化の結果から無駄・ボトルネックとなっている業務プロセスを特定し、改善点を明確化"
  },
  {
    icon: "Flag",
    title: "To-Beの業務フローと実現方法のご提案",
    description: "理想の業務フローと実現の為のAI活用方法のご提案"
  }
]

export const PACKAGES = [
  {
    title: "パッケージA",
    subtitle: "As-Is分析",
    features: [
      "現状の業務フローを可視化し、全体像を把握",
      "非効率な業務プロセスを明確化"
    ],
    price: "Ask"
  },
  {
    title: "パッケージB", 
    subtitle: "To-Be提案",
    features: [
      "売上最大化・コスト最小化を実現する為のあるべき業務フローの提案"
    ],
    price: "Coming soon..."
  }
]

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "ヒアリング（貴社・弊社）",
    description: "事前アンケートフォームとオンラインMTGでご共有"
  },
  {
    number: "02", 
    title: "分析に必要な素材の提供（貴社）",
    description: "分析対象となるオフィスワーカの作業内容を動画で共有 ※作業内容の動画録画に必要な支援は弊社で実施"
  },
  {
    number: "03",
    title: "分析（弊社）", 
    description: "共有頂いた動画を元に業務内容分析し可視化 可視化した結果からボトルネックを明確化"
  },
  {
    number: "04",
    title: "成果報告（貴社・弊社）",
    description: "分析結果をレポート形式で提供し、オンラインMTGにてご共有"
  }
]