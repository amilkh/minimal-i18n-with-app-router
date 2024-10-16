import { type HomeType } from '../types/home';

const home: HomeType = {
  introSection: {
    text: 'Virufyへようこそ',
    text2: 'あなたのデジタルヘルスパートナー',
    subText: [
      {
        type: 'span',
        text: 'Virufy',
      },
      {
        type: 'text',
        text: 'は、先進的な音声および生成AIアルゴリズムを使用して、呼吸パターンを分析し、感染症の可能性を示す症状に関するインサイトを提供する最先端のアプリです。',
      },
    ],
    buttonText: 'デモアプリ',
    disclaimer1:
      '*ウェブブラウザとマイクを備えたあらゆるデバイス（例：iPhone、Android、ノートパソコン、iPad）。',
    disclaimer2:
      '*アプリはまだ開発中です。データ収集アプリに咳の音を提供することで私たちをサポートしてください。',
    mainText2: '仕組み',
    subText2: [
      {
        type: 'text',
        text: 'デバイスのマイクに簡単な意図的な咳をするだけで、',
      },
      {
        type: 'span',
        text: 'Virufy',
      },
      {
        type: 'text',
        text: 'は人工知能の力を活用して、COVID-19、結核、インフルエンザ、RSV、COPD、喘息などの呼吸器疾患に関連する独自の音声パターンを検出します。',
      },
    ],
  },
  section2: {
    text: 'あなたの健康、私たちの優先事項',
    subtext:
      'Virufyでは、あなたの健康が私たちの活動の中心です。私たちはプライバシーを最優先し、あなたのデータが安全かつ機密であることを保証します。',
    title1: '即時分析',
    sub1: '咳の音パターンに基づいた特徴と異常プロファイルに対する迅速なフィードバック。',
    title2: '自宅での匿名性',
    sub2: '結果があなただけのものだという安心感を感じてください。',
    title3: 'ユーザーフレンドリーなインターフェース',
    sub3: '簡単にナビゲートできる直感的なデザインとスムーズなユーザーエクスペリエンス。',
    disclaimer:
      '*Virufyは医師の代わりにはなりません。医師から医療アドバイスを受けるのはあなたの責任です。',
    buttonText: '私たちの技術',
  },
};

export default home;
