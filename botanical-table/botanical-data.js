/*
 * Bar Soutsu ボタニカル表 共通データ。
 * 香気成分は代表例で、品種・産地・抽出条件により変動します。
 * ジン在庫カタログと蒸留ノートも、このファイルを読み込みます。ボタニカルを足すときは、ここだけ直してください。
 * aliasMap は、在庫カタログなどの表記ゆれ（例：生姜）を、表の名前（例：ジンジャー）に読み替える辞書です。
 * aliasExcludes は、表の名前の一部を含んでいても、その素材として読み替えない言葉です（例：花梨は梨ではない）。
 */
(function () {
  "use strict";

  window.SOUTSU_BOTANICAL_DATA = {
  "components": {
    "α-ピネン": {
      "family": "テルペン",
      "note": "松葉、針葉樹、樹脂、清涼感",
      "threshold": {
        "value": 6,
        "unit": "µg/L（水）",
        "min": 5,
        "max": 190,
        "source": "Leffingwell & Leffingwell (1991), Table III",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 2000,
          "medium": "20%エタノール（Clutton & Evans 1978, ジンの香気成分）",
          "abv": 20
        }
      }
    },
    "β-ピネン": {
      "family": "テルペン",
      "note": "松、樹脂、ドライな木質",
      "threshold": {
        "value": 140,
        "unit": "µg/L（水）",
        "min": 140,
        "max": 4160,
        "source": "Leffingwell & Leffingwell (1991), Table III",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 3500,
          "medium": "20%エタノール（Clutton & Evans 1978）",
          "abv": 20
        }
      }
    },
    "β-ミルセン": {
      "family": "テルペン",
      "note": "青い草、樹脂、軽い土っぽさ",
      "threshold": {
        "value": 13,
        "unit": "µg/L（水）",
        "min": 1.2,
        "max": 100,
        "source": "Leffingwell & Leffingwell (1991), Table III（13-15）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 101,
          "medium": "45%エタノール（Buck et al. 2020）",
          "abv": 45
        }
      }
    },
    "サビネン": {
      "family": "テルペン",
      "note": "スパイス、針葉樹、ほのかな柑橘",
      "threshold": {
        "value": 980,
        "unit": "µg/L（水）",
        "source": "Boonbumrung, Tamura et al. (2001) Food Sci. Technol. Res. 7(3):200-206, Table 3",
        "url": "https://www.jstage.jst.go.jp/article/fstr/7/3/7_3_200/_pdf"
      }
    },
    "リモネン": {
      "family": "テルペン",
      "note": "柑橘ピール、明るいトップノート",
      "threshold": {
        "value": 10,
        "unit": "µg/L（水）",
        "min": 10,
        "max": 1200,
        "source": "Leffingwell & Leffingwell (1991) GRAS Flavor Chemicals—Detection Thresholds, Perfumer & Flavorist 16(1), Table III",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 2804,
          "medium": "45%エタノール（Buck et al. 2020, ババリアのジン2銘柄の研究）",
          "abv": 45
        }
      }
    },
    "リナロール": {
      "family": "テルペンアルコール",
      "note": "花、柑橘、ラベンダー様の柔らかさ",
      "threshold": {
        "value": 6,
        "unit": "µg/L（水）",
        "min": 0.087,
        "max": 100,
        "source": "Foods 2025, key odorants in blueberries（水中の閾値、最も多く引用される値。Leffingwell表も6）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11988591/",
        "ethanol": {
          "value": 23,
          "medium": "水/エタノール 6:4（約40%）",
          "abv": 40
        }
      }
    },
    "ゲラニオール": {
      "family": "テルペンアルコール",
      "note": "バラ、ゼラニウム、甘い花",
      "threshold": {
        "value": 40,
        "unit": "µg/L（水）",
        "min": 1.1,
        "max": 75,
        "source": "Metabolites 2022, Lingtou Dancong oolong tea（Leffingwell表も40-75）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9695488/",
        "ethanol": {
          "value": 30,
          "medium": "モデルワイン（水/エタノール 90+10）",
          "abv": 10
        }
      }
    },
    "シトロネロール": {
      "family": "テルペンアルコール",
      "note": "バラ、シトラス、清潔感",
      "threshold": {
        "value": 40,
        "unit": "µg/L（水）",
        "min": 4.9,
        "max": 62,
        "source": "Molecules 2020, citrus-tea OAV（(+)-β-シトロネロール。Leffingwell表も40）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7766395/",
        "ethanol": {
          "value": 100,
          "medium": "モデルワイン（水/エタノール 90+10）",
          "abv": 10
        }
      }
    },
    "ネロール": {
      "family": "テルペンアルコール",
      "note": "バラ、オレンジフラワー、丸い甘さ",
      "threshold": {
        "value": 300,
        "unit": "µg/L（水）",
        "min": 290,
        "max": 680,
        "source": "Foods 2025, key odorants in blueberries（Leffingwell表も300）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11988591/",
        "ethanol": {
          "value": 500,
          "medium": "エタノール水溶液（シェリー酒研究）"
        }
      }
    },
    "シトラール": {
      "family": "アルデヒド",
      "note": "レモン、レモングラス、鋭い柑橘",
      "threshold": {
        "value": 31,
        "unit": "µg/L（水）",
        "min": 30,
        "max": 85.3,
        "source": "Leffingwell & Leffingwell (1991), Table III（ネラール30とゲラニアール32の平均）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf"
      }
    },
    "シトロネラール": {
      "family": "アルデヒド",
      "note": "レモン、グリーン、虫よけ草様",
      "threshold": {
        "value": 30,
        "unit": "µg/L（水）",
        "source": "Padrayuttawat, Tamura et al. (1997) Food Sci. Technol. Int. Tokyo 3(4):402-408, Table 2",
        "url": "https://www.jstage.jst.go.jp/article/fsti9596t9798/3/4/3_4_402/_pdf"
      }
    },
    "ヌートカトン": {
      "family": "セスキテルペンケトン",
      "note": "グレープフルーツ、苦みのある柑橘",
      "threshold": {
        "value": 1,
        "unit": "µg/L（水）",
        "min": 0.8,
        "max": 1,
        "source": "Leffingwell & Leffingwell (1991), Table III（(+)-ヌートカトン 0.8-1）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf"
      }
    },
    "ユズノン": {
      "family": "ケトン",
      "note": "柚子らしい力強い柑橘感"
    },
    "リナリルアセテート": {
      "family": "エステル",
      "note": "ラベンダー、ベルガモット、上品な花",
      "threshold": {
        "value": 1000,
        "unit": "µg/L（水）",
        "min": 500,
        "max": 1000,
        "source": "Molecules 2020, citrus-tea OAV（van Gemert 2011の水中値）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7766395/",
        "ethanol": {
          "value": 68.4,
          "medium": "モデルワイン（12%）",
          "abv": 12
        }
      }
    },
    "酢酸ゲラニル": {
      "family": "エステル",
      "note": "フルーティーな花、バラ様",
      "threshold": {
        "value": 9,
        "unit": "µg/L（水）",
        "min": 9,
        "max": 150,
        "source": "Food Chemistry: X 2025, Huangjincha black tea（Leffingwell表も9）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12018022/",
        "ethanol": {
          "value": 20.9,
          "medium": "モデルワイン（12%）",
          "abv": 12
        }
      }
    },
    "ボルネオール": {
      "family": "テルペンアルコール",
      "note": "樟脳、木質、薬草",
      "threshold": {
        "value": 140,
        "unit": "µg/L（水）",
        "min": 14,
        "max": 180,
        "source": "Foods 2020, Hovenia acerba aroma（Pino & Mesa 2006の値）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7230446/"
      }
    },
    "テルピネン-4-オール": {
      "family": "テルペンアルコール",
      "note": "ハーブ、木質、やや薬草",
      "threshold": {
        "value": 1200,
        "unit": "µg/L（水）",
        "min": 110,
        "max": 6400,
        "source": "Molecules 2020, citrus-tea OAV（van Gemert 2011の水中値）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7766395/",
        "ethanol": {
          "value": 5000,
          "medium": "エタノール水溶液（シェリー酒研究）"
        }
      }
    },
    "1,8-シネオール": {
      "family": "エーテル",
      "note": "ユーカリ、清涼感、カンファー",
      "threshold": {
        "value": 4.6,
        "unit": "µg/L（水）",
        "min": 1.1,
        "max": 12,
        "source": "Qi et al. (2025) Food Chemistry: X（van Gemertの水中値）",
        "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12167021/fullTextXML",
        "ethanol": {
          "value": 635,
          "medium": "45%エタノール（Buck et al. 2020）",
          "abv": 45
        }
      }
    },
    "メントール": {
      "family": "テルペンアルコール",
      "note": "冷涼感、ミント",
      "threshold": {
        "value": 920,
        "unit": "µg/L（水）",
        "min": 130,
        "max": 2280,
        "source": "npj Science of Food 2026, Brazilian seasonings OAV",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12887069/"
      }
    },
    "メントン": {
      "family": "ケトン",
      "note": "ミント、涼しさ、青み",
      "threshold": {
        "value": 170,
        "unit": "µg/L（水）",
        "min": 170,
        "max": 350,
        "source": "Leffingwell & Leffingwell (1991), Table III",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf"
      }
    },
    "カルボン": {
      "family": "ケトン",
      "note": "スペアミント、キャラウェイ、甘いハーブ"
    },
    "アネトール": {
      "family": "フェニルプロペン",
      "note": "アニス、甘草、甘いスパイス",
      "threshold": {
        "value": 73,
        "unit": "µg/L（水）",
        "min": 15,
        "max": 73,
        "source": "Zeller & Rychlik (2006) J. Agric. Food Chem. 54:3686（Food Chemistry: X 2026の引用）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13400954/",
        "ethanol": {
          "value": 748,
          "medium": "45%エタノール（Buck et al. 2020, ジンの研究）",
          "abv": 45
        }
      }
    },
    "エストラゴール": {
      "family": "フェニルプロペン",
      "note": "バジル、タラゴン、甘いハーブ"
    },
    "オイゲノール": {
      "family": "フェノール",
      "note": "クローブ、歯科薬、甘い刺激",
      "threshold": {
        "value": 6,
        "unit": "µg/L（水）",
        "min": 6,
        "max": 30,
        "source": "Leffingwell & Leffingwell (1991), Table III（6-30）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 6,
          "medium": "モデルワイン（水/エタノール 90+10）",
          "abv": 10
        }
      }
    },
    "メチルオイゲノール": {
      "family": "フェニルプロペン",
      "note": "甘いスパイス、花、薬草"
    },
    "シンナムアルデヒド": {
      "family": "アルデヒド",
      "note": "シナモン、甘い熱感",
      "threshold": {
        "value": 750,
        "unit": "µg/L（水）",
        "min": 385,
        "max": 6000,
        "source": "Huang et al. (2025) Foods 14:3570, Table 2（van Gemert 2011の水中値）",
        "url": "https://mdpi-res.com/d_attachment/foods/foods-14-03570/article_deploy/foods-14-03570.pdf",
        "ethanol": {
          "value": 1180,
          "medium": "モデルワイン（水/エタノール 90+10）",
          "abv": 10
        }
      }
    },
    "クミンアルデヒド": {
      "family": "アルデヒド",
      "note": "クミン、カレー、温かい土っぽさ"
    },
    "サフラナール": {
      "family": "アルデヒド",
      "note": "サフラン、蜂蜜、乾いた花"
    },
    "ジンゲロール": {
      "family": "フェノール類",
      "note": "生姜の辛味、温かさ"
    },
    "ショウガオール": {
      "family": "フェノール類",
      "note": "乾いた生姜、強い辛味"
    },
    "ピペリン": {
      "family": "アルカロイド",
      "note": "胡椒の辛味、舌の刺激"
    },
    "β-カリオフィレン": {
      "family": "セスキテルペン",
      "note": "黒胡椒、木質、スパイス",
      "threshold": {
        "value": 64,
        "unit": "µg/L（水）",
        "min": 64,
        "max": 1540,
        "source": "Leffingwell & Associates, Odor & Flavor Detection Thresholds in Water（Guadagni et al. 1966）",
        "url": "http://www.leffingwell.com/odor.htm"
      }
    },
    "α-フムレン": {
      "family": "セスキテルペン",
      "note": "ホップ、木質、乾いた苦み",
      "threshold": {
        "value": 160,
        "unit": "µg/L（水）",
        "min": 120,
        "max": 390,
        "source": "Yang et al. (2026) Foods 15:324（van Gemertの水中検知閾値）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12840180/"
      }
    },
    "ファルネセン": {
      "family": "セスキテルペン",
      "note": "青りんご、グリーン、果皮",
      "threshold": {
        "value": 87,
        "unit": "µg/L（水）",
        "source": "Luo et al. (2025) Food Chem. X 29:102753（水中の既報値）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12284787/"
      }
    },
    "ゲルマクレンD": {
      "family": "セスキテルペン",
      "note": "ハーブ、木質、やや土っぽい",
      "threshold": {
        "value": 1.2,
        "unit": "µg/L（水）",
        "source": "Feng et al. (2025) Food Chem. X 28:102632（二次資料・一次文献は未確認）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12180960/"
      }
    },
    "カンフェン": {
      "family": "テルペン",
      "note": "針葉樹、樟脳、ドライ",
      "threshold": {
        "value": 1860,
        "unit": "µg/L（水）",
        "min": 1860,
        "max": 1980,
        "source": "Padrayuttawat, Tamura et al. (1997), Table 2",
        "url": "https://www.jstage.jst.go.jp/article/fsti9596t9798/3/4/3_4_402/_pdf"
      }
    },
    "カンファー": {
      "family": "ケトン",
      "note": "樟脳、薬草、鋭い清涼感",
      "threshold": {
        "value": 1360,
        "unit": "µg/L（水）",
        "min": 520,
        "max": 4600,
        "source": "Padrayuttawat, Tamura et al. (1997), Table 2（(+)-カンファー）",
        "url": "https://www.jstage.jst.go.jp/article/fsti9596t9798/3/4/3_4_402/_pdf"
      }
    },
    "ツヨン": {
      "family": "ケトン",
      "note": "セージ、薬草、ビターな鋭さ"
    },
    "チモール": {
      "family": "フェノール",
      "note": "タイム、薬草、温かいハーブ"
    },
    "カルバクロール": {
      "family": "フェノール",
      "note": "オレガノ、薬草、強いハーブ"
    },
    "イオノン類": {
      "family": "ノリソプレノイド",
      "note": "すみれ、粉っぽい花、熟した果実",
      "threshold": {
        "value": 0.007,
        "unit": "µg/L（水）",
        "min": 0.007,
        "max": 8.4,
        "source": "Leffingwell & Leffingwell (1991), Table III（β-イオノン）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 7.3,
          "medium": "40%エタノール（Lu et al. 2025）",
          "abv": 40
        }
      }
    },
    "イロン類": {
      "family": "ケトン",
      "note": "オリス、すみれ、パウダリー"
    },
    "クマリン": {
      "family": "ラクトン",
      "note": "桜葉、トンカ、杏仁、干し草",
      "threshold": {
        "value": 50,
        "unit": "µg/L（水）",
        "min": 34,
        "max": 50,
        "source": "Current Research in Food Science 5 (2022) 1098-1107, pan-fried green tea, Table 1",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9287605/"
      }
    },
    "ベンズアルデヒド": {
      "family": "アルデヒド",
      "note": "杏仁、アーモンド、チェリー",
      "threshold": {
        "value": 350,
        "unit": "µg/L（水）",
        "min": 350,
        "max": 3500,
        "source": "Leffingwell & Leffingwell (1991), Table III（350-3500）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf"
      }
    },
    "バニリン": {
      "family": "フェノール性アルデヒド",
      "note": "バニラ、甘い樽香",
      "threshold": {
        "value": 20,
        "unit": "µg/L（水）",
        "min": 20,
        "max": 1200,
        "source": "Leffingwell & Leffingwell (1991), Table III（20-200）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 200,
          "medium": "モデルワイン（水/エタノール 90+10）",
          "abv": 10
        }
      }
    },
    "テアニン": {
      "family": "アミノ酸",
      "note": "玉露の旨み。香気ではなく味の骨格"
    },
    "ヘキサナール": {
      "family": "アルデヒド",
      "note": "青葉、刈った草、若い果皮"
    },
    "cis-3-ヘキセノール": {
      "family": "アルコール",
      "note": "青葉、切りたての草",
      "threshold": {
        "value": 70,
        "unit": "µg/L（水）",
        "min": 0.25,
        "max": 910,
        "source": "Leffingwell & Leffingwell (1991), Table III",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 1000,
          "medium": "モデルワイン（水/エタノール 90+10）",
          "abv": 10
        }
      }
    },
    "ノナジエナール": {
      "family": "アルデヒド",
      "note": "きゅうり、メロン、瑞々しい青さ"
    },
    "デカナール": {
      "family": "アルデヒド",
      "note": "オレンジピール、ワックス、明るい柑橘",
      "threshold": {
        "value": 0.1,
        "unit": "µg/L（水）",
        "min": 0.1,
        "max": 5,
        "source": "Leffingwell & Leffingwell (1991), Table III（0.1-2）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf"
      }
    },
    "オクタナール": {
      "family": "アルデヒド",
      "note": "柑橘、脂肪感、オレンジ",
      "threshold": {
        "value": 0.7,
        "unit": "µg/L（水）",
        "min": 0.6,
        "max": 8,
        "source": "Leffingwell & Leffingwell (1991), Table III",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf"
      }
    },
    "酢酸エチル": {
      "family": "エステル",
      "note": "果実、軽い揮発感"
    },
    "酢酸イソアミル": {
      "family": "エステル",
      "note": "バナナ、洋梨、甘い果実"
    },
    "酢酸ヘキシル": {
      "family": "エステル",
      "note": "りんご、洋梨、青い果実"
    },
    "2-フェニルエタノール": {
      "family": "アルコール",
      "note": "バラ、蜂蜜、柔らかい花",
      "threshold": {
        "value": 750,
        "unit": "µg/L（水）",
        "min": 140,
        "max": 2000,
        "source": "Leffingwell & Leffingwell (1991), Table III（750-1100）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 14000,
          "medium": "モデルワイン（水/エタノール 90+10）",
          "abv": 10
        }
      }
    },
    "ローズオキサイド": {
      "family": "エーテル",
      "note": "バラ、ライチ、華やかな花",
      "threshold": {
        "value": 0.5,
        "unit": "µg/L（水）",
        "min": 0.045,
        "max": 0.5,
        "source": "Leffingwell & Leffingwell (1991), Table III（Ohloff 1978）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 0.2,
          "medium": "10%エタノール（cis体、Guth 1997）",
          "abv": 10
        }
      }
    },
    "ネロリドール": {
      "family": "セスキテルペンアルコール",
      "note": "白い花、木質、ワックス"
    },
    "ビサボロール": {
      "family": "セスキテルペンアルコール",
      "note": "カモミール、甘いハーブ"
    },
    "カマズレン": {
      "family": "セスキテルペン",
      "note": "カモミール、深いハーブ感"
    },
    "ヒノキチオール": {
      "family": "トロポロン",
      "note": "ヒノキ、木質、清潔感"
    },
    "セドロール": {
      "family": "セスキテルペンアルコール",
      "note": "杉、乾いた木、落ち着き"
    },
    "フィトール": {
      "family": "ジテルペンアルコール",
      "note": "茶葉、青み、油性感"
    },
    "ジャスミンラクトン": {
      "family": "ラクトン",
      "note": "桃、花、甘い果実"
    },
    "マルトール": {
      "family": "ピロン",
      "note": "焙煎、カラメル、甘い焦げ"
    },
    "ピラジン類": {
      "family": "含窒素化合物",
      "note": "焙煎、ナッツ、コーヒー"
    },
    "テオブロミン": {
      "family": "アルカロイド",
      "note": "カカオの苦味。香りより味に寄与"
    },
    "カフェイン": {
      "family": "アルカロイド",
      "note": "茶やコーヒーの苦味。香りより味に寄与"
    },
    "フルフラール": {
      "family": "アルデヒド",
      "note": "焦げ、アーモンド、焼き菓子"
    },
    "ヨード様成分": {
      "family": "ミネラル様ノート",
      "note": "海藻、磯、塩気。成分名ではなく官能軸"
    },
    "ジメチルスルフィド": {
      "family": "硫黄化合物",
      "note": "海苔、磯、加熱野菜"
    },
    "p-シメン": {
      "family": "テルペン",
      "note": "タイム、クミン、乾いたハーブ",
      "threshold": {
        "value": 5.01,
        "unit": "µg/L（水）",
        "min": 5.01,
        "max": 120,
        "source": "Qi et al. (2025) Food Chemistry: X, wild thyme（van Gemertの水中値）",
        "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12167021/fullTextXML"
      }
    },
    "γ-テルピネン": {
      "family": "テルペン",
      "note": "柑橘、ハーブ、軽いスパイス",
      "threshold": {
        "value": 1000,
        "unit": "µg/L（水）",
        "min": 260,
        "max": 1000,
        "source": "npj Science of Food (2026), Brazilian seasonings OAV, Table 2",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12887069/",
        "ethanol": {
          "value": 1500,
          "medium": "20%エタノール（Clutton & Evans 1978）",
          "abv": 20
        }
      }
    },
    "α-フェランドレン": {
      "family": "テルペン",
      "note": "ディル、ミント、青いハーブ",
      "threshold": {
        "value": 160,
        "unit": "µg/L（水）",
        "min": 40,
        "max": 160,
        "source": "Padrayuttawat, Tamura et al. (1997) Food Sci. Technol. Int. Tokyo 3(4):402-408, Table 3",
        "url": "https://www.jstage.jst.go.jp/article/fsti9596t9798/3/4/3_4_402/_pdf"
      }
    },
    "β-フェランドレン": {
      "family": "テルペン",
      "note": "ミント、柑橘、ハーブ",
      "threshold": {
        "value": 36,
        "unit": "µg/L（水）",
        "source": "npj Science of Food (2026), Table 2（二次資料のみ・信頼度低）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12887069/"
      }
    },
    "β-セスキフェランドレン": {
      "family": "セスキテルペン",
      "note": "生姜、温かいスパイス",
      "threshold": {
        "value": 40,
        "unit": "µg/L（水）",
        "min": 36,
        "max": 40,
        "source": "Hu et al. (2025) Food Chem. X 31:103101（van Gemert 2011の値）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12524543/"
      }
    },
    "ミルセン": {
      "family": "テルペン",
      "note": "青い草、樹脂、軽い土っぽさ",
      "threshold": {
        "value": 13,
        "unit": "µg/L（水）",
        "min": 1.2,
        "max": 100,
        "source": "Leffingwell & Leffingwell (1991), Table III（13-15）",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf",
        "ethanol": {
          "value": 101,
          "medium": "45%エタノール（Buck et al. 2020）",
          "abv": 45
        }
      }
    },
    "テルピニルアセテート": {
      "family": "エステル",
      "note": "カルダモン、花、甘い清涼感"
    },
    "酢酸オイゲニル": {
      "family": "エステル",
      "note": "クローブ、甘いスパイス"
    },
    "フェンコン": {
      "family": "ケトン",
      "note": "フェンネル、樟脳、甘いハーブ"
    },
    "ミリスチシン": {
      "family": "フェニルプロペン",
      "note": "ナツメグ、温かいスパイス",
      "threshold": {
        "value": 1600,
        "unit": "µg/L（水）",
        "source": "Yang et al. (2026) Odor Thresholds in Flavor Science, Compr. Rev. Food Sci. Food Saf., Table 1",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13420774/"
      }
    },
    "ミリスチン酸": {
      "family": "脂肪酸",
      "note": "ワックス、油性感。香りの持続に関わる背景成分"
    },
    "グリチルリチン": {
      "family": "サポニン",
      "note": "甘草の甘味成分。香りより甘味と厚みに寄与"
    },
    "サンショオール": {
      "family": "アミド",
      "note": "山椒・花椒のしびれ、舌の刺激"
    },
    "ペリルアルデヒド": {
      "family": "アルデヒド",
      "note": "紫蘇、青いハーブ、梅様"
    },
    "グルタミン酸": {
      "family": "アミノ酸",
      "note": "昆布の旨み。香りより味の骨格"
    },
    "オレウロペイン": {
      "family": "ポリフェノール",
      "note": "オリーブ葉の苦味と渋み"
    },
    "フラボノイド類": {
      "family": "ポリフェノール",
      "note": "茶様の渋み、乾いた余韻"
    },
    "安息香酸": {
      "family": "有機酸",
      "note": "ベリーの酸、保存感のあるシャープさ"
    },
    "ラズベリーケトン": {
      "family": "ケトン",
      "note": "ラズベリー、赤い果実、甘い花"
    },
    "サポニン類": {
      "family": "配糖体",
      "note": "根の泡立ち、薬草感、口当たりの背景"
    },
    "イヌリン": {
      "family": "多糖類",
      "note": "根菜の甘みとボディ。香りより質感に寄与"
    },
    "アサロン類": {
      "family": "フェニルプロペン",
      "note": "菖蒲根の薬草感。使用時は安全性確認が必要"
    },
    "ターメロン": {
      "family": "セスキテルペンケトン",
      "note": "ターメリック、土、乾いた根"
    },
    "ジンギベレン": {
      "family": "セスキテルペン",
      "note": "生姜、温かい木質スパイス",
      "threshold": {
        "value": 20,
        "unit": "µg/L（水）",
        "min": 20,
        "max": 500,
        "source": "Wu et al. (2025) Foods 14:3701（van Gemert 中国語版2015の値。信頼度は低め）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12608621/"
      }
    },
    "クルクミン": {
      "family": "ポリフェノール",
      "note": "ターメリックの色と苦味の背景"
    },
    "ピクロクロシン": {
      "family": "配糖体",
      "note": "サフランの苦味のもと"
    },
    "クロシン": {
      "family": "カロテノイド",
      "note": "サフランの色素。香りより色と印象に寄与"
    },
    "乳酸": {
      "family": "有機酸",
      "note": "柔らかな酸、発酵感"
    },
    "酢酸": {
      "family": "有機酸",
      "note": "ビネガー、酸、揮発感"
    },
    "リンゴ酸": {
      "family": "有機酸",
      "note": "りんご、爽やかな酸"
    },
    "酒石酸": {
      "family": "有機酸",
      "note": "ぶどう、シャープな酸"
    },
    "タンニン": {
      "family": "ポリフェノール",
      "note": "渋み、茶、樹皮、果皮"
    },
    "アントシアニン": {
      "family": "ポリフェノール",
      "note": "赤紫の色素、ベリー感の背景"
    },
    "アスコルビン酸": {
      "family": "有機酸/ビタミン",
      "note": "ローズヒップや果実の明るい酸。香りより味と印象に寄与"
    },
    "カロテノイド類": {
      "family": "カロテノイド",
      "note": "橙色の色素、熟した果実感の背景"
    },
    "サリチルアルデヒド": {
      "family": "アルデヒド",
      "note": "メドウスイート、甘い薬草、杏仁様"
    },
    "メチルサリチレート": {
      "family": "エステル",
      "note": "ウィンターグリーン、薬草、湿布様の清涼感"
    },
    "ベンジルアセテート": {
      "family": "エステル",
      "note": "ジャスミン、白い花、甘い果実"
    },
    "ジャスモン": {
      "family": "ケトン",
      "note": "ジャスミン、花、果実を含むややグリーンな甘さ"
    },
    "インドール": {
      "family": "含窒素化合物",
      "note": "白い花の動物的な厚み。少量でジャスミンらしさ",
      "threshold": {
        "value": 140,
        "unit": "µg/L（水）",
        "min": 11,
        "max": 140,
        "source": "Leffingwell & Leffingwell (1991), Table III",
        "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9106.pdf"
      }
    },
    "ソルビン酸": {
      "family": "有機酸",
      "note": "ローワンベリー由来の酸味、保存感のある背景"
    },
    "2-アセチル-1-ピロリン": {
      "family": "含窒素化合物",
      "note": "パンダン、香ばしい米、甘いナッツ様"
    },
    "シュウ酸": {
      "family": "有機酸",
      "note": "ルバーブの鋭い酸味。香りより味の骨格"
    },
    "フラネオール": {
      "family": "フラノン",
      "note": "いちご、カラメル、甘い赤い果実"
    },
    "δ-カジネン": {
      "family": "セスキテルペン",
      "note": "杉、乾いた木質、森の余韻"
    },
    "ツヨプセン": {
      "family": "セスキテルペン",
      "note": "ヒバ、樹脂、重い木質"
    },
    "カプサイシン": {
      "family": "アルカロイド",
      "note": "唐辛子の辛味。香りより刺激に寄与"
    },
    "キナ酸": {
      "family": "有機酸",
      "note": "シーバックソーンやベリーの酸味の背景"
    },
    "カフェ酸": {
      "family": "フェノール酸",
      "note": "チコリや植物根の苦味、ロースト感の背景"
    },
    "アトラクチロン": {
      "family": "セスキテルペン",
      "note": "土っぽい根、樹脂、薬草"
    },
    "β-エレメン": {
      "family": "セスキテルペン",
      "note": "ハーブ、木質、ほのかな甘さ"
    },
    "アトラクチレノリド類": {
      "family": "ラクトン",
      "note": "ほろ苦い、草木、薬草"
    },
    "リグスチリド": {
      "family": "ラクトン",
      "note": "セロリ様、甘い、スープのような旨味感"
    },
    "ブチリデンフタリド": {
      "family": "ラクトン",
      "note": "セロリ・ラベージ様、甘いスパイス"
    },
    "3-n-ブチルフタリド": {
      "family": "ラクトン",
      "note": "セロリ、スパイシー、スープ様"
    },
    "セダネノリド": {
      "family": "ラクトン",
      "note": "セロリ、青い、根の甘さ"
    },
    "1,3,8-p-メンタトリエン": {
      "family": "テルペン",
      "note": "パセリらしい青い香り"
    },
    "アピオール": {
      "family": "フェニルプロペン",
      "note": "パセリ、スパイシー、薬草"
    },
    "ゲンチオピクロシド": {
      "family": "配糖体",
      "note": "強い苦味。蒸留液には移りにくい"
    },
    "アマロゲンチン": {
      "family": "配糖体",
      "note": "非常に強い苦味。蒸留液には移りにくい"
    },
    "ゲンチシン": {
      "family": "ポリフェノール",
      "note": "黄色の色素、苦味。蒸留液には移りにくい"
    },
    "δ-3-カレン": {
      "family": "テルペン",
      "note": "松、樹脂、甘い針葉樹",
      "threshold": {
        "value": 44,
        "unit": "µg/L（水）",
        "min": 44,
        "max": 770,
        "source": "Boonbumrung, Tamura et al. (2001), Table 3",
        "url": "https://www.jstage.jst.go.jp/article/fstr/7/3/7_3_200/_pdf"
      }
    },
    "β-オシメン": {
      "family": "テルペン",
      "note": "甘いハーブ、花、青さ",
      "threshold": {
        "value": 34,
        "unit": "µg/L（水）",
        "source": "Tamura et al. (2001) Food Sci. Technol. Res. 7(1):72-77, Table 1",
        "url": "https://www.jstage.jst.go.jp/article/fstr/7/1/7_1_72/_pdf"
      }
    },
    "ar-クルクメン": {
      "family": "セスキテルペン",
      "note": "ハーブ、柑橘、ウッディ",
      "threshold": {
        "value": 15,
        "unit": "µg/L（水）",
        "source": "Wu et al. (2025) Foods 14:3701（van Gemert 中国語版2015の値。信頼度は低め）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12608621/"
      }
    },
    "α-ファルネセン": {
      "family": "セスキテルペン",
      "note": "青リンゴ、花、ウッディ",
      "threshold": {
        "value": 87,
        "unit": "µg/L（水）",
        "min": 87,
        "max": 450,
        "source": "Luo et al. (2025) Food Chem. X 29:102753（水中の既報値）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12284787/"
      }
    },
    "α-テルピネオール": {
      "family": "テルペンアルコール",
      "note": "ライラック、松、花",
      "threshold": {
        "value": 330,
        "unit": "µg/L（水）",
        "min": 86,
        "max": 18000,
        "source": "Foods 2025, key odorants in blueberries（Leffingwell表も330-350）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11988591/",
        "ethanol": {
          "value": 250,
          "medium": "モデルワイン（水/エタノール 90+10）",
          "abv": 10
        }
      }
    },
    "エレモール": {
      "family": "セスキテルペンアルコール",
      "note": "ウッディ、甘い",
      "threshold": {
        "value": 100,
        "unit": "µg/L（水）",
        "min": 68,
        "max": 100,
        "source": "Wu et al. (2026) Foods 15:2243（Compilations of Odor Threshold Valuesの水中値）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13298970/"
      }
    },
    "クベボール": {
      "family": "セスキテルペンアルコール",
      "note": "スパイス、ウッディ、冷涼"
    },
    "β-クベベン": {
      "family": "セスキテルペン",
      "note": "スパイス、ウッディ"
    },
    "酢酸ネリル": {
      "family": "エステル",
      "note": "花、柑橘、甘い",
      "threshold": {
        "value": 42,
        "unit": "µg/L（水）",
        "min": 9,
        "max": 42,
        "source": "Food Chemistry: X 2026, pomelo black tea",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12938864/",
        "ethanol": {
          "value": 735.9,
          "medium": "モデルワイン（12%）",
          "abv": 12
        }
      }
    },
    "ビシクロゲルマクレン": {
      "family": "セスキテルペン",
      "note": "ウッディ、青さ"
    },
    "酢酸ラバンジュリル": {
      "family": "エステル",
      "note": "ラベンダー、果実、ハーブ"
    },
    "ビサボロールオキサイド類": {
      "family": "セスキテルペンオキシド",
      "note": "甘いハーブ、干し草、カモミール"
    },
    "酢酸シンナミル": {
      "family": "エステル",
      "note": "シナモン、甘い、花",
      "threshold": {
        "value": 150,
        "unit": "µg/L（水）",
        "source": "J. Agric. Food Chem. 2025, greater galangal odorants（Leibniz-LSB@TUM Odorant Databaseの値）",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12147149/"
      }
    },
    "メントフラン": {
      "family": "エーテル",
      "note": "ミント、ナッツ、干し草"
    },
    "ネオメントール": {
      "family": "テルペンアルコール",
      "note": "ミント、清涼"
    },
    "酢酸2-ヘプチル": {
      "family": "エステル",
      "note": "果実、ハーブ"
    },
    "リナロールオキシド類": {
      "family": "テルペンアルコール",
      "note": "花、クリーミー、甘い土っぽさ"
    },
    "1,2-エポキシリナロール": {
      "family": "テルペンアルコール",
      "note": "花、甘い"
    },
    "trans-2-ヘキセノール": {
      "family": "アルコール",
      "note": "青葉、果実、ワイン"
    },
    "trans-2-ヘキセナール": {
      "family": "アルデヒド",
      "note": "青りんご、刈った草、青葉"
    },
    "α-テルピネン": {
      "family": "テルペン",
      "note": "柑橘、木、レモン様"
    },
    "α-ベルガモテン": {
      "family": "セスキテルペン",
      "note": "木、温かい、茶"
    },
    "ノナナール": {
      "family": "アルデヒド",
      "note": "柑橘の皮、ワックス、バラ"
    },
    "テルピノレン": {
      "family": "テルペン",
      "note": "松、柑橘、甘い"
    },
    "ライラックアルデヒド類": {
      "family": "アルデヒド",
      "note": "ライラック、花"
    },
    "安息香酸ベンジル": {
      "family": "エステル",
      "note": "かすかな甘いバルサム"
    },
    "イソカリオフィレン": {
      "family": "セスキテルペン",
      "note": "ウッディ、スパイシー"
    },
    "アントラニル酸メチル": {
      "family": "エステル",
      "note": "ブドウ、オレンジの花"
    },
    "サリチル酸ベンジル": {
      "family": "エステル",
      "note": "かすかな花、バルサム"
    },
    "ファルネソール": {
      "family": "セスキテルペンアルコール",
      "note": "スズラン様の花、甘い"
    },
    "メガスチグマトリエン類": {
      "family": "ノリソプレノイド",
      "note": "タバコ様、スパイシー"
    },
    "β-イオノール": {
      "family": "ノリソプレノイド",
      "note": "スミレ、ウッディ、フルーティ"
    },
    "α-イオノール": {
      "family": "ノリソプレノイド",
      "note": "スミレ、フローラル"
    },
    "δ-ウンデカラクトン": {
      "family": "ラクトン",
      "note": "クリーミー、ピーチ、ココナッツ"
    },
    "ヘキサヒドロファルネシルアセトン": {
      "family": "ケトン",
      "note": "かすかな花、ワックス"
    },
    "2-ペンチルフラン": {
      "family": "エーテル",
      "note": "青豆、土っぽい"
    },
    "ベンジルアルコール": {
      "family": "アルコール",
      "note": "かすかな甘い花"
    },
    "2-ヒドロキシ-2,6,6-トリメチルシクロヘキサノン": {
      "family": "ノリソプレノイド",
      "note": "カロテノイド由来のヨノン系成分（覆い香に関与）"
    },
    "5,6-エポキシ-β-イオノン": {
      "family": "ノリソプレノイド",
      "note": "ウッディ、弱いスミレ（ヨノン系）"
    },
    "cis-2-ペンテノール": {
      "family": "アルコール",
      "note": "グリーン、青葉"
    },
    "1-ペンテン-3-オール": {
      "family": "アルコール",
      "note": "グリーン、青臭い"
    },
    "シクロイオノン": {
      "family": "ノリソプレノイド",
      "note": "ウッディ、スミレ様（イオノン類の仲間）"
    },
    "2-ヘプタノン": {
      "family": "ケトン",
      "note": "フルーティー、チーズ、スパイス"
    },
    "酢酸2-メチルブチル": {
      "family": "エステル",
      "note": "熟したりんご、バナナ"
    },
    "1-ヘキサノール": {
      "family": "アルコール",
      "note": "青い草、樹脂、ほのかな果実"
    },
    "2-メチル酪酸ヘキシル": {
      "family": "エステル",
      "note": "りんご、グリーン、果実"
    },
    "酢酸ブチル": {
      "family": "エステル",
      "note": "りんご、洋梨、溶剤様"
    },
    "2-メチル酪酸ブチル": {
      "family": "エステル",
      "note": "りんご、果実、甘い"
    },
    "trans-2-ノネナール": {
      "family": "アルデヒド",
      "note": "きゅうり、脂っぽい、紙のような青さ"
    },
    "trans-6-ノネナール": {
      "family": "アルデヒド",
      "note": "メロン、きゅうり、青い"
    },
    "(E,E)-2,4-ヘプタジエナール": {
      "family": "アルデヒド",
      "note": "脂っぽい、青い、ナッツ"
    },
    "3,5-オクタジエン-2-オン": {
      "family": "ケトン",
      "note": "脂っぽい、果実、きのこ"
    },
    "ヘキサン酸ヘキシル": {
      "family": "エステル",
      "note": "青い果実、甘い、野菜"
    },
    "酪酸メチル": {
      "family": "エステル",
      "note": "りんご、パイナップル、甘い果実"
    },
    "ヘキサン酸メチル": {
      "family": "エステル",
      "note": "パイナップル、果実、エーテル様"
    },
    "メシフラン": {
      "family": "フラノン",
      "note": "甘い、カラメル、シェリー様"
    },
    "酪酸エチル": {
      "family": "エステル",
      "note": "パイナップル、甘い果実、フルーツガム"
    },
    "γ-デカラクトン": {
      "family": "ラクトン",
      "note": "桃、ココナッツ、クリーミー"
    },
    "6-ペンチル-α-ピロン": {
      "family": "ピロン",
      "note": "ココナッツ、桃、甘いクリーム"
    },
    "δ-デカラクトン": {
      "family": "ラクトン",
      "note": "ココナッツ、クリーム、乳製品"
    },
    "γ-ドデカラクトン": {
      "family": "ラクトン",
      "note": "桃、バター、脂っぽい果実"
    },
    "γ-ヘキサラクトン": {
      "family": "ラクトン",
      "note": "ハーブ、甘い、クマリン様"
    },
    "酪酸ブチル": {
      "family": "エステル",
      "note": "パイナップル、果実、甘い"
    },
    "アセトイン": {
      "family": "ケトン",
      "note": "バター、クリーム、ヨーグルト"
    },
    "ジヒドロ-β-イオノン": {
      "family": "ノリソプレノイド",
      "note": "ウッディ、スミレ、ベリー"
    },
    "β-ダマセノン": {
      "family": "ノリソプレノイド",
      "note": "煮たりんご、バラ、蜂蜜"
    },
    "イソ吉草酸イソアミル": {
      "family": "エステル",
      "note": "りんご、熟した果実、甘い"
    },
    "吉草酸sec-ブチル": {
      "family": "エステル",
      "note": "果実、甘い、りんご"
    },
    "安息香酸イソアミル": {
      "family": "エステル",
      "note": "甘い、バルサム、果実"
    },
    "ヘキサン酸ブチル": {
      "family": "エステル",
      "note": "パイナップル、果実、ワックス"
    },
    "ヘキサン酸エチル": {
      "family": "エステル",
      "note": "パイナップル、青りんご、果実"
    },
    "オクタン酸エチル": {
      "family": "エステル",
      "note": "果実、ワイン、アプリコット"
    },
    "イソ吉草酸エチル": {
      "family": "エステル",
      "note": "りんご、パイナップル、フルーティー"
    },
    "イソボルネオール": {
      "family": "テルペンアルコール",
      "note": "樟脳様、土っぽい、松"
    },
    "アセトバニロン": {
      "family": "フェノール",
      "note": "かすかなバニラ様、甘い"
    },
    "イソ酪酸2-メチルブチル": {
      "family": "エステル",
      "note": "果実様（リンゴ・アンズ）、甘い"
    },
    "4-デセン酸メチル": {
      "family": "エステル",
      "note": "果実様（洋梨）、ワックス様、グリーン"
    },
    "β-カジネン": {
      "family": "セスキテルペン",
      "note": "木質、乾いたハーブ"
    },
    "フムレンエポキシドII": {
      "family": "セスキテルペンオキシド",
      "note": "木質、干し草、ヒノキ様"
    },
    "ビリジフロロール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、土っぽい、甘い"
    },
    "酢酸ボルニル": {
      "family": "エステル",
      "note": "松葉、樟脳様、バルサム"
    },
    "エピマノオール": {
      "family": "ジテルペンアルコール",
      "note": "木質、バルサム、アンバー様"
    },
    "ケイ皮酸メチル": {
      "family": "エステル",
      "note": "いちご様、バルサム、甘いシナモン"
    },
    "γ-カジネン": {
      "family": "セスキテルペン",
      "note": "木質、ハーブ"
    },
    "α-ツジェン": {
      "family": "テルペン",
      "note": "木質、ハーブ、やや青い"
    },
    "β-ビサボレン": {
      "family": "セスキテルペン",
      "note": "バルサム、木質、甘い"
    },
    "イソバレルアルデヒド": {
      "family": "アルデヒド",
      "note": "麦芽様、ココア様、刺激的"
    },
    "trans-サビネン水和物": {
      "family": "テルペンアルコール",
      "note": "甘いハーブ、ミント様、バルサム"
    },
    "cis-サビネン水和物": {
      "family": "テルペンアルコール",
      "note": "温かいハーブ、ミント様"
    },
    "cis-p-メンタ-2-エン-1-オール": {
      "family": "テルペンアルコール",
      "note": "ハーブ、テルペン様"
    },
    "スパツレノール": {
      "family": "セスキテルペンアルコール",
      "note": "土っぽい、ハーブ、ほのかに甘い"
    },
    "カリオフィレンオキシド": {
      "family": "セスキテルペンオキシド",
      "note": "木質、乾いた草、ややスパイシー"
    },
    "τ-カジノール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、ハーブ"
    },
    "酢酸シトロネリル": {
      "family": "エステル",
      "note": "フルーティ、ローズ、柑橘"
    },
    "α-コパエン": {
      "family": "セスキテルペン",
      "note": "木質、スパイシー"
    },
    "β-クルクメン": {
      "family": "セスキテルペン",
      "note": "ハーブ、土っぽい"
    },
    "6-メチル-5-ヘプテン-2-オン": {
      "family": "ケトン",
      "note": "柑橘、グリーン、油っぽい"
    },
    "酢酸サビニル": {
      "family": "エステル",
      "note": "ハーブ、ウッディ、やや甘い"
    },
    "エポキシオシメン": {
      "family": "エーテル",
      "note": "ハーブ、グリーン"
    },
    "イソ吉草酸ネリル": {
      "family": "エステル",
      "note": "フルーティ、甘い、ハーブ"
    },
    "酪酸ネリル": {
      "family": "エステル",
      "note": "フルーティ、甘い"
    },
    "ピノカルボン": {
      "family": "ケトン",
      "note": "ミント様、樟脳、松"
    },
    "cis-β-エレメン": {
      "family": "セスキテルペン",
      "note": "木質、ハーブ"
    },
    "シソオール": {
      "family": "テルペンアルコール",
      "note": "花様（フローラル）"
    },
    "ペリルアルコール": {
      "family": "テルペンアルコール",
      "note": "グリーン、ウッディ、ハーブ"
    },
    "1-オクテン-3-オール": {
      "family": "アルコール",
      "note": "きのこ様"
    },
    "3,7-グアイアジエン": {
      "family": "セスキテルペン",
      "note": "ウッディ"
    },
    "セリナ-3,7(11)-ジエン": {
      "family": "セスキテルペン",
      "note": "ウッディ、土っぽい"
    },
    "β-セリネン": {
      "family": "セスキテルペン",
      "note": "ハーブ、ウッディ"
    },
    "アロマデンドレン": {
      "family": "セスキテルペン",
      "note": "ウッディ"
    },
    "アリストロン": {
      "family": "セスキテルペンケトン",
      "note": "ウッディ"
    },
    "ネオクニジリド": {
      "family": "ラクトン",
      "note": "セロリ様"
    },
    "ケッサン": {
      "family": "セスキテルペンオキシド",
      "note": "ウッディ"
    },
    "4-ビニルグアイアコール": {
      "family": "フェノール",
      "note": "スモーキー、クローブ様"
    },
    "エレミシン": {
      "family": "フェニルプロペン",
      "note": "スパイシー、花様"
    },
    "5-ヒドロキシメチルフルフラール": {
      "family": "アルデヒド",
      "note": "かすかに甘い、カラメル様"
    },
    "2-アセチルピロール": {
      "family": "含窒素化合物",
      "note": "ナッツ、パン様、甘い"
    },
    "フェニルアセトアルデヒド": {
      "family": "アルデヒド",
      "note": "はちみつ、花様"
    },
    "γ-ヒマカレン": {
      "family": "セスキテルペン",
      "note": "ウッディ（ヒマラヤスギ油に多いセスキテルペン）"
    },
    "2-メチル酪酸プソイドイソオイゲニル": {
      "family": "フェニルプロペン",
      "note": "アニス精油に特有の重い成分（香りの記述は少ない）"
    },
    "p-メンタ-1,3-ジエン-7-アール": {
      "family": "アルデヒド",
      "note": "クミン様、スパイシー"
    },
    "p-メンタ-1,4-ジエン-7-アール": {
      "family": "アルデヒド",
      "note": "クミン様、スパイシー"
    },
    "β-アコラジエン": {
      "family": "セスキテルペン",
      "note": "ウッディ（香りの記述は少ない）"
    },
    "ジヒドロカルボン": {
      "family": "ケトン",
      "note": "ハーブ、スペアミント・キャラウェイ様"
    },
    "α-イランゲン": {
      "family": "セスキテルペン",
      "note": "木質、スパイス"
    },
    "酢酸フェンキル": {
      "family": "エステル",
      "note": "松、ハーブ、甘い"
    },
    "グアイオール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、ほのかなバラ"
    },
    "フェンコール": {
      "family": "テルペンアルコール",
      "note": "樟脳、松、土っぽい"
    },
    "4-カレン": {
      "family": "テルペン",
      "note": "樹脂、テルペン様"
    },
    "サフロール": {
      "family": "フェニルプロペン",
      "note": "サッサフラス（ルートビア）のような甘い香り"
    },
    "イソプレゴン": {
      "family": "ケトン",
      "note": "ミント、ハーブ"
    },
    "ベルベノール": {
      "family": "テルペンアルコール",
      "note": "松、樟脳"
    },
    "α-オイデスモール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、甘い"
    },
    "τ-ムウロロール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、ハーブ様"
    },
    "α-カジノール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、ハーブ様"
    },
    "α-ムウロレン": {
      "family": "セスキテルペン",
      "note": "木質"
    },
    "β-ツジェン": {
      "family": "テルペン",
      "note": "樹脂、針葉樹様"
    },
    "マノオール": {
      "family": "ジテルペンアルコール",
      "note": "弱い木質、アンバー様"
    },
    "サンテン": {
      "family": "テルペン",
      "note": "松、樟脳様"
    },
    "ベルチシロール": {
      "family": "ジテルペンアルコール",
      "note": "弱い木質"
    },
    "β-ドラブリン": {
      "family": "トロポロン",
      "note": "甘い木の香り（ヒノキチオールの仲間）"
    },
    "シクロヘキサノール": {
      "family": "アルコール",
      "note": "刺激的な青臭さ、笹の葉様"
    },
    "イソプレゴール": {
      "family": "テルペンアルコール",
      "note": "ミント様、清涼、ハーブ"
    },
    "α-サンタラール": {
      "family": "セスキテルペンアルデヒド",
      "note": "白檀、木質、スパイシー"
    },
    "ジメチルスルホン": {
      "family": "スルホン",
      "note": "ほとんど香らない"
    },
    "1-ノネン": {
      "family": "脂肪族炭化水素",
      "note": "かすかな油っぽさ"
    },
    "1-ウンデセン": {
      "family": "脂肪族炭化水素",
      "note": "かすかな油っぽさ"
    },
    "1-トリデセン": {
      "family": "脂肪族炭化水素",
      "note": "かすかな油っぽさ"
    },
    "カルベオール": {
      "family": "テルペンアルコール",
      "note": "ミント、キャラウェイ様、甘い"
    },
    "DDMP（ジヒドロマルトール）": {
      "family": "ピロン",
      "note": "カラメル様、甘い（加熱で生じる）"
    },
    "フラノン類": {
      "family": "フラノン",
      "note": "焙煎、甘いカラメル様"
    },
    "エレメン類": {
      "family": "セスキテルペン",
      "note": "木質、ハーブ様"
    },
    "カラメネン": {
      "family": "セスキテルペン",
      "note": "ハーブ、スパイシー、木質"
    },
    "ドデカナール": {
      "family": "アルデヒド",
      "note": "ワックス、柑橘の皮、石けん様"
    },
    "α-スプリンゲン": {
      "family": "ジテルペン",
      "note": "ほぼ無臭、かすかな樹脂様"
    },
    "N-メチルアントラニル酸メチル": {
      "family": "エステル",
      "note": "マンダリン、ぶどう様、甘い"
    },
    "m-シメン": {
      "family": "テルペン",
      "note": "柑橘、灯油様、木"
    },
    "グロブロール": {
      "family": "セスキテルペンアルコール",
      "note": "木、土、ハーブ"
    },
    "1-フェニルエタノール": {
      "family": "アルコール",
      "note": "甘い花、ガーデニア、ヒヤシンス"
    },
    "フェノール": {
      "family": "フェノール",
      "note": "薬品様、インク、煙っぽい"
    },
    "酢酸2-フェニルエチル": {
      "family": "エステル",
      "note": "バラ、蜂蜜、フルーティー"
    },
    "アセトフェノン": {
      "family": "ケトン",
      "note": "アーモンド、甘い花、オレンジの花"
    },
    "酢酸cis-3-ヘキセニル": {
      "family": "エステル",
      "note": "刈った草、青いバナナ"
    },
    "p-シメン-8-オール": {
      "family": "テルペンアルコール",
      "note": "甘い、フルーティー、ハーブ"
    },
    "cis-p-メンタ-2,8-ジエン-1-オール": {
      "family": "テルペンアルコール",
      "note": "ハーブ様"
    },
    "チグリン酸2-フェニルエチル": {
      "family": "エステル",
      "note": "バラ、蜂蜜、甘い"
    },
    "ヘプタナール": {
      "family": "アルデヒド",
      "note": "青臭い、脂っぽい、柑橘"
    },
    "ウンデカナール": {
      "family": "アルデヒド",
      "note": "ワックス、柑橘の皮、花"
    },
    "ディルエーテル": {
      "family": "エーテル",
      "note": "ディル、ハーブ"
    },
    "trans-4-ヘキセノール": {
      "family": "アルコール",
      "note": "青葉、フルーティー"
    },
    "1-ペンテン-3-オン": {
      "family": "ケトン",
      "note": "刺激的、青臭い、からし様"
    },
    "ビリジフロレン": {
      "family": "セスキテルペン",
      "note": "ウッディ、かすかに甘い"
    },
    "チグリン酸ゲラニル": {
      "family": "エステル",
      "note": "ローズ、グリーン、フルーティ"
    },
    "α-イソホロン": {
      "family": "ケトン",
      "note": "サフラン様、干し草、ハーブ、ウッディ"
    },
    "ミルテノール": {
      "family": "テルペンアルコール",
      "note": "ウッディ、ミント様、甘い"
    },
    "シンナミルアルコール": {
      "family": "アルコール",
      "note": "バルサム、ヒヤシンス様の甘い花"
    },
    "エピグロブロール": {
      "family": "セスキテルペンアルコール",
      "note": "ウッディ、かすか"
    },
    "γ-クルクメン": {
      "family": "セスキテルペン",
      "note": "ハーブ、ウッディ"
    },
    "イタリセン": {
      "family": "セスキテルペン",
      "note": "ウッディ、ハーブ"
    },
    "ロシフォリオール": {
      "family": "セスキテルペンアルコール",
      "note": "ウッディ、かすか"
    },
    "α-セリネン": {
      "family": "セスキテルペン",
      "note": "ウッディ、ハーブ"
    },
    "アロオシメン類": {
      "family": "テルペン",
      "note": "ハーブ、甘い花、グリーン"
    },
    "trans-3-ヘキセノール": {
      "family": "アルコール",
      "note": "青葉様、刈った草のような青さ"
    },
    "デカン酸エチル": {
      "family": "エステル",
      "note": "ブランデー様、果実、ワックス様"
    },
    "ドデカン酸エチル": {
      "family": "エステル",
      "note": "ワックス様、花、石けん様"
    },
    "α-ベツレノール": {
      "family": "セスキテルペンアルコール",
      "note": "木質・樹脂様（カバノキ類の芽や葉の油に特有の成分。香りの記述は少ない）"
    },
    "14-ヒドロキシ-4,5-ジヒドロ-β-カリオフィレン": {
      "family": "セスキテルペンアルコール",
      "note": "木質系（カバノキ類の油に特有。香りの記述は少ない）"
    },
    "β-ベツレナール": {
      "family": "セスキテルペンアルデヒド",
      "note": "木質系（香りの記述は少ない）"
    },
    "4-ノルカリオフィラ-8(14)-エン-5-オン": {
      "family": "セスキテルペンケトン",
      "note": "木質系（香りの記述は少ない）"
    },
    "2-メチルベンズアルデヒド": {
      "family": "アルデヒド",
      "note": "アーモンド様、チェリー様（ベンズアルデヒドに似る）"
    },
    "4-メチルベンズアルデヒド": {
      "family": "アルデヒド",
      "note": "チェリー様、アーモンド、甘い"
    },
    "ゲルマクロン": {
      "family": "セスキテルペンケトン",
      "note": "木質、薬草様"
    },
    "酢酸ペンチル": {
      "family": "エステル",
      "note": "バナナ様、果実"
    },
    "プロピオン酸イソアミル": {
      "family": "エステル",
      "note": "甘い果実、バナナ様"
    },
    "酢酸4-ペンテニル": {
      "family": "エステル",
      "note": "青い、野菜様"
    },
    "γ-ムウロレン": {
      "family": "セスキテルペン",
      "note": "木質、ハーブ様"
    },
    "α-クベベン": {
      "family": "セスキテルペン",
      "note": "ハーブ様、木質"
    },
    "β-エレメノン": {
      "family": "セスキテルペンケトン",
      "note": "薬を思わせる独特の香り（この論文のGC-O）"
    },
    "ミルテナール": {
      "family": "アルデヒド",
      "note": "木質、スパイシー、ハーブ"
    },
    "イソピノカンフォン": {
      "family": "ケトン",
      "note": "ミント様、樟脳様、薬草"
    },
    "ピノカンフォン": {
      "family": "ケトン",
      "note": "樟脳様、ミント、杉様"
    },
    "γ-エレメン": {
      "family": "セスキテルペン",
      "note": "木質、グリーン"
    },
    "酢酸ミルテニル": {
      "family": "エステル",
      "note": "ハーブ、甘い、ラベンダー様"
    },
    "パチュリアルコール": {
      "family": "セスキテルペンアルコール",
      "note": "土、木質、樟脳様、甘い重さ"
    },
    "α-ブルネセン": {
      "family": "セスキテルペン",
      "note": "木質、スパイシー"
    },
    "α-グアイエン": {
      "family": "セスキテルペン",
      "note": "木質、バルサム様"
    },
    "セイシェレン": {
      "family": "セスキテルペン",
      "note": "木質、土"
    },
    "α-パチュレン": {
      "family": "セスキテルペン",
      "note": "木質、土"
    },
    "β-パチュレン": {
      "family": "セスキテルペン",
      "note": "木質、土"
    },
    "β-トリケトン類": {
      "family": "β-トリケトン",
      "note": "香りは弱い、薬草様"
    },
    "β-コパエン": {
      "family": "セスキテルペン",
      "note": "木質、スパイシー"
    },
    "7-epi-セスキツジェン": {
      "family": "セスキテルペン",
      "note": "木質、ハーブ"
    },
    "ネペタラクトン類": {
      "family": "ラクトン",
      "note": "キャットニップ特有のハーブ・ミント様、わずかに甘い"
    },
    "trans-2-デセナール": {
      "family": "アルデヒド",
      "note": "パクチーそのもの、青く脂っぽい、オレンジの皮"
    },
    "trans-2-ドデセナール": {
      "family": "アルデヒド",
      "note": "パクチー、脂っぽい、柑橘の皮"
    },
    "trans-2-ウンデセナール": {
      "family": "アルデヒド",
      "note": "ワックス、柑橘の皮、パクチー様"
    },
    "イソメントン": {
      "family": "ケトン",
      "note": "ミント、甘い、やや土っぽい"
    },
    "ジオスフェノール": {
      "family": "ケトン",
      "note": "ブチュー特有の薬草様、ミント、樟脳"
    },
    "ψ-ジオスフェノール": {
      "family": "ケトン",
      "note": "ミント、薬草（ジオスフェノールの異性体）"
    },
    "プレゴン": {
      "family": "ケトン",
      "note": "ペニーロイヤル、ミント、樟脳"
    },
    "8-メルカプト-p-メンタン-3-オン": {
      "family": "硫黄化合物",
      "note": "カシスの芽、グレープフルーツ様、硫黄の果実香"
    },
    "酢酸ファルネシル": {
      "family": "エステル",
      "note": "甘い花、グリーン、かすかに果実様（香りは穏やか）"
    },
    "アンブレットリド": {
      "family": "ラクトン",
      "note": "ムスク、甘い花、洋梨様"
    },
    "酢酸デシル": {
      "family": "エステル",
      "note": "ワックス、オレンジの皮、花"
    },
    "酢酸ドデシル": {
      "family": "エステル",
      "note": "ワックス、柑橘、かすかに花"
    },
    "(Z)-5-テトラデセノリド": {
      "family": "ラクトン",
      "note": "ムスク、甘い"
    },
    "3-オクタノン": {
      "family": "ケトン",
      "note": "きのこ、土、ハーブ（ラベンダー様）"
    },
    "2-メチル-1-ブタノール": {
      "family": "アルコール",
      "note": "発酵、麦芽、ワイン様"
    },
    "3-オクタノール": {
      "family": "アルコール",
      "note": "きのこ、土、ナッツ"
    },
    "1-オクテン-3-オン": {
      "family": "ケトン",
      "note": "きのこ、金属様、土"
    },
    "ジメチルジスルフィド": {
      "family": "硫黄化合物",
      "note": "玉ねぎ、キャベツ、にんにく様"
    },
    "ビス(メチルチオ)メタン": {
      "family": "硫黄化合物",
      "note": "白トリュフ特有のにんにく様の香り（ごく少量で効く）"
    },
    "イソオイゲノール": {
      "family": "フェノール",
      "note": "クローブ、甘いスパイス、カーネーション"
    },
    "ウイスキーラクトン": {
      "family": "ラクトン",
      "note": "ココナッツ、ウッディ、セロリ様（cis体が強い）"
    },
    "trans-4-プロペニルシリンゴール": {
      "family": "フェノール",
      "note": "スモーク、スパイス、木"
    },
    "フルフリルアルコール": {
      "family": "アルコール",
      "note": "カラメル、焦げ、パン様（弱い）"
    },
    "二硫化炭素": {
      "family": "硫黄化合物",
      "note": "エーテル様の甘い硫黄臭（弱い）"
    },
    "1,2,4-トリチオラン": {
      "family": "硫黄化合物",
      "note": "干し椎茸、にんにく様、硫黄"
    },
    "レンチオニン": {
      "family": "硫黄化合物",
      "note": "干し椎茸特有の香り、硫黄、にんにく様"
    },
    "1,2,4,5-テトラチアン": {
      "family": "硫黄化合物",
      "note": "干し椎茸、硫黄"
    },
    "cis-3-ヘキセナール": {
      "family": "アルデヒド",
      "note": "青い草、切った葉、トマトの葉"
    },
    "(E,Z)-2,4-デカジエン酸エチル": {
      "family": "エステル",
      "note": "洋梨、熟した果実"
    },
    "オシメノール": {
      "family": "テルペンアルコール",
      "note": "ライム様、花、グリーン"
    },
    "trans-2-ペンテナール": {
      "family": "アルデヒド",
      "note": "青い、りんご、トマトの葉"
    },
    "γ-ブチロラクトン": {
      "family": "ラクトン",
      "note": "かすかに甘い、クリーミー、カラメル様"
    },
    "イソアミルアルコール": {
      "family": "アルコール",
      "note": "発酵様、麦芽様、ウイスキー様"
    },
    "trans-2-ヘプテナール": {
      "family": "アルデヒド",
      "note": "脂っぽい、青い、アーモンド様"
    },
    "3-シクロヘキセン-1-カルバルデヒド": {
      "family": "アルデヒド",
      "note": "果実様、甘い"
    },
    "2-デカノン": {
      "family": "ケトン",
      "note": "脂っぽい、桃様"
    },
    "3,4-ジヒドロ-2H-チオピラン-3-オン": {
      "family": "硫黄化合物",
      "note": "硫黄様の不快臭"
    },
    "ヘプタン酸メチル": {
      "family": "エステル",
      "note": "果実様、オリス様"
    },
    "δ-オクタラクトン": {
      "family": "ラクトン",
      "note": "ココナッツ、クリーミー、甘い"
    },
    "δ-ドデカラクトン": {
      "family": "ラクトン",
      "note": "クリーミー、桃様、ココナッツ"
    },
    "2-トリデカノン": {
      "family": "ケトン",
      "note": "ワックス様、ココナッツ様、ハーブ"
    },
    "3-ペンテン-2-オン": {
      "family": "ケトン",
      "note": "刺激的、果実様、溶剤様"
    },
    "ヒドロキシアセトン": {
      "family": "ケトン",
      "note": "甘い、カラメル様、刺激的"
    },
    "ペンタナール": {
      "family": "アルデヒド",
      "note": "刺激的、パン様、ナッツ様"
    },
    "フィルベルトン": {
      "family": "ケトン",
      "note": "ヘーゼルナッツ、ナッツ、果実様"
    },
    "1-メチルピロール": {
      "family": "含窒素化合物",
      "note": "スモーキー、ウッディ、ハーブ"
    },
    "trans-2-ノネン-1-オール": {
      "family": "アルコール",
      "note": "ワックス様、青い、メロン様"
    },
    "1-ノナノール": {
      "family": "アルコール",
      "note": "花様、ワックス様"
    },
    "2-オクタノン": {
      "family": "ケトン",
      "note": "土っぽい、ハーブ、ウッディ"
    },
    "安息香酸メチル": {
      "family": "エステル",
      "note": "花様、甘い、冬緑油様"
    },
    "ジアセチル": {
      "family": "ケトン",
      "note": "バター、クリーム"
    },
    "5-メチルフルフラール": {
      "family": "アルデヒド",
      "note": "カラメル、アーモンド、スパイシー"
    },
    "酢酸フルフリル": {
      "family": "エステル",
      "note": "甘い、フルーティー、ナッツ様"
    },
    "2-アセチルフラン": {
      "family": "ケトン",
      "note": "ナッツ、カラメル、ココア"
    },
    "1-メチル-2-ホルミルピロール": {
      "family": "含窒素化合物",
      "note": "ロースト、ナッツ"
    },
    "2-メチルブタナール": {
      "family": "アルデヒド",
      "note": "麦芽、ココア、アーモンド"
    },
    "2,4-ジメチルベンズアルデヒド": {
      "family": "アルデヒド",
      "note": "アーモンド、チェリー"
    },
    "4-シクロペンテン-1,3-ジオン": {
      "family": "ケトン",
      "note": "スモーキー（論文の記載）"
    },
    "イソバレンセノール": {
      "family": "セスキテルペンアルコール",
      "note": "ベチバー様、ウッディ、甘い"
    },
    "α-ベチボール": {
      "family": "セスキテルペンアルコール",
      "note": "ウッディ、ベチバー様"
    },
    "クシモール": {
      "family": "セスキテルペンアルコール",
      "note": "ベチバーの主な香り、ウッディ、土"
    },
    "ベチセリネノール": {
      "family": "セスキテルペンアルコール",
      "note": "ウッディ、根"
    },
    "α-ベチボン": {
      "family": "セスキテルペンケトン",
      "note": "ウッディ、甘い土、ベチバー様"
    },
    "β-ベチボン": {
      "family": "セスキテルペンケトン",
      "note": "ウッディ、ベチバー様"
    },
    "アコレノン": {
      "family": "セスキテルペンケトン",
      "note": "菖蒲根、ウッディ、甘い薬草"
    },
    "プレイソカラメンジオール": {
      "family": "セスキテルペンアルコール",
      "note": "ウッディ、薬草"
    },
    "ショウブノン": {
      "family": "セスキテルペンケトン",
      "note": "菖蒲様、ウッディ"
    },
    "イソショウブノン": {
      "family": "セスキテルペンケトン",
      "note": "菖蒲様、ウッディ"
    },
    "β-グルジュネン": {
      "family": "セスキテルペン",
      "note": "ウッディ、バルサム様"
    },
    "フェニル酢酸エチル": {
      "family": "エステル",
      "note": "はちみつ、甘い花"
    },
    "ノナン酸エチル": {
      "family": "エステル",
      "note": "果実、ワックス様、ブランデー様"
    },
    "α-ネオクロベン": {
      "family": "セスキテルペン",
      "note": "ウッディ、土"
    },
    "β-パナシンセン": {
      "family": "セスキテルペン",
      "note": "高麗人参様、ウッディ、土"
    },
    "α-パナシンセン": {
      "family": "セスキテルペン",
      "note": "高麗人参様、ウッディ"
    },
    "アプロタキセン": {
      "family": "脂肪族炭化水素",
      "note": "脂肪様、ゴボウの皮・木香様"
    },
    "trans-2-オクテナール": {
      "family": "アルデヒド",
      "note": "青臭い、脂肪、きゅうり様"
    },
    "trans-2-オクテン-1-オール": {
      "family": "アルコール",
      "note": "きのこ、柑橘、脂っぽい"
    },
    "トリデカナール": {
      "family": "アルデヒド",
      "note": "ワックス、柑橘の皮、脂っぽい"
    },
    "ペンタデカナール": {
      "family": "アルデヒド",
      "note": "ワックス、脂っぽい、ほのかな花"
    },
    "(E,E)-2,4-デカジエナール": {
      "family": "アルデヒド",
      "note": "揚げ油、脂っぽい、柑橘"
    },
    "2-エチル-1-ヘキサノール": {
      "family": "アルコール",
      "note": "青い、バラ様、かすかな花"
    },
    "アセトアルデヒド": {
      "family": "アルデヒド",
      "note": "青りんご、刺激的、エーテル様"
    },
    "チグリン酸エチル": {
      "family": "エステル",
      "note": "果実、甘い、ラム酒様"
    },
    "cis-2-ヘプテナール": {
      "family": "アルデヒド",
      "note": "脂っぽい、青い、揚げ油様"
    },
    "1-ペンタノール": {
      "family": "アルコール",
      "note": "フーゼル様、甘い、パン様"
    },
    "ヒマカラ-3(12),4-ジエン": {
      "family": "セスキテルペン",
      "note": "ウッディ、スパイシー"
    },
    "2-メチル酪酸4-メチルペンチル": {
      "family": "エステル",
      "note": "果実、甘い、トロピカル"
    },
    "o-シメン": {
      "family": "テルペン",
      "note": "柑橘、木質、スパイシー"
    },
    "α-ヒマカレン": {
      "family": "セスキテルペン",
      "note": "ウッディ"
    },
    "4-メチルペンタン酸4-メチルペンチル": {
      "family": "エステル",
      "note": "果実、甘い"
    },
    "6-メチル-3,5-ヘプタジエン-2-オン": {
      "family": "ケトン",
      "note": "スパイシー、シナモン様、ココナッツ"
    },
    "ゲラニルアセトン": {
      "family": "ノリソプレノイド",
      "note": "フローラル、グリーン、マグノリア様"
    },
    "ジヒドロアクチニジオリド": {
      "family": "ラクトン",
      "note": "甘い、ムスク様、クマリン様"
    },
    "ディルアピオール": {
      "family": "フェニルプロペン",
      "note": "ハーブ、ディル様、温かい"
    },
    "(E)-アトラントン": {
      "family": "セスキテルペンケトン",
      "note": "ウッディ、スパイシー、ターメリック様"
    },
    "(E)-γ-アトラントン": {
      "family": "セスキテルペンケトン",
      "note": "ウッディ、スパイシー"
    },
    "ar-ターメロール": {
      "family": "セスキテルペンアルコール",
      "note": "ターメリック様、ウッディ"
    },
    "ビサボロン": {
      "family": "セスキテルペンケトン",
      "note": "ウッディ、スパイシー"
    },
    "8-イソプロピル-1,5-ジメチルシクロデカ-1,5-ジエン": {
      "family": "セスキテルペン",
      "note": "木質（セスキテルペン炭化水素。香りの記述なし）"
    },
    "アリルイソチオシアネート": {
      "family": "硫黄化合物",
      "note": "わさび・からしのツンと鼻に抜ける刺激臭（強いからし様）"
    },
    "4-ペンテニルイソチオシアネート": {
      "family": "硫黄化合物",
      "note": "弱いからし様"
    },
    "5-ヘキセニルイソチオシアネート": {
      "family": "硫黄化合物",
      "note": "弱いからし様"
    },
    "3-ブテニルイソチオシアネート": {
      "family": "硫黄化合物",
      "note": "弱いからし様、大根・菜の花様"
    },
    "6-ヘプテニルイソチオシアネート": {
      "family": "硫黄化合物",
      "note": "弱いからし様"
    },
    "sec-ブチルイソチオシアネート": {
      "family": "硫黄化合物",
      "note": "弱いからし様"
    },
    "イソブチルアルデヒド": {
      "family": "アルデヒド",
      "note": "麦芽様、刺激のある穀物香"
    },
    "イソブタノール": {
      "family": "アルコール",
      "note": "フーゼル様、ワイン様、溶剤様"
    },
    "オイデスマ-4(14),11-ジエン": {
      "family": "セスキテルペン",
      "note": "木質（香りの記述は少ない）"
    },
    "ゲルマクレンB": {
      "family": "セスキテルペン",
      "note": "木質、青い、スパイシー"
    },
    "β-オイデスモール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、甘い"
    },
    "α-アモルフェン": {
      "family": "セスキテルペン",
      "note": "木質"
    },
    "アトラル酸メチル": {
      "family": "エステル",
      "note": "オークモス、苔、土っぽい、ほのかに甘い"
    },
    "チグリン酸シトロネリル": {
      "family": "エステル",
      "note": "ローズ、フルーティー、ハーブ様"
    },
    "α-サンタロール": {
      "family": "セスキテルペンアルコール",
      "note": "白檀、柔らかな木質"
    },
    "β-サンタロール": {
      "family": "セスキテルペンアルコール",
      "note": "白檀、クリーミー、乳様"
    },
    "α-ベルガモトール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、クリーミー"
    },
    "epi-β-サンタロール": {
      "family": "セスキテルペンアルコール",
      "note": "白檀様、木質"
    },
    "ランセオール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、甘い"
    },
    "7-epi-α-オイデスモール": {
      "family": "セスキテルペンアルコール",
      "note": "木質"
    },
    "ミントラクトン": {
      "family": "ラクトン",
      "note": "ココナッツ、ミント、甘い"
    },
    "酢酸オクチル": {
      "family": "エステル",
      "note": "フルーティー、オレンジ様"
    },
    "ペリレン": {
      "family": "エーテル",
      "note": "木質、柑橘、シソ様"
    },
    "アロアロマデンドレン": {
      "family": "セスキテルペン",
      "note": "木質"
    },
    "ジヒドロオイデスモール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、甘い"
    },
    "ブルネソール": {
      "family": "セスキテルペンアルコール",
      "note": "木質、ガイアックウッド様"
    },
    "デヒドロフキノン": {
      "family": "セスキテルペンケトン",
      "note": "木質、樹脂様"
    },
    "トリシクレン": {
      "family": "テルペン",
      "note": "樟脳様、樹脂"
    }
  },
  "botanicals": [
    {
      "name": "ジュニパーベリー",
      "reading": "じゅにぱーべりー",
      "latin": "Juniperus communis",
      "group": "骨格・樹脂",
      "part": "球果",
      "aroma": "松葉、樹脂、針葉樹、ほのかな柑橘",
      "role": "ジンらしさの中心。全体の骨格とドライな苦味を作る。",
      "components": [
        "α-ピネン",
        "β-ミルセン",
        "サビネン",
        "リモネン",
        "β-ピネン",
        "テルピネン-4-オール",
        "β-カリオフィレン",
        "α-フムレン",
        "ゲルマクレンD"
      ],
      "literature": {
        "oil": {
          "percent": 2.1,
          "min": 0.4,
          "max": 3.8,
          "basis": "乾燥球果（コソボの野生5集団）・水蒸留（乾燥重量基準）",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 51.4,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 8.3,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 5.8,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 5.1,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 5,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 2,
            "source": 1
          },
          {
            "name": "α-フムレン",
            "percent": 1.3,
            "source": 1
          },
          {
            "name": "ゲルマクレンD",
            "percent": 1.1,
            "source": 1
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 0.9,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Hajdari A. et al. (2015) Chem Biodivers 12(11):1706-1717",
            "url": "https://pubmed.ncbi.nlm.nih.gov/26567948/"
          },
          {
            "title": "Höferl M. et al. (2014) Antioxidants 3(1):81-98, Table 1",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4665443/"
          }
        ],
        "note": "成分はブルガリア産の市販油1試料。Ph. Eur.の規格ではα-ピネン20〜50%、サビネン最大20%、ミルセン1〜35%と産地差が大きい。精油量は乾燥球果0.4〜3.8%（Ph. Eur.の最低量は1%）。"
      }
    },
    {
      "name": "コリアンダーシード",
      "reading": "こりあんだーしーど",
      "latin": "Coriandrum sativum",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "レモン様、花、軽いスパイス",
      "role": "ジュニパーと柑橘をつなぐ橋渡し。クラシックジンの第2の柱。",
      "components": [
        "リナロール",
        "α-ピネン",
        "γ-テルピネン",
        "カンファー",
        "ゲラニオール",
        "デカナール",
        "リモネン",
        "酢酸ゲラニル",
        "カンフェン"
      ],
      "literature": {
        "oil": {
          "percent": 1.62,
          "min": 0.1,
          "max": 2.2,
          "basis": "乾燥果実（ポーランド産）を粉砕・水蒸留2時間（mL/100g）",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 78.45,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 5.03,
            "source": 0
          },
          {
            "name": "カンファー",
            "percent": 3.9,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 3.8,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 2.58,
            "source": 0
          },
          {
            "name": "酢酸ゲラニル",
            "percent": 2.13,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 1.07,
            "source": 0
          },
          {
            "name": "カンフェン",
            "percent": 0.64,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Huzar E. et al. (2018) Pol. J. Food Nutr. Sci. 68(3):243-249",
            "url": "https://journal.pan.olsztyn.pl/pdf-98533-31286?filename=Influence-of-Hydrodistill.pdf"
          }
        ],
        "note": "収率はv/w（mL/100 g）。ポーランド産の例で、同論文によれば文献の多くは0.10〜0.60%とこれより低い。デカナールは不検出。"
      }
    },
    {
      "name": "アンジェリカルート",
      "reading": "あんじぇりかるーと",
      "latin": "Angelica archangelica",
      "group": "根・土台",
      "part": "根",
      "aroma": "土、薬草、ムスク、ドライな苦味",
      "role": "香りを下支えし、根の重さと余韻を与える。",
      "components": [
        "β-ピネン",
        "α-ピネン",
        "β-フェランドレン",
        "リモネン",
        "クマリン",
        "δ-3-カレン",
        "β-ミルセン",
        "β-オシメン"
      ],
      "aliases": [
        "アンジェリカ"
      ],
      "literature": {
        "oil": {
          "percent": 1,
          "basis": "風乾した根（フィンランド産）・水蒸留4.5時間",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 32.69,
            "source": 1
          },
          {
            "name": "δ-3-カレン",
            "percent": 17.07,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 6.59,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 5.87,
            "source": 1
          },
          {
            "name": "β-オシメン",
            "percent": 4.83,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 3.43,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 1.87,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Korpinen R.I. et al. (2021) Molecules 26(23):7121, Table 1",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8658896/"
          },
          {
            "title": "Pasqua G. et al. (2003), Table 1",
            "url": "https://www.ejh.it/index.php/ejh/article/viewFile/811/924"
          }
        ],
        "note": "精油量（風乾根）と組成（生の主根）は別の研究。根の精油はケモタイプ差が大きく、フィンランド産ではβ-フェランドレン主体の報告もある。クマリン本体の値は見つからなかった（誘導体のオストールは根油に1.4〜2.7%の報告）。"
      }
    },
    {
      "name": "アンジェリカシード",
      "reading": "あんじぇりかしーど",
      "latin": "Angelica archangelica",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "ハーバル、ムスク、ややフルーティー",
      "role": "根より軽く、トップからミドルの薬草感を補う。",
      "components": [
        "α-ピネン",
        "β-ピネン",
        "リモネン",
        "β-カリオフィレン",
        "β-フェランドレン",
        "α-フェランドレン",
        "β-ミルセン",
        "α-フムレン"
      ],
      "literature": {
        "oil": {
          "percent": 1.1,
          "min": 0.8,
          "max": 1.4,
          "basis": "リトアニア3産地の野生株の乾燥した熟した種子（果実）を水蒸留2時間",
          "source": 0
        },
        "composition": [
          {
            "name": "β-フェランドレン",
            "percent": 80.16,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 7.02,
            "source": 1
          },
          {
            "name": "α-フェランドレン",
            "percent": 4.2,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 1.65,
            "source": 1
          },
          {
            "name": "α-フムレン",
            "percent": 1.63,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 0.77,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 0.23,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Nivinskienė O., Butkienė R., Mockutė D. (2005) Chemija 16(3-4):51-54",
            "url": "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=3c0366441aebca3949f327dfafe1ece7c8a369b7"
          },
          {
            "title": "Langrand J. et al. (2025) Sci Rep 16:2695, Table 1（市販アンジェリカシード油の列。範囲は Nivinskienė et al. 2005 の3試料）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12824355/"
          }
        ],
        "note": "精油量はリトアニアの野生株3試料の範囲。成分はフランスの市販アンジェリカシード油（Ferrant PHE）1試料で、β-カリオフィレンはこの分析に記載がないためリトアニアの3試料の平均で補った。リモネンはどちらの分析にも記載がなく（無極性カラムでは β-フェランドレンと重なって分かれにくい）null とした。"
      }
    },
    {
      "name": "オリスルート",
      "reading": "おりするーと",
      "latin": "Iris germanica / Iris pallida",
      "group": "根・土台",
      "part": "根茎",
      "aroma": "すみれ、粉、化粧品、柔らかな花",
      "role": "フィクサティブとして香りをまとめ、余韻をなめらかにする。",
      "components": [
        "イロン類",
        "イオノン類",
        "ミリスチン酸"
      ],
      "literature": {
        "oil": {
          "percent": 0.2,
          "basis": "風乾した根茎（ウクライナ産）・水蒸気蒸留12時間",
          "source": 0
        },
        "composition": [
          {
            "name": "ミリスチン酸",
            "percent": 56,
            "source": 0
          },
          {
            "name": "イロン類",
            "percent": 4.32,
            "source": 0
          },
          {
            "name": "イオノン類",
            "percent": 0.21,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Mykhailenko O. (2018) Turk J Pharm Sci 15(1):85-90",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7227901/"
          }
        ],
        "note": "熟成の記載がない根茎の値。イロン類は熟成中に増え、市販のオリスバターでは13〜17%。精油の大半は香りの少ない脂肪酸。"
      }
    },
    {
      "name": "リコリス",
      "reading": "りこりす",
      "latin": "Glycyrrhiza glabra",
      "group": "根・土台",
      "part": "根",
      "aroma": "甘草、土、やわらかな甘み",
      "role": "砂糖とは違う丸い甘みと厚みを足す。",
      "components": [
        "アネトール",
        "リナロール",
        "グリチルリチン"
      ],
      "literature": {
        "oil": {
          "percent": 0.047,
          "basis": "市販の乾燥根・水蒸気蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 0.33,
            "source": 1
          },
          {
            "name": "アネトール",
            "percent": 0.23,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "亀岡弘・中井勝久 (1987) 日本農芸化学会誌 61(9):1119-1121",
            "url": "https://www.jstage.jst.go.jp/article/nogeikagaku1924/61/9/61_9_1119/_article"
          },
          {
            "title": "亀岡・中井 (1987), Table I",
            "url": "https://www.jstage.jst.go.jp/article/nogeikagaku1924/61/9/61_9_1119/_pdf/-char/en"
          }
        ],
        "note": "精油はごく少なく、脂肪酸が主体。アネトール・リナロールは微量。甘味のグリチルリチンは不揮発性で精油には入らない。"
      }
    },
    {
      "name": "レモンピール",
      "reading": "れもんぴーる",
      "latin": "Citrus limon",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "明るいレモン、皮、ワックス",
      "role": "トップノートを明るくし、ジントニックで香りを立たせる。",
      "components": [
        "リモネン",
        "シトラール",
        "β-ピネン",
        "γ-テルピネン",
        "デカナール",
        "β-ミルセン",
        "α-ピネン",
        "サビネン"
      ],
      "literature": {
        "oil": {
          "percent": 1.22,
          "basis": "乾燥果皮（イラン産リスボン種）・水蒸留2時間（乾燥重量基準）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 63.15,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 11.19,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 9.01,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.66,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 2.64,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 1.91,
            "source": 0
          },
          {
            "name": "シトラール",
            "percent": 1.52,
            "source": 0
          },
          {
            "name": "デカナール",
            "percent": 0.02,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Golmakani & Moayyedi (2015) Food Sci Nutr 3(6):506-518",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4708660/"
          },
          {
            "title": "Yang et al. (2023) Pharmaceutics 15(6):1595, Table 3（別分析）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10301132/"
          }
        ],
        "note": "収率と4成分はイラン産Lisbon種の風乾果皮の水蒸留油（同一分析）。デカナールは別分析の値。"
      }
    },
    {
      "name": "オレンジピール",
      "reading": "おれんじぴーる",
      "latin": "Citrus sinensis / Citrus aurantium",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "甘いオレンジ、丸い柑橘、ほのかな苦味",
      "role": "レモンより丸く、ジンの角をやわらげる。",
      "components": [
        "リモネン",
        "ミルセン",
        "リナロール",
        "デカナール",
        "オクタナール",
        "α-テルピネオール",
        "α-ピネン"
      ],
      "literature": {
        "oil": {
          "percent": 1.2,
          "min": 1.1,
          "max": 1.3,
          "basis": "乾燥果皮（イラン産バレンシア種）・水蒸留4時間（mL/100g乾物）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 95.74,
            "source": 1
          },
          {
            "name": "ミルセン",
            "percent": 1.31,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 0.58,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.35,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 0.34,
            "source": 1
          },
          {
            "name": "デカナール",
            "percent": 0.1,
            "source": 1
          },
          {
            "name": "オクタナール",
            "percent": 0.09,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Golmohammadi et al. (2018) Heliyon 4(11):e00893",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6222077/"
          },
          {
            "title": "Yang et al. (2023) Pharmaceutics 15(6):1595, Table 3（Navel）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10301132/"
          }
        ],
        "note": "収率（イラン産Valencia乾燥果皮）と組成（済州島産Navel果皮の水蒸留油）は別分析。乾燥法で収率は大きく変わる。"
      }
    },
    {
      "name": "グレープフルーツピール",
      "reading": "ぐれーぷふるーつぴーる",
      "latin": "Citrus paradisi",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "苦みのある柑橘、白い皮、ドライ",
      "role": "苦味と明るさを同時に足し、ソーダ割りで映える。",
      "components": [
        "リモネン",
        "ヌートカトン",
        "β-ミルセン",
        "オクタナール",
        "α-ピネン",
        "サビネン"
      ],
      "literature": {
        "oil": {
          "percent": 2,
          "basis": "乾燥果皮（トルコ産）・水蒸留2.5時間",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 79.85,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 3.13,
            "source": 0
          },
          {
            "name": "ヌートカトン",
            "percent": 2.04,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 0.97,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 0.72,
            "source": 0
          },
          {
            "name": "オクタナール",
            "percent": 0.33,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Yaldiz et al. (2022) ACS Omega 7(42):37427-37435",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9608417/"
          }
        ],
        "note": "収率と組成は同一分析（トルコ産、乾燥果皮の水蒸留油）。"
      }
    },
    {
      "name": "ライムピール",
      "reading": "らいむぴーる",
      "latin": "Citrus aurantiifolia",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "鋭いライム、青い柑橘、軽い苦味",
      "role": "ギムレット系のシャープさを連想させるトップを作る。",
      "components": [
        "リモネン",
        "シトラール",
        "β-ピネン",
        "γ-テルピネン",
        "α-ピネン",
        "酢酸ネリル",
        "サビネン"
      ],
      "literature": {
        "oil": {
          "percent": 2.3,
          "basis": "生の果皮（台湾産キーライム）・水蒸気蒸留3時間（生重量基準）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 42.35,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 15.44,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 12.57,
            "source": 0
          },
          {
            "name": "シトラール",
            "percent": 3.74,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 3.12,
            "source": 0
          },
          {
            "name": "酢酸ネリル",
            "percent": 2.2,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 2.12,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Lin et al. (2019) Foods 8(9):398",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6770194/"
          }
        ],
        "note": "キーライム（C. aurantifolia）の生果皮の値（同一分析）。乾燥果皮の収率は見つからなかった。"
      }
    },
    {
      "name": "ベルガモットピール",
      "reading": "べるがもっとぴーる",
      "latin": "Citrus bergamia",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "アールグレイ、花、上品な柑橘",
      "role": "柑橘とフローラルの境界を作り、香水的に整える。",
      "components": [
        "リモネン",
        "リナリルアセテート",
        "リナロール",
        "γ-テルピネン",
        "β-ピネン",
        "α-ピネン",
        "サビネン",
        "p-シメン",
        "β-ミルセン"
      ],
      "literature": {
        "oil": {
          "percent": 1,
          "basis": "トルコ・ハタイ産の生果皮をマイクロ波水蒸留（600 W、35分、クレベンジャー型）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 38.24,
            "source": 1
          },
          {
            "name": "リナリルアセテート",
            "percent": 30.5,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 14.45,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 6.58,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 5.76,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 1.08,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 0.77,
            "source": 1
          },
          {
            "name": "p-シメン",
            "percent": 0.76,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 0.69,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Cebi & Erarslan (2023) Foods 12(1):203（400 gから4 mL＝1.0%を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9818623/"
          },
          {
            "title": "Barbarossa et al. (2025) Antioxidants 14(4):400, Table 1（イタリアの市販冷圧ベルガモット油〔精製品〕、Area %）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12024135/"
          }
        ],
        "note": "組成はイタリアの市販冷圧油（精製品）1試料。文献上の幅はリモネン25〜53%、リナロール2〜20%、リナリルアセテート15〜40%と大きい（Navarra et al. 2015, Front Pharmacol 6:36 が Mondello et al. 1998 を引用）。収率はトルコ産の生果皮をマイクロ波水蒸留した値。その油はリナロール46.34%、リナリルアセテート17.69%、リモネン17.06%と、加熱でリナリルアセテートがリナロールに変わった組成だったので、組成には使わなかった。"
      }
    },
    {
      "name": "柚子",
      "reading": "ゆず",
      "latin": "Citrus junos",
      "group": "和ボタニカル",
      "part": "果皮",
      "aroma": "和柑橘、青み、鋭い皮、ほのかな苦味",
      "role": "日本らしい高いトップノート。少量でも印象が強い。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "β-フェランドレン",
        "ユズノン",
        "リナロール",
        "α-ピネン",
        "β-ミルセン",
        "ビシクロゲルマクレン"
      ],
      "literature": {
        "oil": {
          "percent": 1,
          "min": 1,
          "max": 1.27,
          "basis": "生の果皮（ギリシャ産）・水蒸留3時間（mL/100g）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 60.18,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 11.76,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 4.11,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 3.17,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 3.09,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 2.58,
            "source": 1
          },
          {
            "name": "ビシクロゲルマクレン",
            "percent": 1.98,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Xenikaki et al. (2026) Processes 14(17):2844",
            "url": "https://www.mdpi.com/2227-9717/14/17/2844"
          },
          {
            "title": "Lan Phi & Sawamura (2008) Food Sci Technol Res 14(4):359-366, Table 2（日本産・圧搾油）",
            "url": "https://www.jstage.jst.go.jp/article/fstr/14/4/14_4_359/_article"
          }
        ],
        "note": "組成は日本産の圧搾油（15試料）、収率はギリシャ産生果皮の水蒸留値（別論文）。ユズノンは微量の特徴香で定量値は見つからなかった。"
      }
    },
    {
      "name": "すだち",
      "reading": "すだち",
      "latin": "Citrus sudachi",
      "group": "和ボタニカル",
      "part": "果皮",
      "aroma": "青い柑橘、酸、爽快感",
      "role": "柚子より青く、食中酒向きの軽さを出しやすい。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "β-ピネン",
        "シトラール",
        "β-フェランドレン",
        "β-エレメン",
        "α-ファルネセン",
        "β-ミルセン",
        "α-ピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.95,
          "basis": "徳島県産の青い果皮（1995年9月上旬収穫）を刻み、ペンタン・ジクロロメタンで2時間抽出して濃縮した揮発油",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 69,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 7.5,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 7.2,
            "source": 1
          },
          {
            "name": "β-エレメン",
            "percent": 2.8,
            "source": 1
          },
          {
            "name": "α-ファルネセン",
            "percent": 2.2,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 1.61,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 1.28,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 0.48,
            "source": 2
          }
        ],
        "sources": [
          {
            "title": "Padrayuttawat, Yoshizawa, Tamura & Tokunaga (1997) Food Sci Technol Int Tokyo 3(4):402-408",
            "url": "https://www.jstage.jst.go.jp/article/fsti9596t9798/3/4/3_4_402/_article"
          },
          {
            "title": "Njoroge, Ukeda, Kusunose & Sawamura (1995) Flavour Fragr J 10(6):341-347, 要旨（冷圧油）",
            "url": "https://doi.org/10.1002/ffj.2730100602"
          },
          {
            "title": "楊・杉沢・中谷・田村・高木 (1992) 日本食品工業学会誌 39(1):16-24, Table 1（溶媒抽出油の炭化水素画分中の面積%、徳島県産）",
            "url": "https://www.jstage.jst.go.jp/article/nskkk1962/39/1/39_1_16/_article/-char/ja/"
          }
        ],
        "note": "リモネン・γ-テルピネン・β-フェランドレン・β-エレメン・α-ファルネセンは冷圧油の論文の要旨の値（全表は有料で未確認）。β-ピネン・ミルセン・α-ピネンは別分析（楊ら1992、溶媒抽出油の炭化水素画分の面積%、表の列はレモン・ライム・スダチ・ユズ・カボスの順）。シトラールは同じ1992年の分析でゲラニアール1.190 ppm（果皮あたり）、ネラール不検出とごく微量で、冷圧油でもカルボニル化合物の合計が0.4%のためnull。収率は溶媒抽出で得た揮発油の量で、蒸留・圧搾の収率ではない。すだちは熟すとリモネンが増えγ-テルピネンが減る（Tamura et al. 1999、ヘッドスペースでリモネンが未熟50.87%→過熟87.23%）。"
      }
    },
    {
      "name": "かぼす",
      "reading": "かぼす",
      "latin": "Citrus sphaerocarpa",
      "group": "和ボタニカル",
      "part": "果皮",
      "aroma": "青い和柑橘、丸い酸、皮の苦味",
      "role": "和食寄りの穏やかな柑橘感を足す。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "β-ピネン",
        "リナロール",
        "β-ミルセン",
        "α-ピネン",
        "デカナール",
        "ファルネセン",
        "β-カリオフィレン",
        "β-フェランドレン"
      ],
      "literature": {
        "oil": {
          "percent": 2.32,
          "basis": "大分県産かぼす（2010年10月収穫）の削った生果皮（水分約80%）約20 gを水500 mLと粉砕し、24時間水蒸気蒸留。生重量100 gあたりの油の重さ",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 71.72,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 16.62,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 4.28,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 0.81,
            "source": 1
          },
          {
            "name": "デカナール",
            "percent": 0.76,
            "source": 1
          },
          {
            "name": "ファルネセン",
            "percent": 0.65,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 0.47,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 0.41,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 0.3,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.09,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Suetsugu, Tanaka, Iwai et al. (2013) Flavour 2:18（Figure 1 の本文と Methods）",
            "url": "https://doi.org/10.1186/2044-7248-2-18"
          },
          {
            "title": "Hamada, Harano, Niihara et al. (2020) J Oleo Sci 69(6):643-648, Table 1（Kabosu 列：鹿児島大学農学部附属農場の未熟果の生果皮の水蒸気蒸留油、面積%）",
            "url": "https://www.jstage.jst.go.jp/article/jos/69/6/69_ess19296/_article/-char/ja/"
          }
        ],
        "note": "組成は鹿児島大学農学部附属農場の未熟果の水蒸気蒸留油で、ミルセン16.62%が特徴。高知大学の冷圧油（Minh Tu et al. 2002、要旨）もリモネン70.5%・ミルセン20.2%・アルデヒド計1.3%、金子ら1996のヘッドスペース分析もミルセン26.80%・リモネン66.33%で、同じミルセン型。収率は果皮を削った試料を24時間かけて蒸留した値で、果皮まるごとより高めの可能性がある；愛媛県産の生果皮の溶媒抽出では0.38%（楊ら1992）だが、この方法は同時に測ったスダチで0.10%と別報（第2弾のすだち0.95%）より大幅に低い。ファルネセンは(E)-β-ファルネセンのみ（α-ファルネセンは不検出）。"
      }
    },
    {
      "name": "カルダモン",
      "reading": "かるだもん",
      "latin": "Elettaria cardamomum",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "清涼感、ユーカリ、甘いスパイス",
      "role": "ジンのスパイスを軽やかにし、トップに抜けを作る。",
      "components": [
        "1,8-シネオール",
        "テルピニルアセテート",
        "リナロール",
        "リモネン",
        "サビネン",
        "α-テルピネオール",
        "テルピネン-4-オール",
        "β-ミルセン"
      ],
      "literature": {
        "oil": {
          "percent": 7.05,
          "min": 4.5,
          "max": 9.6,
          "basis": "乾燥したさや（インド・ケララ州の22系統）・水蒸留3時間（mL/100g）",
          "source": 0
        },
        "composition": [
          {
            "name": "テルピニルアセテート",
            "percent": 43.5,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 34.5,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 3.5,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 3.4,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 2.3,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 2,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 1.8,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 1.4,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Ashokkumar K. et al. (2021) Front. Sustain. Food Syst. 5:639619",
            "url": "https://www.frontiersin.org/journals/sustainable-food-systems/articles/10.3389/fsufs.2021.639619/full"
          }
        ],
        "note": "精油量の平均値は記載なし（22系統中18系統が5.4〜6.7%）。成分は22系統の平均で、系統差が大きい。"
      }
    },
    {
      "name": "シナモン",
      "reading": "しなもん",
      "latin": "Cinnamomum verum",
      "group": "樹皮・ウッディ",
      "part": "樹皮",
      "aroma": "甘い熱感、焼き菓子、樹皮",
      "role": "甘く温かいスパイス感を加える。入れすぎると主張が強い。",
      "components": [
        "シンナムアルデヒド",
        "オイゲノール",
        "リナロール",
        "β-カリオフィレン",
        "酢酸シンナミル",
        "α-フェランドレン",
        "p-シメン"
      ],
      "literature": {
        "oil": {
          "percent": 1.82,
          "min": 1.29,
          "max": 2.53,
          "basis": "乾燥樹皮（スリランカ産セイロンシナモン）・水蒸留約4時間",
          "source": 0
        },
        "composition": [
          {
            "name": "シンナムアルデヒド",
            "percent": 69,
            "source": 1
          },
          {
            "name": "オイゲノール",
            "percent": 6.43,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 6.33,
            "source": 1
          },
          {
            "name": "酢酸シンナミル",
            "percent": 5.47,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 5.02,
            "source": 1
          },
          {
            "name": "α-フェランドレン",
            "percent": 0.81,
            "source": 1
          },
          {
            "name": "p-シメン",
            "percent": 0.79,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Wijeweera et al. (2020) Ruhuna Journal of Science 11(1):1-12",
            "url": "https://rjs.sljol.info/articles/10.4038/rjs.v11i1.82"
          },
          {
            "title": "EFSA FEEDAP Panel (2022) EFSA Journal doi:10.2903/j.efsa.2022.7601, Table 2（5バッチ）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9593251/"
          }
        ],
        "note": "成分はスリランカ産の市販バーク油5バッチの平均、精油量は別の研究。品種・樹齢で大きく変わる。"
      }
    },
    {
      "name": "カシア",
      "reading": "かしあ",
      "latin": "Cinnamomum cassia",
      "group": "樹皮・ウッディ",
      "part": "樹皮",
      "aroma": "濃いシナモン、甘辛い樹皮",
      "role": "シナモンより力強く、甘い厚みを作る。",
      "components": [
        "シンナムアルデヒド",
        "クマリン",
        "オイゲノール"
      ],
      "literature": {
        "oil": {
          "percent": 1.56,
          "basis": "粉砕した樹皮（中国・広東省産）・水蒸留5時間",
          "source": 0
        },
        "composition": [
          {
            "name": "シンナムアルデヒド",
            "percent": 89.95,
            "source": 1
          },
          {
            "name": "クマリン",
            "percent": 0.33,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Huang et al. (2025) Foods 14(20):3570",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12563876/"
          },
          {
            "title": "Nwanade et al. (2021) Parasites & Vectors doi:10.1186/s13071-021-04830-2, Table 1",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8220678/"
          }
        ],
        "note": "成分は広東省産の樹皮油1試料、精油量は別の研究。流通するカシア油（葉・小枝原料）はクマリンがもっと多い（0.8〜4%）。"
      }
    },
    {
      "name": "クローブ",
      "reading": "くろーぶ",
      "latin": "Syzygium aromaticum",
      "group": "シード・スパイス",
      "part": "蕾",
      "aroma": "濃厚な甘いスパイス、薬品、温かさ",
      "role": "少量で深いスパイスの芯を作る。",
      "components": [
        "オイゲノール",
        "β-カリオフィレン",
        "酢酸オイゲニル",
        "α-フムレン"
      ],
      "literature": {
        "oil": {
          "percent": 12.98,
          "basis": "乾燥した蕾・水蒸留4時間（水分を除いた重量基準）",
          "source": 0
        },
        "composition": [
          {
            "name": "オイゲノール",
            "percent": 82.7,
            "source": 1
          },
          {
            "name": "酢酸オイゲニル",
            "percent": 8.5,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 6.7,
            "source": 1
          },
          {
            "name": "α-フムレン",
            "percent": 1.13,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Golmakani, Zare & Razzaghi (2017) Food Sci. Technol. Res. 23(3):385-394",
            "url": "https://www.jstage.jst.go.jp/article/fstr/23/3/23_385/_article"
          },
          {
            "title": "EFSA FEEDAP Panel (2023) EFSA Journal doi:10.2903/j.efsa.2023.8183, Table 2（7バッチ）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10375362/"
          }
        ],
        "note": "成分はインドネシア産の市販クローブバッド油7バッチの平均、精油量は別の研究。粉砕しない蕾の精油量は粉砕時の半分ほどという報告もある。"
      }
    },
    {
      "name": "ナツメグ",
      "reading": "なつめぐ",
      "latin": "Myristica fragrans",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "甘い木、ナッツ、温かいスパイス",
      "role": "カクテルの奥に甘いウッディ感を残す。",
      "components": [
        "サビネン",
        "α-ピネン",
        "β-ピネン",
        "ミリスチシン",
        "テルピネン-4-オール",
        "リモネン",
        "γ-テルピネン",
        "β-ミルセン"
      ],
      "literature": {
        "oil": {
          "percent": 5.811,
          "basis": "乾燥種子（インドネシア産）・水蒸留4時間",
          "source": 0
        },
        "composition": [
          {
            "name": "サビネン",
            "percent": 25.6,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 19.7,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 16.7,
            "source": 0
          },
          {
            "name": "ミリスチシン",
            "percent": 13.16,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 5.84,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 3.25,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 3.07,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.5,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Ibrahim et al. (2020) Molecules 25(3):565",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7037852/"
          }
        ],
        "note": "精油量と組成は同じ研究。蒸留の時間（カットの位置）で比率が大きく変わり、後半ほどミリスチシンが増える。"
      }
    },
    {
      "name": "メース",
      "reading": "めーす",
      "latin": "Myristica fragrans",
      "group": "シード・スパイス",
      "part": "仮種皮",
      "aroma": "ナツメグより明るい花、スパイス",
      "role": "ナツメグの重さを抑えた華やかなスパイス。",
      "components": [
        "サビネン",
        "α-ピネン",
        "リナロール",
        "ミリスチシン",
        "β-ピネン",
        "リモネン",
        "δ-3-カレン",
        "4-カレン",
        "サフロール",
        "β-フェランドレン",
        "テルピネン-4-オール"
      ],
      "literature": {
        "oil": {
          "percent": 8.1,
          "min": 8.1,
          "max": 10.3,
          "basis": "メース（水分9.1%、インド・ケララ州アディマリ産）を粉砕・水蒸留3時間。最大値は総説に載るパキスタン産の値",
          "source": 0
        },
        "composition": [
          {
            "name": "サビネン",
            "percent": 38.37,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 8.16,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 7.61,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 7.07,
            "source": 0
          },
          {
            "name": "ミリスチシン",
            "percent": 5.9,
            "source": 0
          },
          {
            "name": "δ-3-カレン",
            "percent": 5.05,
            "source": 0
          },
          {
            "name": "4-カレン",
            "percent": 4.22,
            "source": 0
          },
          {
            "name": "サフロール",
            "percent": 3.9,
            "source": 0
          },
          {
            "name": "β-フェランドレン",
            "percent": 3.62,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 3.01,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.29,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Ashokkumar K. et al. (2022) Nat. Prod. Res. 36(1):432-435, Supplementary Table S1（列はLeaf, Mace, Kernel, Seedの順で、Maceは2列目）（最大値は Ashokkumar K. et al. 2022 Phytother. Res. 36(7):2839-2851, Table 1）",
            "url": "https://www.tandfonline.com/doi/suppl/10.1080/14786419.2020.1771713"
          }
        ],
        "note": "インド・西ガーツ産1試料の値。総説ではパキスタン産でγ-テルピネン19.1%、サフロール18.2%と大きく違う組成の報告もある。タイで売られているメースには同属 M. argentea（サフロールが多い）のものもあった（Khamnuan 2026）。"
      }
    },
    {
      "name": "アニスシード",
      "reading": "あにすしーど",
      "latin": "Pimpinella anisum",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "甘草、リコリス、甘いスパイス",
      "role": "甘い輪郭を作る。クラシックにもリキュール寄りにも振れる。",
      "components": [
        "アネトール",
        "リモネン",
        "エストラゴール",
        "γ-ヒマカレン",
        "2-メチル酪酸プソイドイソオイゲニル"
      ],
      "literature": {
        "oil": {
          "percent": 3.18,
          "min": 1,
          "max": 5.36,
          "basis": "欧州各地の乾燥アニス果実14試料の精油含量",
          "source": 0
        },
        "composition": [
          {
            "name": "アネトール",
            "percent": 90,
            "source": 1
          },
          {
            "name": "γ-ヒマカレン",
            "percent": 2.29,
            "source": 1
          },
          {
            "name": "2-メチル酪酸プソイドイソオイゲニル",
            "percent": 1.24,
            "source": 1
          },
          {
            "name": "エストラゴール",
            "percent": 0.82,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 0.06,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Orav A., Raal A., Arak E. (2008) Nat Prod Res 22(3):227-232（要旨、14試料の範囲、mL/kg を % に換算）",
            "url": "https://pubmed.ncbi.nlm.nih.gov/18266152/"
          },
          {
            "title": "EFSA FEEDAP Panel (2023) EFSA J 21(4):e07976, Table 2（スペイン産アニス油 5ロット、GC-FID）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10117170/"
          }
        ],
        "note": "精油量は欧州14試料の範囲（うち5試料は Ph. Eur. の下限 20 mL/kg 未満）で代表値は置かない。成分は EFSA が評価したスペイン産アニス油5ロットの平均で、リモネンはごく微量。2-メチル酪酸プソイドイソオイゲニルはフェニルプロペン骨格のエステルで、系統はフェニルプロペンとした。"
      }
    },
    {
      "name": "スターアニス",
      "reading": "すたーあにす",
      "latin": "Illicium verum",
      "group": "シード・スパイス",
      "part": "果実",
      "aroma": "強いアニス、甘い薬草、八角",
      "role": "中華スパイス的な厚みを少量で出す。",
      "components": [
        "アネトール",
        "リモネン",
        "リナロール",
        "エストラゴール"
      ],
      "literature": {
        "oil": {
          "percent": 7.48,
          "min": 2.5,
          "max": 8,
          "basis": "乾燥果実（中国・広西産）を粉砕し水蒸留（範囲は EMA の要約報告）",
          "source": 0
        },
        "composition": [
          {
            "name": "アネトール",
            "percent": 90.56,
            "source": 1
          },
          {
            "name": "エストラゴール",
            "percent": 3.49,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.95,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 0.61,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Huang Y. et al. (2010) Molecules 15(11):7558-7569（範囲は EMA CVMP 要約報告 EMEA/MRL/710/99-FINAL, 2000）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6259245/"
          },
          {
            "title": "EFSA FEEDAP Panel (2023) EFSA J 21(7):e08182, Table 3（中国産スターアニス油 7ロット、GC-MS）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10388226/"
          }
        ],
        "note": "精油量は中国産1試料（w/w、Ph. Eur. の下限は 70 mL/kg）。成分は EFSA が評価した中国産スターアニス油7ロットの平均で、うち5ロットは葉を含む原料だが果実のみの油と大きな差はないとされる。1% 未満の成分（フェニクリン 0.67%、α-ピネン 0.48% など）は省いた。"
      }
    },
    {
      "name": "フェンネルシード",
      "reading": "ふぇんねるしーど",
      "latin": "Foeniculum vulgare",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "甘いハーブ、アニス、青み",
      "role": "甘く丸いハーブ感でドライさを調整する。",
      "components": [
        "アネトール",
        "フェンコン",
        "リモネン",
        "エストラゴール",
        "α-ピネン",
        "α-フェランドレン"
      ],
      "literature": {
        "oil": {
          "percent": 2.71,
          "min": 2.22,
          "max": 3.2,
          "basis": "薬局で購入した乾燥スイートフェンネル果実（エストニア・モルドバ）の精油含量",
          "source": 0
        },
        "composition": [
          {
            "name": "アネトール",
            "percent": 77.7,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 5.85,
            "source": 1
          },
          {
            "name": "フェンコン",
            "percent": 5.26,
            "source": 1
          },
          {
            "name": "エストラゴール",
            "percent": 3.76,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 3.64,
            "source": 1
          },
          {
            "name": "α-フェランドレン",
            "percent": 1.43,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "EMA/HMPC/240553/2016 Assessment report on Foeniculum vulgare Miller subsp. vulgare var. vulgare and var. dulce, fructus, Final – Revision 1 (2024)（Raal et al. 2012 の値を引用、mL/kg を % に換算）",
            "url": "https://www.ema.europa.eu/en/documents/herbal-report/final-assessment-report-foeniculum-vulgare-miller-subsp-vulgare-var-vulgare-foeniculum-vulgare-miller-subsp-vulgare-var-dulce-mill-batt-trab-fructus-revision-1_en.pdf-0"
          },
          {
            "title": "EFSA FEEDAP Panel (2023) EFSA J 21(10):e08348, Table 10（スイートフェンネル果実油 5ロット、GC-FID）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10613937/"
          }
        ],
        "note": "スイートフェンネル（var. dulce）を採用。精油量は EMA 報告書が引用する薬局購入品の範囲（Ph. Eur. の下限は 20 mL/kg）、成分は EFSA が評価したモルドバ産スイートフェンネル果実油（工業的な水蒸気蒸留油）5ロットの平均。ビターフェンネルを使う場合は精油量が多くフェンコンも多い（Ph. Eur. は精油 40 mL/kg 以上・フェンコン 15% 以上。フェンコンの多いセルビア産の例で精油 5.80%、アネトール 73.85%、フェンコン 15.48%：Gladikostić et al. 2023）。"
      }
    },
    {
      "name": "キャラウェイシード",
      "reading": "きゃらうぇいしーど",
      "latin": "Carum carvi",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "ライ麦パン、甘いスパイス、ハーブ",
      "role": "穀物感や古典的な欧州スパイス感を足す。",
      "components": [
        "カルボン",
        "リモネン",
        "β-ミルセン"
      ],
      "literature": {
        "oil": {
          "percent": 3.52,
          "min": 3,
          "max": 7,
          "basis": "乾燥キャラウェイ種子（チュニジアの市場品）を水蒸留4時間（範囲は EMA 報告書）",
          "source": 0
        },
        "composition": [
          {
            "name": "カルボン",
            "percent": 58.2,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 38.5,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 0.4,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Ghannay S. et al. (2022) Plants 11(8):1072（範囲は EMA/HMPC/715093/2013 が引用する ESCOP の値）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9032858/"
          }
        ],
        "note": "精油量・成分はチュニジアの市場で買った種子1試料で、EFSA が評価した市販キャラウェイ油6ロット（カルボン 55.9%・リモネン 39.6%・ミルセン 0.59%）ともほぼ同じ。精油の範囲は EMA 報告書の 3〜7%（Ph. Eur. の下限は 30 mL/kg）で、精油用には収量の多い二年生品種が使われるとされる（EFSA）。カルボンとリモネン以外に 1% を超える成分はない。"
      }
    },
    {
      "name": "クミン",
      "reading": "くみん",
      "latin": "Cuminum cyminum",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "土、カレー、汗、温かいスパイス",
      "role": "使い方次第で個性派の土っぽい奥行きを作る。",
      "components": [
        "クミンアルデヒド",
        "γ-テルピネン",
        "β-ピネン",
        "p-シメン",
        "p-メンタ-1,3-ジエン-7-アール",
        "p-メンタ-1,4-ジエン-7-アール",
        "β-アコラジエン"
      ],
      "literature": {
        "oil": {
          "percent": 2.33,
          "basis": "インド産の乾燥クミン種子（丸のまま）を水蒸気蒸留480分",
          "source": 0
        },
        "composition": [
          {
            "name": "クミンアルデヒド",
            "percent": 32.3,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 20,
            "source": 1
          },
          {
            "name": "p-シメン",
            "percent": 14,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 11.2,
            "source": 1
          },
          {
            "name": "p-メンタ-1,3-ジエン-7-アール",
            "percent": 8.31,
            "source": 1
          },
          {
            "name": "p-メンタ-1,4-ジエン-7-アール",
            "percent": 4.07,
            "source": 1
          },
          {
            "name": "β-アコラジエン",
            "percent": 2.65,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Zheljazkov V.D. et al. (2015) PLoS One 10(12):e0144120, Table 1（蒸留480分）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4671617/"
          },
          {
            "title": "EFSA FEEDAP Panel (2022) EFSA J 20(12):e07690, Table 2（インド産クミン油 7ロット、GC-FID）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9762120/"
          }
        ],
        "note": "精油量は丸のままの種子を8時間蒸留した値で、蒸留時間が短いと大きく下がる（60分で 0.48%）。成分は EFSA が評価したインド産クミン油7ロットの平均（p-シメンと p-メンタジエナール類は同じロットの表3）。蒸留時間が長いほどクミンアルデヒドの割合は下がり、テルペン類が増える（Zheljazkov et al. 2015）。"
      }
    },
    {
      "name": "クベブペッパー",
      "reading": "くべぶぺっぱー",
      "latin": "Piper cubeba",
      "group": "シード・スパイス",
      "part": "果実",
      "aroma": "ドライな胡椒、樹脂、軽い苦味",
      "role": "クラシックジンに乾いたスパイスと樹脂感を足す。",
      "components": [
        "β-カリオフィレン",
        "サビネン",
        "1,8-シネオール",
        "α-ピネン",
        "クベボール",
        "β-クベベン",
        "ゲルマクレンD"
      ],
      "literature": {
        "oil": {
          "percent": 9.73,
          "min": 0.2,
          "max": 11.8,
          "basis": "乾燥した実（インドネシア産）を粉砕・水蒸留2時間（mL/100g）",
          "source": 0
        },
        "composition": [
          {
            "name": "クベボール",
            "percent": 26.4,
            "source": 0
          },
          {
            "name": "β-クベベン",
            "percent": 12.32,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 8.23,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 6.77,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 3.07,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 1.52,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 0.66,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Sander A. et al. (2025) Molecules 30(20):4140",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566369/"
          }
        ],
        "note": "インドネシア産1試料の値。産地・ケモタイプ差が非常に大きく、他の報告ではサビネン9.1〜46.3%。主成分のクベボール等は表の代表成分に入っていない。"
      }
    },
    {
      "name": "ブラックペッパー",
      "reading": "ぶらっくぺっぱー",
      "latin": "Piper nigrum",
      "group": "シード・スパイス",
      "part": "果実",
      "aroma": "胡椒、木質、乾いた辛味",
      "role": "余韻にスパイスの輪郭を作る。",
      "components": [
        "β-カリオフィレン",
        "リモネン",
        "α-ピネン",
        "ピペリン",
        "サビネン",
        "δ-3-カレン",
        "β-ピネン",
        "エレモール"
      ],
      "literature": {
        "oil": {
          "percent": 2.18,
          "min": 0.91,
          "max": 3.68,
          "basis": "乾燥した実（ブラジル産）を粉砕・水蒸留2時間（mL/100g）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 16.88,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 12.01,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 11.76,
            "source": 0
          },
          {
            "name": "δ-3-カレン",
            "percent": 9.79,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 8.83,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 6.12,
            "source": 0
          },
          {
            "name": "エレモール",
            "percent": 4.52,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Sander A. et al. (2025) Molecules 30(20):4140",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566369/"
          }
        ],
        "note": "ブラジル産1試料の値で、他の報告ではβ-カリオフィレンが9.48〜62.23%と大きく振れる。ピペリンは不揮発性で精油に含まれない。"
      }
    },
    {
      "name": "ピンクペッパー",
      "reading": "ぴんくぺっぱー",
      "latin": "Schinus molle / Schinus terebinthifolia",
      "group": "シード・スパイス",
      "part": "果実",
      "aroma": "甘い胡椒、赤い果実、樹脂",
      "role": "スパイスを軽く華やかに見せる。",
      "components": [
        "α-ピネン",
        "リモネン",
        "β-ミルセン",
        "β-カリオフィレン",
        "δ-3-カレン",
        "α-フェランドレン",
        "β-ピネン",
        "サビネン",
        "ゲルマクレンD",
        "エレモール",
        "δ-カジネン"
      ],
      "literature": {
        "oil": {
          "percent": 6.63,
          "min": 0.16,
          "max": 6.63,
          "basis": "スパイス店で買ったピンクペッパー（ブラジル産 S. terebinthifolia）を粉砕・水蒸留2時間。最小値は同論文Table 1の文献値",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 17.39,
            "source": 0
          },
          {
            "name": "δ-3-カレン",
            "percent": 15.98,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 15.46,
            "source": 0
          },
          {
            "name": "α-フェランドレン",
            "percent": 12.51,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 5.75,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 4.93,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 4.57,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 4.46,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 2.67,
            "source": 0
          },
          {
            "name": "エレモール",
            "percent": 2.23,
            "source": 0
          },
          {
            "name": "δ-カジネン",
            "percent": 1.68,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Sander A. et al. (2025) Molecules 30(20):4140, Table 1（6.63%は本研究、0.16–6.54%は文献の最小・最大）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566369/"
          }
        ],
        "note": "ブラジル産の市販ピンクペッパー1試料の値で、種は S. terebinthifolia（ブラジリアンペッパー）を採り、S. molle ではない。同論文の文献表にはβ-ミルセン41%が主成分の報告もあり、組成の振れ幅が大きい。精油量の範囲は文献の最小値0.16%と本研究の6.63%。"
      }
    },
    {
      "name": "山椒",
      "reading": "さんしょう",
      "latin": "Zanthoxylum piperitum",
      "group": "和ボタニカル",
      "part": "果皮",
      "aroma": "柑橘、しびれ、青いスパイス",
      "role": "和のペッパー感と柑橘の橋渡しに使える。",
      "components": [
        "リモネン",
        "シトロネラール",
        "リナロール",
        "サンショオール",
        "γ-テルピネン",
        "β-ミルセン",
        "酢酸ネリル"
      ],
      "literature": {
        "oil": {
          "percent": 1.9,
          "basis": "乾燥果皮（韓国産）・水蒸気蒸留8時間（mL/100g）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 21.55,
            "source": 0
          },
          {
            "name": "シトロネラール",
            "percent": 18.2,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 14.95,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 11.62,
            "source": 0
          },
          {
            "name": "酢酸ネリル",
            "percent": 11.43,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.89,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Lee, Shin & Jung (2017) Asian J Beauty Cosmetol 15(3):355-366",
            "url": "https://www.e-ajbc.org/journal/view.php?viewtype=pubreader&number=1024"
          }
        ],
        "note": "韓国産の乾燥果皮1試料の値で、成分の同定の質には注意が必要。日本産の%値は見つからなかった。しびれ成分のサンショオールは不揮発性で精油には入らない。"
      }
    },
    {
      "name": "花椒",
      "reading": "ほあじゃお",
      "latin": "Zanthoxylum bungeanum",
      "group": "シード・スパイス",
      "part": "果皮",
      "aroma": "しびれ、赤い柑橘、スパイス",
      "role": "山椒より赤く強いしびれとスパイス感。",
      "components": [
        "リモネン",
        "リナロール",
        "サンショオール",
        "β-ミルセン",
        "リナリルアセテート",
        "テルピネン-4-オール",
        "α-テルピネオール",
        "1,8-シネオール",
        "γ-テルピネン",
        "酢酸ゲラニル"
      ],
      "literature": {
        "oil": {
          "percent": 6.46,
          "min": 2.5,
          "max": 13.33,
          "basis": "乾燥果皮。四川省の4品種40試料を中国規格の揮発油定量法（水蒸気蒸留5時間、mL/100 g）で測定した平均",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 19.59,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 18.65,
            "source": 1
          },
          {
            "name": "リナリルアセテート",
            "percent": 11.97,
            "source": 1
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 7.35,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 5.81,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 5.52,
            "source": 1
          },
          {
            "name": "1,8-シネオール",
            "percent": 5.32,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 3.97,
            "source": 1
          },
          {
            "name": "酢酸ゲラニル",
            "percent": 2.86,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Xiang L. et al. (2016) Front. Plant Sci. 7:467, Table 1 と本文",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4835500/"
          },
          {
            "title": "Zhu Y. et al. (2025) npj Sci. Food 9:73, Table 1（Untreated＝NADES処理なしの列）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12078588/"
          }
        ],
        "note": "精油量は四川の4品種40試料の平均、成分は陝西省産の品種「鳳椒」の乾燥果皮1試料（水蒸留3時間、収率4.67%）で、別の研究。成都の業者から買った果皮ではリモネン28.88%、リナロール1.00%という例もあり（Wei 2021）、品種・産地でリナロールの割合が大きく変わる。サンショオールは不揮発性のアミドで精油には入らない。"
      }
    },
    {
      "name": "グレインズオブパラダイス",
      "reading": "ぐれいんずおぶぱらだいす",
      "latin": "Aframomum melegueta",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "胡椒、生姜、カルダモン様",
      "role": "西アフリカ系の温かいスパイス。クラシックにも個性派にも合う。",
      "components": [
        "ジンゲロール",
        "ショウガオール",
        "β-カリオフィレン",
        "1,8-シネオール",
        "α-フムレン",
        "酢酸2-ヘプチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.27,
          "min": 0.21,
          "max": 0.3,
          "basis": "乾燥種子（ギニア産）を粉砕・水蒸留2時間（mL/100g）",
          "source": 0
        },
        "composition": [
          {
            "name": "α-フムレン",
            "percent": 50.31,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 26.38,
            "source": 0
          },
          {
            "name": "酢酸2-ヘプチル",
            "percent": 6.1,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Sander A. et al. (2025) Molecules 30(20):4140",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566369/"
          }
        ],
        "note": "1,8-シネオールは不検出、ジンゲロール・ショウガオールは不揮発性の辛味成分で精油には入らない。主成分のα-フムレン（50%）は表の代表成分に入っていない。"
      }
    },
    {
      "name": "ジンジャー",
      "reading": "じんじゃー",
      "latin": "Zingiber officinale",
      "group": "根・土台",
      "part": "根茎",
      "aroma": "生姜、温かい辛味、レモン様",
      "role": "ソーダやトニックで広がる温かい刺激を足す。",
      "components": [
        "ジンゲロール",
        "ショウガオール",
        "シトラール",
        "β-セスキフェランドレン",
        "ジンギベレン",
        "ar-クルクメン",
        "α-ファルネセン"
      ],
      "literature": {
        "oil": {
          "percent": 2.515,
          "min": 1.29,
          "max": 3.74,
          "basis": "乾燥粉末（中国産3品種）・水蒸気蒸留4時間。乾燥のしかたで変わる",
          "source": 0
        },
        "composition": [
          {
            "name": "ジンギベレン",
            "percent": 36.78,
            "source": 1
          },
          {
            "name": "β-セスキフェランドレン",
            "percent": 10.25,
            "source": 1
          },
          {
            "name": "ar-クルクメン",
            "percent": 9.51,
            "source": 1
          },
          {
            "name": "α-ファルネセン",
            "percent": 6.84,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Li K. et al. (2026) Foods 15(17):3144",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13564781/"
          },
          {
            "title": "EFSA FEEDAP Panel (2020) EFSA J 18(6):e06147, Table 1（乾燥根茎の精油11バッチ）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7448036/"
          }
        ],
        "note": "精油量と組成は別の出典。ジンゲロール・ショウガオールは辛味の不揮発性成分で精油には入らない。シトラールはこの油では微量（シトラールの多い産地もある）。主成分のジンギベレンは表の代表成分に入っていない。"
      }
    },
    {
      "name": "ターメリック",
      "reading": "たーめりっく",
      "latin": "Curcuma longa",
      "group": "根・土台",
      "part": "根茎",
      "aroma": "土、乾いた根、カレー様",
      "role": "色や土っぽさを使う個性派向き。",
      "components": [
        "ターメロン",
        "ジンギベレン",
        "クルクミン",
        "ar-クルクメン",
        "β-セスキフェランドレン",
        "(E)-アトラントン",
        "(E)-γ-アトラントン",
        "ar-ターメロール",
        "ビサボロン",
        "β-ビサボレン"
      ],
      "literature": {
        "oil": {
          "percent": 4.5,
          "min": 3,
          "max": 6,
          "basis": "インド産の乾燥根茎を水蒸気蒸留した市販のターメリック油（EFSAの飼料添加物の評価）。乾燥根茎の精油量は3〜6%とされる",
          "source": 0
        },
        "composition": [
          {
            "name": "ターメロン",
            "percent": 58.46,
            "source": 0
          },
          {
            "name": "ar-クルクメン",
            "percent": 4.49,
            "source": 0
          },
          {
            "name": "β-セスキフェランドレン",
            "percent": 3.88,
            "source": 0
          },
          {
            "name": "ジンギベレン",
            "percent": 3.21,
            "source": 0
          },
          {
            "name": "(E)-アトラントン",
            "percent": 3.04,
            "source": 0
          },
          {
            "name": "(E)-γ-アトラントン",
            "percent": 1.69,
            "source": 0
          },
          {
            "name": "ar-ターメロール",
            "percent": 1.58,
            "source": 0
          },
          {
            "name": "ビサボロン",
            "percent": 1.27,
            "source": 0
          },
          {
            "name": "β-ビサボレン",
            "percent": 1.11,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "EFSA FEEDAP Panel (2020) EFSA J 18(6):e06146, 3.3.1節（turmeric oil の特性）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7448085/"
          }
        ],
        "note": "組成はインド産乾燥根茎の市販精油5バッチ（Table 4・5）、精油量3〜6%は申請資料の記載で、実測の例ではエジプトの市販乾燥根茎で2.3%（Fahmy et al. 2023, Plants 12:1785）。EFSAの表のar-ターメロンは5つの異性体の合計で、α-ターメロンもここに含まれるとみられ、表の「ターメロン」はこれとβ-ターメロンの合計にした。クルクミンは揮発せず精油に入らない。"
      }
    },
    {
      "name": "ローズマリー",
      "reading": "ろーずまりー",
      "latin": "Salvia rosmarinus",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "針葉樹、薬草、清涼感",
      "role": "ジュニパーの松感をハーブ側へ広げる。",
      "components": [
        "1,8-シネオール",
        "カンファー",
        "α-ピネン",
        "ボルネオール",
        "リモネン",
        "カンフェン",
        "リナロール"
      ],
      "literature": {
        "oil": {
          "percent": 0.93,
          "min": 0.5,
          "max": 2.5,
          "basis": "風乾葉（パキスタン産）・水蒸留3時間",
          "source": 0
        },
        "composition": [
          {
            "name": "1,8-シネオール",
            "percent": 38.5,
            "source": 0
          },
          {
            "name": "カンファー",
            "percent": 17.1,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 12.3,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 6.23,
            "source": 0
          },
          {
            "name": "カンフェン",
            "percent": 6,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 5.7,
            "source": 0
          },
          {
            "name": "ボルネオール",
            "percent": 3.25,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Hussain A.I. et al. (2010) Braz J Microbiol 41(4):1070-1078",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3769777/"
          }
        ],
        "note": "ケモタイプ差が大きい（スペイン型はカンファー・α-ピネン多め、モロッコ・チュニジア型はシネオール多め）。"
      }
    },
    {
      "name": "タイム",
      "reading": "たいむ",
      "latin": "Thymus vulgaris",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "薬草、温かいハーブ、ほろ苦さ",
      "role": "少量でハーブの芯を強く出す。",
      "components": [
        "チモール",
        "カルバクロール",
        "p-シメン",
        "リナロール",
        "β-カリオフィレン",
        "γ-テルピネン",
        "イソボルネオール",
        "アセトバニロン",
        "テルピネン-4-オール",
        "α-テルピネン"
      ],
      "literature": {
        "oil": {
          "percent": 1.8,
          "min": 1.2,
          "max": 2.5,
          "basis": "トルコ産の栽培タイム（チモール型）の風乾品を水蒸留3時間。範囲は欧州薬局方の最低値1.2%〜EMAが示す乾燥品の上限2.5%",
          "source": 0
        },
        "composition": [
          {
            "name": "チモール",
            "percent": 55.3,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 11.2,
            "source": 0
          },
          {
            "name": "カルバクロール",
            "percent": 8.7,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 4.2,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 3.4,
            "source": 0
          },
          {
            "name": "イソボルネオール",
            "percent": 2.3,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 1.7,
            "source": 0
          },
          {
            "name": "アセトバニロン",
            "percent": 1.7,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 1.1,
            "source": 0
          },
          {
            "name": "α-テルピネン",
            "percent": 1,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Gedikoğlu A. et al. (2019) Food Sci Nutr 7(5):1704-1714, Table 1（範囲はEMA/HMPC/342334/2013 Assessment report on Thymus vulgaris L., vulgaris zygis L., herba）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6526640/"
          }
        ],
        "note": "チモール型（欧州薬局方が求める市販タイプ）で、トルコ産栽培品の乾燥全草1分析。範囲はイタリア有機栽培チモール型の3年分を含む（その精油量は0.5〜1.2%と低め）。欧州薬局方のタイム油規格はチモール37〜55%、p-シメン14〜28%、カルバクロール0.5〜5.5%で（EMA/HMPC/52980/2017）、この試料はカルバクロールがやや多い。"
      }
    },
    {
      "name": "セージ",
      "reading": "せーじ",
      "latin": "Salvia officinalis",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "薬草、樟脳、乾いたハーブ",
      "role": "ドライでビターなハーブ感を加える。",
      "components": [
        "ツヨン",
        "カンファー",
        "1,8-シネオール",
        "ボルネオール",
        "α-ピネン",
        "カンフェン",
        "ビリジフロロール",
        "酢酸ボルニル",
        "エピマノオール",
        "β-カリオフィレン"
      ],
      "literature": {
        "oil": {
          "percent": 1.8,
          "min": 1.2,
          "max": 3,
          "basis": "トルコ産栽培セージの葉を37℃で乾燥し、水蒸留3時間。範囲は欧州薬局方の最低値1.2%〜EMAの上限3%",
          "source": 0
        },
        "composition": [
          {
            "name": "ツヨン",
            "percent": 25.24,
            "source": 0
          },
          {
            "name": "カンファー",
            "percent": 17.92,
            "source": 0
          },
          {
            "name": "ボルネオール",
            "percent": 11.58,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 11.39,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 5.2,
            "source": 0
          },
          {
            "name": "カンフェン",
            "percent": 4.38,
            "source": 0
          },
          {
            "name": "ビリジフロロール",
            "percent": 4.38,
            "source": 0
          },
          {
            "name": "酢酸ボルニル",
            "percent": 3.84,
            "source": 0
          },
          {
            "name": "エピマノオール",
            "percent": 2.01,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 1.97,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Soltanbeigi E. (2026) Sci Rep 16, doi:10.1038/s41598-026-42109-7, Table 4（範囲はEMA/HMPC/150801/2015 Assessment report on Salvia officinalis L., folium and aetheroleum）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13009210/"
          }
        ],
        "note": "トルコ産栽培セージ乾燥葉の1分析（水蒸留3時間の値。蒸留時間でα-ツヨンが22.6%→18.0%と変わる）。ツヨンはα＋βの合計。EMAの文献値はα-ツヨン10〜60%、β-ツヨン4〜36%、カンファー5〜20%、1,8-シネオール1〜15%と幅が大きい。"
      }
    },
    {
      "name": "バジル",
      "reading": "ばじる",
      "latin": "Ocimum basilicum",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "青く甘いハーブ、アニス様",
      "role": "青さと甘いハーブ感を同時に足す。",
      "components": [
        "リナロール",
        "エストラゴール",
        "1,8-シネオール",
        "オイゲノール",
        "ビサボロール",
        "メチルオイゲノール",
        "α-ベルガモテン",
        "ケイ皮酸メチル",
        "酢酸ボルニル",
        "γ-カジネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.48,
          "min": 0.48,
          "max": 0.75,
          "basis": "エジプト産の市販乾燥スイートバジル（刻み葉、水分9.4%）を水蒸留1時間。範囲はトルコ産系統の乾燥葉",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 48.4,
            "source": 0
          },
          {
            "name": "エストラゴール",
            "percent": 14.3,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 7.3,
            "source": 0
          },
          {
            "name": "ビサボロール",
            "percent": 4.1,
            "source": 0
          },
          {
            "name": "メチルオイゲノール",
            "percent": 3.7,
            "source": 0
          },
          {
            "name": "α-ベルガモテン",
            "percent": 2.5,
            "source": 0
          },
          {
            "name": "オイゲノール",
            "percent": 2.4,
            "source": 0
          },
          {
            "name": "ケイ皮酸メチル",
            "percent": 2.3,
            "source": 0
          },
          {
            "name": "酢酸ボルニル",
            "percent": 1.5,
            "source": 0
          },
          {
            "name": "γ-カジネン",
            "percent": 1.1,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Chenni M. et al. (2016) Molecules 21(1):113, Table 2（範囲はSayarer M. et al. 2023 Plants 12(7):1522, Table 1–2）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6273689/"
          }
        ],
        "note": "エジプト産の市販乾燥スイートバジル1分析で、リナロール＋エストラゴール型（欧州型）。型は産地・品種で大きく違い、同論文の表3ではマダガスカル産でエストラゴール74〜87%の例もある。乾燥葉の精油量は0.5%前後と少ない。"
      }
    },
    {
      "name": "ミント",
      "reading": "みんと",
      "latin": "Mentha spp.",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "冷涼感、青い葉、清涼な甘み",
      "role": "爽快なトップを作るが、強すぎると歯磨き粉に寄る。",
      "components": [
        "メントール",
        "メントン",
        "リモネン",
        "1,8-シネオール",
        "メントフラン",
        "ネオメントール"
      ],
      "literature": {
        "oil": {
          "percent": 1.5,
          "min": 0.8,
          "max": 3.3,
          "basis": "乾燥葉（範囲は欧州の市販乾燥葉8検体）",
          "source": 0
        },
        "composition": [
          {
            "name": "メントール",
            "percent": 45.34,
            "source": 1
          },
          {
            "name": "メントン",
            "percent": 16.04,
            "source": 1
          },
          {
            "name": "メントフラン",
            "percent": 8.91,
            "source": 1
          },
          {
            "name": "1,8-シネオール",
            "percent": 4.46,
            "source": 1
          },
          {
            "name": "ネオメントール",
            "percent": 4.24,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 2.22,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "EMA/HMPC/522409/2013 Assessment report on Mentha x piperita（範囲はOrav, Raal & Arak 2004 Proc. Estonian Acad. Sci. Chem. 53(4):174-181）",
            "url": "https://www.fitoterapia.net/archivos/202007/assessment-report-mentha-x-piperita-l-folium-aetheroleum-revision-1_en.pdf"
          },
          {
            "title": "Taherpour A.A. et al. (2017) J Anal Sci Technol 8:11（範囲はPh. Eur.規格）",
            "url": "https://d-nb.info/1134917732/34"
          }
        ],
        "note": "成分はイラン産乾燥地上部の1分析、範囲はPh. Eur.の油規格。市販乾燥葉は産地差が大きい。"
      }
    },
    {
      "name": "レモンバーム",
      "reading": "れもんばーむ",
      "latin": "Melissa officinalis",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "レモン、青いハーブ、蜂蜜",
      "role": "柑橘をハーブ側へつなぐ。",
      "components": [
        "シトラール",
        "シトロネラール",
        "ゲラニオール",
        "リナロール",
        "α-コパエン",
        "β-カリオフィレン",
        "β-クルクメン",
        "ノナナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.47,
          "min": 0.06,
          "max": 0.8,
          "basis": "アルジェリアの野生株の乾燥葉を水蒸留3時間（欧州薬局方の装置）。範囲はEMAの評価報告書の値",
          "source": 0
        },
        "composition": [
          {
            "name": "シトラール",
            "percent": 76.78,
            "source": 0
          },
          {
            "name": "シトロネラール",
            "percent": 6.42,
            "source": 0
          },
          {
            "name": "α-コパエン",
            "percent": 3.21,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 2.2,
            "source": 0
          },
          {
            "name": "β-クルクメン",
            "percent": 1.59,
            "source": 0
          },
          {
            "name": "ノナナール",
            "percent": 1.12,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 0.12,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.1,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Abdellatif F. et al. (2021) Plants 10(6):1066（範囲はEMA/HMPC/196746/2012 Assessment report on Melissa officinalis L., folium）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8229312/"
          }
        ],
        "note": "精油はとても少なく、ばらつきが大きい。ギリシャ産の市販乾燥品（茎・花を含む）をパイロット規模の水蒸気蒸留にかけると0.06%（Stini et al. 2024 Molecules 29:377）、ドイツで栽培した15系統の葉は1番刈り平均0.13%・2番刈り平均0.77%（Chizzola et al. 2018 Molecules 23:294, Table 2の1278・7650 µg/gから換算）で、代表値の0.47%（野生株）は多めの可能性がある。成分はシトラールが主だが、系統や刈り取り時期によってβ-カリオフィレンやカリオフィレンオキシドが多くなる。"
      }
    },
    {
      "name": "レモンバーベナ",
      "reading": "れもんばーべな",
      "latin": "Aloysia citriodora",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "澄んだレモン、青いハーブ",
      "role": "レモンピールより葉のニュアンスを持つ柑橘感。",
      "components": [
        "シトラール",
        "リモネン",
        "ゲラニオール",
        "ネロール",
        "スパツレノール",
        "カリオフィレンオキシド",
        "ar-クルクメン",
        "1,8-シネオール",
        "ネロリドール",
        "α-テルピネオール",
        "τ-カジノール"
      ],
      "literature": {
        "oil": {
          "percent": 1.05,
          "min": 0.6,
          "max": 1.1,
          "basis": "ポルトガルの専門業者の乾燥葉を粉砕し水蒸留3時間。範囲はイラン産の陰干し葉を0〜8か月保存したもの（乾燥重量あたり）",
          "source": 0
        },
        "composition": [
          {
            "name": "シトラール",
            "percent": 34.03,
            "source": 0
          },
          {
            "name": "スパツレノール",
            "percent": 8.71,
            "source": 0
          },
          {
            "name": "カリオフィレンオキシド",
            "percent": 5.6,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 5.38,
            "source": 0
          },
          {
            "name": "ar-クルクメン",
            "percent": 4.68,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 4.2,
            "source": 0
          },
          {
            "name": "ネロリドール",
            "percent": 1.76,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 1.74,
            "source": 0
          },
          {
            "name": "τ-カジノール",
            "percent": 1.65,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 0.98,
            "source": 0
          },
          {
            "name": "ネロール",
            "percent": 0.96,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Spréa R.M. et al. (2023) Molecules 28(11):4528（範囲はEbadi M.-T. et al. 2017 Food Sci Nutr 5(3):588-595, Table 1）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10254266/"
          }
        ],
        "note": "ポルトガルの市販乾燥葉1試料の分析で、シトラールは34%とやや少なめ（同論文が引くポルトガル産の文献値はゲラニアール26.8〜38.3%・ネラール20.8〜29.6%）で、スパツレノールなどセスキテルペン系が多い。精油量は保存で落ち、イラン産の乾燥葉は空気のまま8か月で1.1%→0.6%になった。欧州薬局方の下限は全葉0.3%・刻み0.2%（3.0/2.0 mL/kg、EMA/HMPC/376761/2019）で、シトラールをほとんど含まないケモタイプ（モロッコ・アルゼンチンの一部）もある。"
      }
    },
    {
      "name": "ローレル",
      "reading": "ろーれる",
      "latin": "Laurus nobilis",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "月桂樹、煮込み、ハーブ、樟脳",
      "role": "料理的なハーブ感と樹脂の厚みを足す。",
      "components": [
        "1,8-シネオール",
        "リナロール",
        "オイゲノール",
        "メチルオイゲノール",
        "テルピニルアセテート",
        "サビネン",
        "α-テルピネオール",
        "β-ピネン",
        "α-ピネン",
        "テルピネン-4-オール"
      ],
      "literature": {
        "oil": {
          "percent": 2.03,
          "min": 1.26,
          "max": 3.25,
          "basis": "モンテネグロ産の乾燥葉（9月採取）を水蒸留2時間。範囲は同じ論文の4季節とブルガリア産の風乾葉（水蒸留3時間）",
          "source": 0
        },
        "composition": [
          {
            "name": "1,8-シネオール",
            "percent": 51,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 14.1,
            "source": 0
          },
          {
            "name": "テルピニルアセテート",
            "percent": 7.7,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 6.7,
            "source": 0
          },
          {
            "name": "メチルオイゲノール",
            "percent": 4.5,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 3.6,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 2.8,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 2.6,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 1.4,
            "source": 0
          },
          {
            "name": "オイゲノール",
            "percent": 1.2,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Ilić Z.S. et al. (2026) Plants 15(6):923, Table 2（範囲はFidan H. et al. 2019 Molecules 24(4):804 を含む）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13030269/"
          }
        ],
        "note": "モンテネグロ産乾燥葉の秋採取の1分析。精油量は季節で1.26〜2.13%、ブルガリア産の風乾葉は3.25%（同論文によると文献では0.5〜4.3%）。リナロールはこの産地で13〜14%と多めで、ブルガリア産は4.9%。"
      }
    },
    {
      "name": "ディルシード",
      "reading": "でぃるしーど",
      "latin": "Anethum graveolens",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "ピクルス、甘いハーブ、キャラウェイ様",
      "role": "青く甘いハーブ感を古典的に見せる。",
      "components": [
        "カルボン",
        "リモネン",
        "α-フェランドレン",
        "ジヒドロカルボン"
      ],
      "literature": {
        "oil": {
          "percent": 4.63,
          "min": 2.16,
          "max": 4.81,
          "basis": "セルビアの露地栽培（遮光なし）の乾燥ディル種子を砕いて水蒸留120分",
          "source": 0
        },
        "composition": [
          {
            "name": "カルボン",
            "percent": 46.1,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 43.8,
            "source": 0
          },
          {
            "name": "ジヒドロカルボン",
            "percent": 6.8,
            "source": 0
          },
          {
            "name": "α-フェランドレン",
            "percent": 1.4,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Milenković L. et al. (2024) Plants 13(6):886（最小値は Gladikostić N. et al. (2023) Plants 12(4):745 のセルビア産ディル）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10974297/"
          }
        ],
        "note": "精油量・成分はセルビアの露地栽培1試料（範囲の最小は同じセルビア産の 2.16%、最大は遮光栽培の 4.81%）。カルボンとリモネンが主で、ジラピオールはこの試料では検出されず（Gladikostić 2023 のセルビア産でも痕跡）、エジプト産では 19.51% との報告がある（Milenković et al. 2024 の表6）。α-フェランドレンは葉（ディルウィード）に多く、種子では少ない。"
      }
    },
    {
      "name": "ラベンダー",
      "reading": "らべんだー",
      "latin": "Lavandula angustifolia",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "ラベンダー、石けん、清潔な花",
      "role": "フローラルに寄せる。入れすぎると香水的になる。",
      "components": [
        "リナロール",
        "リナリルアセテート",
        "カンファー",
        "テルピネン-4-オール",
        "β-オシメン",
        "酢酸ラバンジュリル",
        "α-テルピネオール"
      ],
      "literature": {
        "oil": {
          "percent": 2,
          "min": 1,
          "max": 3,
          "basis": "乾燥花（文献値の範囲。欧州薬局方の最低量は13 mL/kg）",
          "source": 0
        },
        "composition": [
          {
            "name": "リナリルアセテート",
            "percent": 31.46,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 23.13,
            "source": 1
          },
          {
            "name": "β-オシメン",
            "percent": 6.7,
            "source": 1
          },
          {
            "name": "酢酸ラバンジュリル",
            "percent": 4.21,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 3.95,
            "source": 1
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 2.28,
            "source": 1
          },
          {
            "name": "カンファー",
            "percent": 0.34,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "EMA/HMPC/143183/2010 Assessment report on Lavandula angustifolia",
            "url": "https://www.ema.europa.eu/en/documents/herbal-report/final-assessment-report-lavandula-angustifolia-miller-aetheroleum-and-lavandula-angustifolia-miller-flos_en.pdf"
          },
          {
            "title": "Todorova et al. (2023)",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9859693/"
          }
        ],
        "note": "成分はブルガリア産の風乾花穂1分析の値。精油量は乾燥花の文献値1〜3%（代表値の記載なし）。"
      }
    },
    {
      "name": "ローズ",
      "reading": "ろーず",
      "latin": "Rosa spp.",
      "group": "花・フローラル",
      "part": "花弁",
      "aroma": "バラ、蜂蜜、華やかな花",
      "role": "華やかなトップと柔らかい甘みを作る。",
      "components": [
        "ゲラニオール",
        "シトロネロール",
        "ネロール",
        "2-フェニルエタノール",
        "ローズオキサイド",
        "酢酸ゲラニル"
      ],
      "literature": {
        "oil": {
          "percent": 0.042,
          "min": 0.03,
          "max": 0.045,
          "basis": "生花（トルコ産）・水蒸留3時間",
          "source": 0
        },
        "composition": [
          {
            "name": "シトロネロール",
            "percent": 41.49,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 17.58,
            "source": 0
          },
          {
            "name": "ネロール",
            "percent": 6.45,
            "source": 0
          },
          {
            "name": "酢酸ゲラニル",
            "percent": 4.27,
            "source": 0
          },
          {
            "name": "2-フェニルエタノール",
            "percent": 1.16,
            "source": 0
          },
          {
            "name": "ローズオキサイド",
            "percent": 0.07,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Kara, Erbaş & Baydar (2017) Int J Sec Metabolite 4(3):423-428（範囲はKumar et al. 2023 Sci Rep 13:8101）",
            "url": "https://dergipark.org.tr/tr/download/article-file/399275"
          },
          {
            "title": "Dobreva et al. (2023) Molecules 28(3):1281, Table 1（別分析・cis体）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9919184/"
          }
        ],
        "note": "トルコ産の生花の水蒸留1分析。乾燥花弁の値は見つからなかった。ローズオキサイドは研究により未検出〜1.67%と幅が大きい。"
      }
    },
    {
      "name": "エルダーフラワー",
      "reading": "えるだーふらわー",
      "latin": "Sambucus nigra",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "白い花、マスカット、蜂蜜",
      "role": "白ワインやトニックに合う軽い花の甘み。",
      "components": [
        "リナロール",
        "ゲラニオール",
        "ネロリドール",
        "ヘキサナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.085,
          "min": 0.03,
          "max": 0.14,
          "basis": "花（レビューの文献値。乾燥か生かの記載なし）",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 3.27,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Nawirska-Olszańska et al. (2024) Foods 13(16):2560（レビュー）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11354468/"
          },
          {
            "title": "Hajdari et al. (2022) Scientific World Journal 2022:2594195（コソボ産乾燥花）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9126707/"
          }
        ],
        "note": "精油量はレビューの文献値（乾燥・生の記載なし）。乾燥花の水蒸留では痕跡量しか得られなかった研究もある。ゲラニオール・ネロリドール・ヘキサナールは不検出。"
      }
    },
    {
      "name": "カモミール",
      "reading": "かもみーる",
      "latin": "Matricaria chamomilla / Chamaemelum nobile",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "りんご、干し草、甘いハーブ",
      "role": "やさしい甘さとハーブ感を丸く出す。",
      "components": [
        "ビサボロール",
        "カマズレン",
        "ファルネセン",
        "リナロール",
        "ビサボロールオキサイド類"
      ],
      "literature": {
        "oil": {
          "percent": 0.29,
          "min": 0.07,
          "max": 0.67,
          "basis": "乾燥花（セルビア産）・水蒸留2時間（欧州薬局方の方法）",
          "source": 0
        },
        "composition": [
          {
            "name": "ビサボロールオキサイド類",
            "percent": 50.57,
            "source": 0
          },
          {
            "name": "ビサボロール",
            "percent": 6.17,
            "source": 0
          },
          {
            "name": "カマズレン",
            "percent": 5.54,
            "source": 0
          },
          {
            "name": "ファルネセン",
            "percent": 4.84,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Gladikostić et al. (2023) Plants 12(4):745（範囲はOrav, Raal & Arak 2010 Nat Prod Res 24(1)）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9968228/"
          }
        ],
        "note": "セルビア産の乾燥花1点の値。リナロールは検出されていない。主成分のビサボロールオキサイドA・Bは表の代表成分に入っていない。"
      }
    },
    {
      "name": "ハイビスカス",
      "reading": "はいびすかす",
      "latin": "Hibiscus sabdariffa",
      "group": "花・フローラル",
      "part": "萼",
      "aroma": "赤い酸、ベリー、軽い渋み",
      "role": "色と酸味、赤い果実の印象を作る。",
      "components": [
        "リンゴ酸",
        "酒石酸",
        "アントシアニン",
        "ヘキサヒドロファルネシルアセトン",
        "ノナナール",
        "オイゲノール",
        "ヘキサナール",
        "2-ペンチルフラン",
        "デカナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.11,
          "basis": "ローゼル（ハイビスカス）のがく（イラン産）を水蒸留。要旨に乾燥・生の記載なし（ふつう流通品は乾燥がく）",
          "source": 0
        },
        "composition": [
          {
            "name": "ヘキサヒドロファルネシルアセトン",
            "percent": 11.2,
            "source": null
          },
          {
            "name": "ノナナール",
            "percent": 5.8,
            "source": null
          },
          {
            "name": "オイゲノール",
            "percent": 4.2,
            "source": null
          },
          {
            "name": "ヘキサナール",
            "percent": 3.8,
            "source": null
          },
          {
            "name": "2-ペンチルフラン",
            "percent": 3.7,
            "source": null
          },
          {
            "name": "デカナール",
            "percent": 3.1,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Amin Amlashi H. et al. (2020) J Essent Oil Bear Plants 23(4):743-755（要旨）",
            "url": "https://www.tandfonline.com/doi/abs/10.1080/0972060X.2020.1832585"
          }
        ],
        "note": "香気成分の総量（mg/kg）の報告は見つからず、がくの水蒸留精油の収量（要旨の値）を使ったが、精油は89成分の混合で上位でも11%と特徴成分がなく、香りへの寄与は小さい。乾燥するとテルペン・アルデヒド・エステルが減りフルフラールなどのフラン類が増える（Juhari et al. 2021 Molecules 26:6260）。表の成分（リンゴ酸・酒石酸・アントシアニン）は揮発しない。"
      }
    },
    {
      "name": "桜花",
      "reading": "さくらばな",
      "latin": "Cerasus spp.",
      "group": "和ボタニカル",
      "part": "花",
      "aroma": "淡い花、桜餅、塩漬けのニュアンス",
      "role": "和のフローラル感を控えめに添える。",
      "components": [
        "クマリン",
        "ベンズアルデヒド",
        "リナロール"
      ]
    },
    {
      "name": "桜葉",
      "reading": "さくらば",
      "latin": "Cerasus spp.",
      "group": "和ボタニカル",
      "part": "葉",
      "aroma": "桜餅、干し草、杏仁",
      "role": "桜らしさは花より葉のクマリンで出やすい。",
      "components": [
        "クマリン",
        "ベンズアルデヒド",
        "ヘキサナール",
        "ベンジルアルコール"
      ],
      "literature": {
        "oil": {
          "percent": 0.127,
          "min": 0.0641,
          "max": 0.208,
          "label": "香気成分",
          "basis": "市販の塩漬け桜葉3製品（日本産2・うち1つは大島桜葉、中国産1）の葉を1枚ずつ（計9枚）水蒸気蒸留してHPLCでクマリンを定量。定量したのはクマリンだけ",
          "source": 0
        },
        "composition": [
          {
            "name": "クマリン",
            "percent": 70,
            "source": 1
          },
          {
            "name": "ベンジルアルコール",
            "percent": 20,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "鈴木裕司ほか (2013) 福島県衛生研究所年報 31:75-78「塩漬桜葉使用食品の保存料およびクマリンの一斉分析法の検討」, 表5（総平均 1.27 g/kg と範囲 0.641〜2.08 g/kg を％に換算）",
            "url": "https://www.pref.fukushima.lg.jp/uploaded/attachment/140776.pdf"
          },
          {
            "title": "Shibato J. et al. (2019) Plant Signal Behav 14(10):e1644594（五泉桜＝関山の葉の低温真空抽出液のGC-MS）（GCの全イオン量で70%以上）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6768248/"
          }
        ],
        "note": "総量は塩漬け葉（塩を含む重さ）のクマリンだけの定量値で、クマリンが揮発成分の約7割（五泉桜の葉の抽出液）なので、実際の総量はこれより3〜4割多く、この値×70%で計算するとクマリンは実測より少なめに出る。傷つけたソメイヨシノの生葉を水に1日浸すとクマリン29.2 mg・ベンジルアルコール15.0 mg/100 g（クマリン66%）で（Ito T., Kumazawa K. (1992) Biosci Biotech Biochem 56(10):1655（傷つけたソメイヨシノ生葉を水に1日浸した抽出物のGC定量））、生葉ではクマリンは配糖体として蓄えられ、塩漬けや乾燥の途中で遊離する。ベンズアルデヒドとヘキサナールは葉での定量値が見つからず null。"
      }
    },
    {
      "name": "金木犀",
      "reading": "きんもくせい",
      "latin": "Osmanthus fragrans",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "アプリコット、桃、濃い花",
      "role": "フルーティーなフローラルを強く出す。",
      "components": [
        "イオノン類",
        "リナロール",
        "ジャスミンラクトン",
        "β-カリオフィレン",
        "1,2-エポキシリナロール",
        "リナロールオキシド類",
        "メガスチグマトリエン類",
        "β-イオノール",
        "α-テルピネオール",
        "ゲラニオール",
        "α-イオノール",
        "δ-ウンデカラクトン"
      ],
      "literature": {
        "oil": {
          "percent": 0.15,
          "min": 0.15,
          "max": 0.19,
          "basis": "乾燥した金木犀の花（中国湖北省咸寧産・市販品）を水蒸留5時間（中国薬局方の方法）。最大は陰干しした金桂の花の水蒸気蒸留で0.19%（乾燥重量あたり）",
          "source": 0
        },
        "composition": [
          {
            "name": "1,2-エポキシリナロール",
            "percent": 15.32,
            "source": 0
          },
          {
            "name": "リナロールオキシド類",
            "percent": 11.01,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 11,
            "source": 0
          },
          {
            "name": "メガスチグマトリエン類",
            "percent": 8.58,
            "source": 0
          },
          {
            "name": "β-イオノール",
            "percent": 5.73,
            "source": 0
          },
          {
            "name": "イオノン類",
            "percent": 2.64,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 2.16,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 1.89,
            "source": 0
          },
          {
            "name": "α-イオノール",
            "percent": 1.37,
            "source": 0
          },
          {
            "name": "δ-ウンデカラクトン",
            "percent": 1.26,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Hu C.D. et al. (2010) Molecules 15(5):3683-3693（最大はWang et al. 2017 BMC Syst Biol 11:144）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6263257/"
          }
        ],
        "note": "乾燥花（市販の桂花）の水蒸留精油1分析で、生花の香料（アブソリュート）とは組成が違う。γ-デカラクトン・ジャスミンラクトン・β-カリオフィレンは検出されず、別の乾燥花（金桂）の精油ではγ-デカラクトン4.7%・β-イオノン7.3%（Wang 2017、同定の信頼性はやや低い）。リナロールオキシド類（cis 0.12%＋フラノイド型10.89%）とメガスチグマトリエン類（5異性体）は合計した。"
      }
    },
    {
      "name": "玉露",
      "reading": "ぎょくろ",
      "latin": "Camellia sinensis",
      "group": "和ボタニカル",
      "part": "茶葉",
      "aroma": "旨み、海苔、青み、深い茶",
      "role": "香りだけでなく旨みの印象を設計に入れる。",
      "components": [
        "テアニン",
        "フィトール",
        "ヘキサナール",
        "リナロール",
        "カフェイン",
        "2-ヒドロキシ-2,6,6-トリメチルシクロヘキサノン",
        "イオノン類",
        "5,6-エポキシ-β-イオノン",
        "リナロールオキシド類",
        "cis-2-ペンテノール",
        "1-ペンテン-3-オール",
        "ネロリドール"
      ],
      "literature": {
        "oil": {
          "percent": 0.018,
          "label": "香気成分",
          "basis": "緑茶の製茶（茶種の記載なし）をエーテル浸漬し、40℃で減圧水蒸気蒸留した精油の平均収量",
          "source": 0
        },
        "composition": [
          {
            "name": "2-ヒドロキシ-2,6,6-トリメチルシクロヘキサノン",
            "percent": 14.3,
            "source": 1
          },
          {
            "name": "イオノン類",
            "percent": 13.3,
            "source": 1
          },
          {
            "name": "5,6-エポキシ-β-イオノン",
            "percent": 7.7,
            "source": 1
          },
          {
            "name": "リナロールオキシド類",
            "percent": 5.5,
            "source": 1
          },
          {
            "name": "cis-2-ペンテノール",
            "percent": 5.1,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 4.8,
            "source": 1
          },
          {
            "name": "1-ペンテン-3-オール",
            "percent": 2.8,
            "source": 1
          },
          {
            "name": "ネロリドール",
            "percent": 2.6,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "山西貞 (1968) 茶の香気. 栄養と食糧 21(4):227-235（総説）",
            "url": "https://www.jstage.jst.go.jp/article/jsnfs1949/21/4/21_4_227/_article/-char/ja/"
          },
          {
            "title": "川上美智子・山西貞 (1981) かぶせ茶の香りの特徴. 日本農芸化学会誌 55(2):117-123, Table III（玉露の代わりに同じ被覆栽培のかぶせ茶の製茶精油。左がかぶせ茶、右が煎茶）",
            "url": "https://www.jstage.jst.go.jp/article/nogeikagaku1924/55/2/55_2_117/_article/-char/ja/"
          }
        ],
        "note": "玉露そのものの香気組成の定量表は見つからず、同じ被覆栽培のかぶせ茶（奥久慈産）の精油組成で代用した（ヘキサナール・フィトールは表になし）。覆い香の主役ジメチルスルフィドは揮発しやすく精油の分析には入らないが、玉露の重要な香気成分であることはSPME/GC-Oで確かめられている（水上 2020 茶業研究報告130:39）。精油量は緑茶一般の値で、同じ方法で比べるとかぶせ茶の精油量は煎茶の約3倍（1.75対0.57 mg/100 g）。"
      }
    },
    {
      "name": "煎茶",
      "reading": "せんちゃ",
      "latin": "Camellia sinensis",
      "group": "和ボタニカル",
      "part": "茶葉",
      "aroma": "青い茶、渋み、草、軽い花",
      "role": "玉露より軽く、爽やかな茶葉感を足す。",
      "components": [
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "リナロール",
        "フィトール",
        "カフェイン",
        "インドール"
      ],
      "literature": {
        "oil": {
          "percent": 0.01,
          "min": 0.01,
          "max": 0.05,
          "label": "香気成分",
          "basis": "茶葉に含まれる香気成分の総量（茶に精油はほとんどない）",
          "source": 0
        },
        "composition": [
          {
            "name": "インドール",
            "percent": 31.52,
            "source": 1
          },
          {
            "name": "cis-3-ヘキセノール",
            "percent": 1.75,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.61,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Wang J. et al. (2022) Foods 11(19):3016（範囲はXu J. et al. 2022 Foods 12(1):146）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9563017/"
          },
          {
            "title": "Hattori S. et al. (2005) Food Sci. Technol. Res. 11(1):82-86, Table 2（煎茶7産地の揮発画分、和束茶）",
            "url": "https://www.jstage.jst.go.jp/article/fstr/11/1/11_1_82/_pdf"
          }
        ],
        "note": "茶に精油はほとんどなく、香気成分は乾燥重量の0.01〜0.05%。成分%は煎茶浸出液の揮発画分の値。ヘキサナールは痕跡量、フィトールは値なし。"
      }
    },
    {
      "name": "抹茶",
      "reading": "まっちゃ",
      "latin": "Camellia sinensis",
      "group": "和ボタニカル",
      "part": "茶葉粉末",
      "aroma": "濃い茶、旨み、青み、渋み",
      "role": "色と旨みを強く出すが、抽出設計に注意。",
      "components": [
        "テアニン",
        "フィトール",
        "ヘキサナール",
        "カフェイン",
        "タンニン"
      ]
    },
    {
      "name": "赤紫蘇",
      "reading": "あかじそ",
      "latin": "Perilla frutescens",
      "group": "和ボタニカル",
      "part": "葉",
      "aroma": "紫蘇、梅、赤い葉、ハーブ",
      "role": "和の赤いハーブ感と酸味の連想を作る。",
      "components": [
        "ペリルアルデヒド",
        "リモネン",
        "リナロール",
        "アントシアニン",
        "シソオール",
        "β-カリオフィレン",
        "α-ファルネセン",
        "ペリルアルコール",
        "1-オクテン-3-オール"
      ],
      "literature": {
        "oil": {
          "percent": 0.075,
          "min": 0.04,
          "max": 0.11,
          "basis": "生の地上部（赤ジソ、兵庫県・大阪府産、葉28.5%・茎31.5%・花序40%、結実期）を水蒸気蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "ペリルアルデヒド",
            "percent": 50.45,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 11.95,
            "source": 0
          },
          {
            "name": "シソオール",
            "percent": 8,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 7.9,
            "source": 0
          },
          {
            "name": "α-ファルネセン",
            "percent": 5.55,
            "source": 0
          },
          {
            "name": "ペリルアルコール",
            "percent": 2.55,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 2.3,
            "source": 0
          },
          {
            "name": "1-オクテン-3-オール",
            "percent": 1.15,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "藤田安二・藤田真一・葉山良子 (1970) 日本農芸化学会誌 44(9):428-432「各地産植物精油に関する研究(第24報) シソおよびアオジソの精油」",
            "url": "https://www.jstage.jst.go.jp/article/nogeikagaku1924/44/9/44_9_428/_article/-char/ja/"
          }
        ],
        "note": "兵庫県産のシソ（赤ジソ）2試料の平均を計算した値で、試料は結実期の地上部全体（葉は約3割）。市販のチリメン赤ジソ4品種は生葉のペリルアルデヒドが0.50 µL/g以下と弱く、和歌山の在来アカジソ（1.02〜1.71 µL/g）の半分以下という報告がある（堀端・松川 2017）。アントシアニンは色素で揮発しないため null。"
      }
    },
    {
      "name": "青紫蘇",
      "reading": "あおじそ",
      "latin": "Perilla frutescens",
      "group": "和ボタニカル",
      "part": "葉",
      "aroma": "青い紫蘇、清涼感、ハーブ",
      "role": "和食に合う青いトップノートを作る。",
      "components": [
        "ペリルアルデヒド",
        "リモネン",
        "β-カリオフィレン",
        "リナロール",
        "α-ファルネセン",
        "シソオール",
        "ペリルアルコール",
        "β-ピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.145,
          "min": 0.04,
          "max": 0.25,
          "basis": "生の地上部（葉・茎・花穂、京都市・埼玉県産の青ジソ、開花〜結実期）を水蒸気蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "ペリルアルデヒド",
            "percent": 42.73,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 25.32,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 7.2,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 4.88,
            "source": 0
          },
          {
            "name": "α-ファルネセン",
            "percent": 4.23,
            "source": 0
          },
          {
            "name": "シソオール",
            "percent": 3.72,
            "source": 0
          },
          {
            "name": "ペリルアルコール",
            "percent": 2.18,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 1.03,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "藤田安二・藤田真一・葉山良子 (1970) 日本農芸化学会誌 44(9):428-432「各地産植物精油に関する研究(第24報) シソおよびアオジソの精油」",
            "url": "https://www.jstage.jst.go.jp/article/nogeikagaku1924/44/9/44_9_428/_article/-char/ja/"
          }
        ],
        "note": "精油量・組成は開花〜結実期の地上部全体（葉・茎・花穂）を生のまま水蒸気蒸留した値で、組成は埼玉・京都の栽培品と北海道の市販油の6試料の平均を計算した。大葉として出荷される若い葉だけでは主要7成分中のペリルアルデヒドが52〜70%とさらに高く（渡辺ら 2000）、葉身の収油率は生葉の0.02〜0.25%（森貞・吉田 1973）。生葉で使うことが多いとして生の値を採用した（乾燥すると香気は減る）。"
      }
    },
    {
      "name": "笹の葉",
      "reading": "ささのは",
      "latin": "Sasa spp.",
      "group": "和ボタニカル",
      "part": "葉",
      "aroma": "青葉、竹、軽い茶様",
      "role": "和のグリーン感を控えめに足す。",
      "components": [
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "フィトール",
        "シクロヘキサノール",
        "1-ヘキサノール",
        "1-ペンテン-3-オール",
        "trans-2-ヘキセナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.068,
          "basis": "クマザサの生葉（築地市場）を減圧水蒸気蒸留4時間しエーテル抽出した揮発濃縮物の総量（精油の収率ではない）",
          "source": 0
        },
        "composition": [
          {
            "name": "cis-3-ヘキセノール",
            "percent": 3.55,
            "source": 0
          },
          {
            "name": "シクロヘキサノール",
            "percent": 2.06,
            "source": 0
          },
          {
            "name": "1-ヘキサノール",
            "percent": 1.73,
            "source": 0
          },
          {
            "name": "1-ペンテン-3-オール",
            "percent": 1.58,
            "source": 0
          },
          {
            "name": "trans-2-ヘキセナール",
            "percent": 1.54,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Nguyen V.C. & Kato H. (1982) Agric Biol Chem 46(11):2795-2801, Table II（0.680 g/kg を%に換算）",
            "url": "https://www.jstage.jst.go.jp/article/bbb1961/46/11/46_11_2795/_article/-char/ja/"
          }
        ],
        "note": "笹に精油はほとんどなく、精油量は生葉の揮発濃縮物の総量、成分%は中性画分（全体の48.0%）の面積%を全体あたりに換算した値（表は画像から転記）。ヘキサナールは蒸留液では痕跡（ヘッドスペースでは3.3%、trans-2-ヘキセナール23.9%、cis-3-ヘキセノール5.2%）、フィトールは検出されず、甘い香りの4-オクタノリドとβ-イオノンは各0.1%、香りの記述がないシクロペンタノール（中性画分4.5%）は除外した。乾燥すると低沸点の青葉の香りがほとんど失われる（同論文）ため、乾燥笹では青い成分がこれよりかなり少ない。"
      }
    },
    {
      "name": "木の芽",
      "reading": "きのめ",
      "latin": "Zanthoxylum piperitum",
      "group": "和ボタニカル",
      "part": "若葉",
      "aroma": "山椒の若葉、青い柑橘、清涼感",
      "role": "山椒より柔らかく、青い和ハーブ感を作る。",
      "components": [
        "リモネン",
        "シトロネラール",
        "ヘキサナール",
        "リナロール",
        "β-フェランドレン",
        "α-ピネン",
        "イソプレゴール",
        "β-ピネン",
        "α-テルピネオール",
        "シトラール"
      ],
      "literature": {
        "oil": {
          "percent": 0.12,
          "label": "香気成分",
          "basis": "福岡県24地域の山椒75本の生の若葉（1993年5月）をメタノール抽出・カラム濃縮し内標準法で定量した香気成分の総量（平均1200±670 ppm）",
          "source": 0
        },
        "composition": [
          {
            "name": "β-フェランドレン",
            "percent": 28.21,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 23.27,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 11.99,
            "source": 0
          },
          {
            "name": "イソプレゴール",
            "percent": 7.05,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 5.5,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 5.22,
            "source": 0
          },
          {
            "name": "シトラール",
            "percent": 3.31,
            "source": 0
          },
          {
            "name": "シトロネラール",
            "percent": 3.1,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.42,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "呉垠・下田満哉・筬島豊 (1996) 日本農芸化学会誌 70(9):1001-1005（1200 ppmを%に換算）",
            "url": "https://www.jstage.jst.go.jp/article/nogeikagaku1924/70/9/70_9_1001/_article/-char/ja/"
          }
        ],
        "note": "精油量は生の若葉の香気成分の総量で試料差が大きく（1200±670 ppm）、成分%は表の若葉の平均濃度をその合計1418 ppmで割った相対値（各成分の平均の合計が総量の平均1200 ppmと一致しないため、表は画像から転記）。ヘキサナールは報告されておらず、シトラールはゲラニアール37 ppm＋ネラール10 ppmの合計。夏の葉を乾燥した場合の葉油含量は乾葉100 gあたり0.6 mL（林野庁 2018 表4）。"
      }
    },
    {
      "name": "赤松",
      "reading": "あかまつ",
      "latin": "Pinus densiflora",
      "group": "骨格・樹脂",
      "part": "葉・枝",
      "aroma": "松葉、樹脂、森、ドライ",
      "role": "ジュニパーの松感を和の針葉樹側へ広げる。",
      "components": [
        "α-ピネン",
        "β-ピネン",
        "リモネン",
        "β-ミルセン",
        "カンフェン",
        "β-ツジェン",
        "酢酸ボルニル",
        "β-カリオフィレン",
        "テルピノレン",
        "δ-カジネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.304,
          "basis": "アカマツの針葉（韓国）を水蒸気蒸留。生葉か乾燥葉かは要旨に記載なし",
          "source": 0
        },
        "composition": [
          {
            "name": "β-ツジェン",
            "percent": 19.33,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 14.44,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 12.19,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 9.82,
            "source": 1
          },
          {
            "name": "酢酸ボルニル",
            "percent": 5.67,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 4.34,
            "source": 1
          },
          {
            "name": "カンフェン",
            "percent": 3.86,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 3.26,
            "source": 1
          },
          {
            "name": "テルピノレン",
            "percent": 2.87,
            "source": 1
          },
          {
            "name": "δ-カジネン",
            "percent": 1.26,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Park J.S. & Lee G.H. (2011) J Sci Food Agric 91(4):703-709（要旨）",
            "url": "https://pubmed.ncbi.nlm.nih.gov/21213230/"
          },
          {
            "title": "Hong E.J. et al. (2004) Biol Pharm Bull 27(6):863-866, Table 2（アカマツ針葉）",
            "url": "https://www.jstage.jst.go.jp/article/bpb/27/6/27_6_863/_article"
          }
        ],
        "note": "成分は韓国京畿道の生の針葉を水蒸気蒸留した1分析（検量線で定量）で、主成分とされたβ-ツジェン（19.33%）は他の報告ではまれで同定には注意が必要。別の韓国産アカマツ葉油ではカンフェン22.38%・α-ピネン20.58%・リモネン20.16%・酢酸ボルニル9.79%（Jo ら 2012 Int J Oncol）と差が大きい。日本産アカマツの葉油の収率・組成は見つからなかった。"
      }
    },
    {
      "name": "ヒノキ",
      "reading": "ひのき",
      "latin": "Chamaecyparis obtusa",
      "group": "骨格・樹脂",
      "part": "木部・葉",
      "aroma": "ヒノキ風呂、木材、清潔感",
      "role": "和のウッディ感。清潔で落ち着いた印象を作る。",
      "components": [
        "α-ピネン",
        "ヒノキチオール",
        "セドロール",
        "リモネン",
        "ボルネオール",
        "δ-カジネン",
        "τ-ムウロロール",
        "α-カジノール",
        "α-テルピネオール",
        "α-ムウロレン",
        "τ-カジノール"
      ],
      "literature": {
        "oil": {
          "percent": 2,
          "min": 1,
          "max": 3,
          "basis": "ヒノキ材（乾材）100 gあたりの精油含量（林野庁調査の主な樹種の材油含量の表）",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 28.24,
            "source": 1
          },
          {
            "name": "δ-カジネン",
            "percent": 20.3,
            "source": 1
          },
          {
            "name": "τ-ムウロロール",
            "percent": 8.89,
            "source": 1
          },
          {
            "name": "α-カジノール",
            "percent": 5.71,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 5.64,
            "source": 1
          },
          {
            "name": "α-ムウロレン",
            "percent": 5.14,
            "source": 1
          },
          {
            "name": "τ-カジノール",
            "percent": 4.7,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 0.83,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "林野庁 (2018) 平成29年度 日本の林産物を活用した香りビジネス展開に関する基礎調査業務報告書, 表5",
            "url": "https://nittokusin.jp/nittokusin/wp-content/uploads/2018/08/8057ab07ffd6f505f04eee94108fa9f4.pdf"
          },
          {
            "title": "Takemoto H. et al. (2025) BPB Reports 8(6):171-175, Table 1（国産の市販ヒノキ材油9製品の平均を計算）",
            "url": "https://www.jstage.jst.go.jp/article/bpbreports/8/6/8_171/_html/-char/en"
          }
        ],
        "note": "材の精油を採用（ジンではヒノキ材チップを使うことが多い）し、成分は国産の市販ヒノキ材油9製品（吉野・木曽・四万十・岡山など）の平均で、α-ピネン9.5〜50.9%・δ-カジネン11.6〜30.1%と製品差が大きい。ヒノキチオールは日本のヒノキにはほとんど含まれず（Inamori ら 2006 Biocontrol Sci）、セドロール・ボルネオールも材油からは検出されていない（同じ論文の葉油はサビネン21.2%・α-テルピニルアセテート18.1%・酢酸ボルニル11.7%・セドロール0.6%で材油と大きく違う）。精油量は乾材あたりの含量で、実際の蒸留収率はこれより低くなりうる。"
      }
    },
    {
      "name": "クロモジ",
      "reading": "くろもじ",
      "latin": "Lindera umbellata",
      "group": "和ボタニカル",
      "part": "枝・葉",
      "aroma": "和菓子楊枝、木質、シトラス、花",
      "role": "和のウッディとフローラルを同時に出しやすい。",
      "components": [
        "リナロール",
        "ゲラニオール",
        "1,8-シネオール",
        "α-ピネン",
        "酢酸ゲラニル",
        "リモネン",
        "ジヒドロカルボン",
        "テルピネン-4-オール",
        "α-テルピネオール",
        "カンフェン"
      ],
      "literature": {
        "oil": {
          "percent": 0.275,
          "min": 0.24,
          "max": 0.31,
          "basis": "福島県の自生クロモジ5個体の生の葉と細枝（径5 mm未満）を採取3日以内に水蒸気蒸留3時間（日本薬局方の精油定量法）",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 26.83,
            "source": 1
          },
          {
            "name": "1,8-シネオール",
            "percent": 16.75,
            "source": 1
          },
          {
            "name": "酢酸ゲラニル",
            "percent": 10.45,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 4.81,
            "source": 1
          },
          {
            "name": "ゲラニオール",
            "percent": 4.51,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 3.87,
            "source": 1
          },
          {
            "name": "ジヒドロカルボン",
            "percent": 3.72,
            "source": 1
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 3.71,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 3.35,
            "source": 1
          },
          {
            "name": "カンフェン",
            "percent": 2.53,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "大高千怜ほか (2024) 東北森林科学会誌 29(1):9-13",
            "url": "https://www.jstage.jst.go.jp/article/tjfs/29/1/29_9/_article/-char/ja/"
          },
          {
            "title": "Sakurai K. et al. (2021) J Oleo Sci 70(11):1661-1668, Table 1（Futo＝この研究の試料。範囲は同表の静岡・大阪のクロモジ既報値）",
            "url": "https://www.jstage.jst.go.jp/article/jos/70/11/70_ess20236/_article/-char/ja/"
          }
        ],
        "note": "成分は静岡県伊東市富戸産の市販クロモジ精油1試料（2016年製、部位の記載なし）で、リナロールの光学異性体比は(R):(S)=67.8:32.2、ジヒドロカルボンはtrans 1.91%＋cis 1.81%の合計。精油量は生の葉・細枝の値で、幹の木部は0.01%とごく少なく、乾燥枝の値は見つからなかった。青森のオオバクロモジはリナロール42.8%・1,8-シネオール13.7%と組成が違う。"
      }
    },
    {
      "name": "昆布",
      "reading": "こんぶ",
      "latin": "Saccharina japonica",
      "group": "海・ミネラル",
      "part": "海藻",
      "aroma": "旨み、海、磯、出汁",
      "role": "香りより旨みとミネラル感の設計に使う。",
      "components": [
        "グルタミン酸",
        "ヨード様成分",
        "ジメチルスルフィド",
        "trans-2-ノネン-1-オール",
        "1-オクテン-3-オール",
        "trans-2-ノネナール",
        "trans-2-デセナール",
        "trans-2-オクテン-1-オール",
        "3-オクタノン"
      ],
      "literature": {
        "oil": {
          "percent": 0.002635,
          "min": 0.000848,
          "max": 0.002635,
          "label": "香気成分",
          "basis": "北海道産の天日乾燥した天然昆布（1999年産、約1年倉庫保管）。マコンブを水とともに減圧連続蒸留抽出（65℃・2時間）し、GC-MSで定量（内部標準シクロヘキサノール、感度補正なし）した53成分の合計。範囲はミツイシコンブ（8482.1 µg/kg）〜マコンブ（26352.0 µg/kg）",
          "source": 0
        },
        "composition": [
          {
            "name": "trans-2-ノネン-1-オール",
            "percent": 21.45,
            "source": 0
          },
          {
            "name": "1-オクテン-3-オール",
            "percent": 14.91,
            "source": 0
          },
          {
            "name": "trans-2-ノネナール",
            "percent": 12.5,
            "source": 0
          },
          {
            "name": "trans-2-デセナール",
            "percent": 3.56,
            "source": 0
          },
          {
            "name": "trans-2-オクテン-1-オール",
            "percent": 2.35,
            "source": 0
          },
          {
            "name": "3-オクタノン",
            "percent": 1.67,
            "source": 0
          },
          {
            "name": "ヨード様成分",
            "percent": 0.36,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "高橋英史・隅谷栄伸・稲田有美子・森大蔵 (2002) 日本食品科学工学会誌 49(4):228-237, Table 2（Total 行のマコンブ 26352.0・リシリコンブ 15599.6・ミツイシコンブ 8482.1 µg/kg を％に換算）",
            "url": "https://www.jstage.jst.go.jp/article/nskkk1995/49/4/49_4_228/_article/-char/ja/"
          }
        ],
        "note": "北海道産の天日乾燥昆布を水とともに減圧蒸留抽出した値で、感度補正なしの内部標準換算（半定量）。総量にはペンタデカン、長鎖アルコール、トリクロロメタン、ジエチレングリコールモノエチルエーテル（883.4 µg/kg）など香りにほとんど効かない成分も含む。ヨード様成分には、同論文が昆布の香りに寄与すると推定したヨウ化アルキルの合計を入れた（1-ヨードオクタンは「乾燥コンブと海苔をあわせたような香調」）。ジメチルスルフィドは乾燥昆布の捕集（DHS）でも減圧SDEでも報告がなく、グルタミン酸は揮発しないので null。"
      }
    },
    {
      "name": "海藻",
      "reading": "かいそう",
      "latin": "Seaweed",
      "group": "海・ミネラル",
      "part": "藻体",
      "aroma": "磯、塩気、海風、青み",
      "role": "コースタルジンの海っぽさを作る。",
      "components": [
        "ヨード様成分",
        "ジメチルスルフィド",
        "ヘキサナール",
        "トリデカナール",
        "イオノン類",
        "ペンタデカナール",
        "フィトール",
        "ノナナール",
        "ドデカナール",
        "(E,E)-2,4-デカジエナール"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null
        },
        "composition": [
          {
            "name": "トリデカナール",
            "percent": 18.51,
            "source": null
          },
          {
            "name": "イオノン類",
            "percent": 6.59,
            "source": null
          },
          {
            "name": "ペンタデカナール",
            "percent": 4.09,
            "source": null
          },
          {
            "name": "フィトール",
            "percent": 4.06,
            "source": null
          },
          {
            "name": "ノナナール",
            "percent": 3.48,
            "source": null
          },
          {
            "name": "ドデカナール",
            "percent": 3.16,
            "source": null
          },
          {
            "name": "(E,E)-2,4-デカジエナール",
            "percent": 2.23,
            "source": null
          }
        ],
        "sources": [],
        "note": "ジンで使うヒバマタ（Fucus vesiculosus）の香気成分の資料は見つからず、同属のアドリア海固有種 Fucus virsoides を風乾して水蒸留した揮発油の相対%（GC-FID/MS、3回の平均）で代用した（Jerković I. et al. 2021 Mar Drugs 19(5):235, Table 2 の F 列、https://pmc.ncbi.nlm.nih.gov/articles/PMC8145248/。イオノン類はβ-イオノン5.80%＋α-イオノン0.79%）。香気成分の量を示した資料はなく oil は null。ヨウ素化合物・ジメチルスルフィド・ヘキサナールはこの分析で検出されず（(E)-2-ヘキセナールは1.13%）、残りの多くは炭化水素（ペンタデカン、ペンタデセン類）、脂肪酸、リノレニルアルコール（5.08%）で other_major から除いた。"
      }
    },
    {
      "name": "きゅうり",
      "reading": "きゅうり",
      "latin": "Cucumis sativus",
      "group": "果実・野菜",
      "part": "果実",
      "aroma": "瑞々しい青さ、瓜、切りたて",
      "role": "軽いグリーン感と水分の印象。ヘンドリックス的な連想に直結。",
      "components": [
        "ノナジエナール",
        "cis-3-ヘキセノール",
        "ヘキサナール",
        "trans-2-ノネナール",
        "trans-6-ノネナール",
        "ノナナール",
        "(E,E)-2,4-ヘプタジエナール",
        "3,5-オクタジエン-2-オン",
        "trans-2-ヘキセナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.000124,
          "min": 0.0000771,
          "max": 0.00018,
          "label": "香気成分",
          "basis": "上海の温室で育てた29品種の生の果実（中央部分、開花10〜12日後に収穫）。SPME-GC-MS、2-オクタノール換算",
          "source": 0
        },
        "composition": [
          {
            "name": "ノナジエナール",
            "percent": 24.48,
            "source": 0
          },
          {
            "name": "trans-2-ノネナール",
            "percent": 16.24,
            "source": 0
          },
          {
            "name": "trans-6-ノネナール",
            "percent": 6.65,
            "source": 0
          },
          {
            "name": "ノナナール",
            "percent": 4.88,
            "source": 0
          },
          {
            "name": "(E,E)-2,4-ヘプタジエナール",
            "percent": 4.87,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 4.49,
            "source": 0
          },
          {
            "name": "3,5-オクタジエン-2-オン",
            "percent": 4.28,
            "source": 0
          },
          {
            "name": "trans-2-ヘキセナール",
            "percent": 4.02,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Lu P. et al. (2025) Foods 14(22):3878（Table 3 の29品種の合計の平均 1236.0 μg/kg を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12651018/"
          }
        ],
        "note": "29品種の平均（2-オクタノール換算の半定量）。表の cis-3-ヘキセノールはこの分析で報告がなく（trans体のみ平均1.53 μg/kg）null にした。"
      }
    },
    {
      "name": "オリーブ",
      "reading": "おりーぶ",
      "latin": "Olea europaea",
      "group": "果実・野菜",
      "part": "果実・葉",
      "aroma": "青い果実、油脂、葉、塩気",
      "role": "地中海系のセイボリーな厚みを作る。",
      "components": [
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "オレウロペイン",
        "リナロール"
      ]
    },
    {
      "name": "アーモンド",
      "reading": "あーもんど",
      "latin": "Prunus dulcis",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "杏仁、ナッツ、甘い核果",
      "role": "クラシックジンに丸いナッティ感を与える。",
      "components": [
        "ベンズアルデヒド",
        "フルフラール",
        "リナロール"
      ],
      "literature": {
        "oil": {
          "percent": 1,
          "basis": "ビターアーモンドの脂肪油を搾ったかす・水蒸気蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "ベンズアルデヒド",
            "percent": 98,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Shaath N.A. & Benveniste B. (1991) Natural oil of bitter almond. Perfumer & Flavorist 16(6):17-24",
            "url": "https://img.perfumerflavorist.com/files/base/allured/all/document/2016/03/pf.9157.pdf"
          }
        ],
        "note": "ビターアーモンドの値。スイートアーモンドのベンズアルデヒドは核1gあたり0.17μgとごく微量（ビターは37,372μg）。フルフラールは焙煎でできる成分。"
      }
    },
    {
      "name": "カカオニブ",
      "reading": "かかおにぶ",
      "latin": "Theobroma cacao",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "カカオ、苦味、焙煎、ナッツ",
      "role": "ビターで大人っぽい厚みを足す。",
      "components": [
        "ピラジン類",
        "テオブロミン",
        "マルトール",
        "フルフラール",
        "2-フェニルエタノール",
        "イソバレルアルデヒド"
      ],
      "literature": {
        "oil": {
          "percent": 0.006445,
          "min": 0.00518,
          "max": 0.00771,
          "label": "香気成分",
          "basis": "メキシコ・タバスコ州で同時に発酵し温室で6日間天日乾燥したクリオロ（Carmelo）とフォラステロ（Huayaquil）の豆を120℃30分焙煎して粉砕し、HS-SPME-GC-MSで定量（メタノール溶液の検量線による外部標準法、mg/kg）。酸を除く定量成分の合計の2試料の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "ピラジン類",
            "percent": 80.84,
            "source": 0
          },
          {
            "name": "2-フェニルエタノール",
            "percent": 11.64,
            "source": 0
          },
          {
            "name": "イソバレルアルデヒド",
            "percent": 4.11,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 1.52,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Velásquez-Reyes D. et al. (2023) Heliyon 9(4):e15129, Table 3（焙煎豆「Roasting」列の酸以外の定量値を合計：クリオロ 51.8・フォラステロ 77.1 mg/kg、平均 64.45 mg/kg を計算。Trace は0として扱った）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10119589/"
          },
          {
            "title": "Lin L.-Y. et al. (2022) Molecules 27(10):3058, Table 10（台湾産の赤・黄カカオの焙煎豆 rRC・rYC。表の行の値から酸を除く合計 404.49・896.11 µg/g を計算し、フルフラールの平均量を合計の平均で割った。主資料で検出されなかったため補った）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9145787/"
          }
        ],
        "note": "メキシコ・タバスコ州産クリオロ・フォラステロの焙煎豆（殻の有無の記載なし）2試料のHS-SPME定量で、酸（酢酸30.1〜56.1、イソ酪酸7.0、プロピオン酸1.2 mg/kg）は合計から除いた（含めると90.1〜133.2 mg/kg）。同じ豆の殻を除いて磨砕したカカオリカーでは酸以外が141.9〜154.2 mg/kgとほぼ2倍で、どちらもテトラメチルピラジン（40〜64 mg/kg）が量の大半を占める。フルフラールは主資料で検出されず台湾産焙煎豆（内部標準なしの別法）の割合で補い、マルトールは報告がなくnull、テオブロミンは揮発しないためnull。"
      }
    },
    {
      "name": "コーヒー豆",
      "reading": "こーひーまめ",
      "latin": "Coffea spp.",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "焙煎、苦味、焦げ、ナッツ",
      "role": "ビター系・食後酒寄りの設計に向く。",
      "components": [
        "ピラジン類",
        "カフェイン",
        "フルフラール",
        "酢酸",
        "5-メチルフルフラール",
        "酢酸フルフリル",
        "フルフリルアルコール",
        "2-アセチルフラン",
        "1-メチル-2-ホルミルピロール",
        "マルトール"
      ],
      "literature": {
        "oil": {
          "percent": 0.1,
          "label": "香気成分",
          "basis": "焙煎コーヒーの揮発成分の総量の概数（約1 g/kg）。成分の割合は同じ論文の単一産地アラビカ10試料（浅煎り〜深煎り）のHS-SPME-GC-MS面積%",
          "source": 0
        },
        "composition": [
          {
            "name": "ピラジン類",
            "percent": 23.03,
            "source": 0
          },
          {
            "name": "5-メチルフルフラール",
            "percent": 17.02,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 6.18,
            "source": 0
          },
          {
            "name": "酢酸フルフリル",
            "percent": 4.7,
            "source": 0
          },
          {
            "name": "フルフリルアルコール",
            "percent": 4.09,
            "source": 0
          },
          {
            "name": "2-アセチルフラン",
            "percent": 3.52,
            "source": 0
          },
          {
            "name": "1-メチル-2-ホルミルピロール",
            "percent": 2.82,
            "source": 0
          },
          {
            "name": "マルトール",
            "percent": 2.73,
            "source": 0
          },
          {
            "name": "酢酸",
            "percent": 0.61,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Zakidou P. et al. (2021) Molecules 26(15):4609、1. Introduction（1 g/kg = 0.1% に換算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8346979/"
          }
        ],
        "note": "総量は論文の序論にある概数（約1 g/kg）で実測の合計ではなく、成分の割合は10産地のアラビカのHS-SPME面積%の平均（酸は面積の1.3〜3.7%で割合に含む）。安定同位体希釈法で測った市販の挽いたコーヒーのアルキルピラジン12種の合計は82.1〜211.6 mg/kg（Pickard et al. 2013 J Agric Food Chem 61:6274 の要旨）、SAFE抽出で香りの強い46成分を定量した中国の研究では合計140〜234 mg/kg（フルフラール4.3〜16.7 mg/kg；Chen et al. 2025 Foods 14:3192, Table 4）。カフェインは揮発しないためnull。"
      }
    },
    {
      "name": "バニラ",
      "reading": "ばにら",
      "latin": "Vanilla planifolia",
      "group": "甘味・樽香",
      "part": "莢",
      "aroma": "バニラ、クリーム、甘い樽香",
      "role": "甘い香りの丸みを出す。樽熟成ジンとも相性がよい。",
      "components": [
        "バニリン",
        "クマリン",
        "フルフラール"
      ],
      "literature": {
        "oil": {
          "percent": 2,
          "min": 1.5,
          "max": 3,
          "label": "バニリン",
          "basis": "キュアリング済みのさやに含まれるバニリン（バニラに精油はない）",
          "source": 0
        },
        "composition": [
          {
            "name": "バニリン",
            "percent": 100,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Xu L. et al. (2024) Front Nutr 10:1279552（範囲はGu F. et al. 2015 Molecules 20(10):18422-18436）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10875998/"
          }
        ],
        "note": "バニラに精油はなく、精油量の欄はさや中のバニリン含量。水蒸気蒸留ではバニリンがほとんど抽出されなかった報告がある。クマリンは天然バニラの成分として報告されない。"
      }
    },
    {
      "name": "ホップ",
      "reading": "ほっぷ",
      "latin": "Humulus lupulus",
      "group": "ハーブ・グリーン",
      "part": "毬花",
      "aroma": "ビール、青い苦味、柑橘、樹脂",
      "role": "苦味とクラフトビール的な香りを加える。",
      "components": [
        "β-ミルセン",
        "α-フムレン",
        "β-カリオフィレン",
        "リナロール",
        "ゲラニオール",
        "ファルネセン",
        "イソ酪酸2-メチルブチル",
        "4-デセン酸メチル",
        "β-カジネン",
        "フムレンエポキシドII",
        "ゲルマクレンD"
      ],
      "literature": {
        "oil": {
          "percent": 1,
          "min": 0.6,
          "max": 1.5,
          "basis": "ポーランド産6品種の市販ビール用ホップペレット（乾燥毬花）を水蒸留2時間。代表値は6品種の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "β-ミルセン",
            "percent": 29.55,
            "source": 0
          },
          {
            "name": "α-フムレン",
            "percent": 24.07,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 8.63,
            "source": 0
          },
          {
            "name": "ファルネセン",
            "percent": 7.53,
            "source": 0
          },
          {
            "name": "イソ酪酸2-メチルブチル",
            "percent": 2.07,
            "source": 0
          },
          {
            "name": "4-デセン酸メチル",
            "percent": 1.52,
            "source": 0
          },
          {
            "name": "β-カジネン",
            "percent": 1.38,
            "source": 0
          },
          {
            "name": "フムレンエポキシドII",
            "percent": 1.35,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 1.25,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.62,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 0.18,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Piasecki B. et al. (2023) Pharmaceuticals 16(8):1098, Table 1（6品種の平均を計算。EMA/HMPC/418902/2005 は乾燥毬花の精油を0.5〜1.5%とする）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10459968/"
          }
        ],
        "note": "品種差が大きいので、成分と精油量は6品種の平均を計算した値（ほかの成分も6品種の平均）。範囲はミルセン24〜37%、α-フムレン14〜33%で、ファルネセンはマリンカだけ18.8%と突出（ほかは0.9〜8.1%）。ファルネセンは(E)-β体と論文表記の(E,E)-β体の合計で、ゲラニオールは3品種で不検出。"
      }
    },
    {
      "name": "ルイボス",
      "reading": "るいぼす",
      "latin": "Aspalathus linearis",
      "group": "茶・ドライ",
      "part": "葉",
      "aroma": "赤い茶、蜂蜜、乾いた木",
      "role": "ノンカフェインの茶様ノートと赤い余韻を作る。",
      "components": [
        "フラボノイド類",
        "ヘキサナール",
        "リナロール",
        "タンニン"
      ]
    },
    {
      "name": "スローベリー",
      "reading": "すろーべりー",
      "latin": "Prunus spinosa",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "プラム、ベリー、渋み、杏仁",
      "role": "スロージンの主役。甘酸っぱさと渋みを作る。",
      "components": [
        "ベンズアルデヒド",
        "リンゴ酸",
        "タンニン",
        "アントシアニン"
      ]
    },
    {
      "name": "クランベリー",
      "reading": "くらんべりー",
      "latin": "Vaccinium macrocarpon",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "赤いベリー、酸、渋み",
      "role": "赤い酸とドライな果実感を足す。",
      "components": [
        "リンゴ酸",
        "安息香酸",
        "アントシアニン",
        "ヘキサナール"
      ]
    },
    {
      "name": "ブラックベリー",
      "reading": "ぶらっくべりー",
      "latin": "Rubus spp.",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "黒いベリー、ジャム、渋み",
      "role": "濃い果実感とタンニンを加える。",
      "components": [
        "イオノン類",
        "酢酸エチル",
        "アントシアニン",
        "タンニン"
      ]
    },
    {
      "name": "ラズベリー",
      "reading": "らずべりー",
      "latin": "Rubus idaeus",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "赤いベリー、花、酸",
      "role": "華やかな赤い果実のトップを作る。",
      "components": [
        "ラズベリーケトン",
        "イオノン類",
        "酢酸エチル",
        "リンゴ酸",
        "シクロイオノン",
        "trans-2-ヘキセナール",
        "α-ピネン",
        "ヘキサナール",
        "α-フェランドレン",
        "2-ヘプタノン",
        "β-カリオフィレン"
      ],
      "literature": {
        "oil": {
          "percent": 0.000334,
          "min": 0.000115,
          "max": 0.000637,
          "label": "香気成分",
          "basis": "生の果実（イタリア北部トレンティーノの6品種）をSPME-GC-MSで分析した香気成分の合計（2-オクタノール換算）。論文が商業収穫の熟度とするOR段階の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "イオノン類",
            "percent": 13.95,
            "source": 0
          },
          {
            "name": "シクロイオノン",
            "percent": 11.45,
            "source": 1
          },
          {
            "name": "trans-2-ヘキセナール",
            "percent": 9.32,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 7.85,
            "source": 1
          },
          {
            "name": "ヘキサナール",
            "percent": 4.8,
            "source": 1
          },
          {
            "name": "α-フェランドレン",
            "percent": 4,
            "source": 1
          },
          {
            "name": "2-ヘプタノン",
            "percent": 3.75,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 3.53,
            "source": 1
          },
          {
            "name": "ラズベリーケトン",
            "percent": 1.79,
            "source": 1
          },
          {
            "name": "酢酸エチル",
            "percent": 1.06,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Farneti B. et al. (2023) Front Mol Biosci 10:1155564, Supplementary Table S2（6品種のOR段階の合計の平均 3338.9 μg/kg を計算。範囲はR・OR段階の全品種 1149.7〜6372.6 μg/kg。Excelの値を小数1桁に丸めた）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10133483/"
          },
          {
            "title": "Gu I. et al. (2020) Antioxidants 9(9):871, Table S7 と本文（市販の赤ラズベリーの減圧水蒸留抽出物。S7の行の値は Black Raspberry 54.8・Red Raspberry 36.8。36.8 ÷ 総量2055.5 μg/kg で計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7554842/"
          }
        ],
        "note": "香気成分の総量と割合はイタリアの6品種の SPME 分析（OR段階の平均）で、R段階は1150〜2413 μg/kg、地中海の別研究（Tamir et al. 2025, Sci Hortic 354:114532 の要旨）も1392〜2562 μg/kg。ラズベリーケトンは揮発しにくく SPME では測れないため、市販果の減圧水蒸留抽出物の割合（1.8%、36.8 μg/kg）で補った。溶媒抽出の文献値は果実1.09〜4.20 mg/kg（Aprea et al. 2015, Molecules 20:2445, Table 1）で、蒸留抽出物の値よりずっと多い。"
      }
    },
    {
      "name": "りんご",
      "reading": "りんご",
      "latin": "Malus domestica",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "青りんご、蜜、爽やかな酸",
      "role": "軽い果実感と親しみやすさを足す。",
      "components": [
        "酢酸ヘキシル",
        "ヘキサナール",
        "ファルネセン",
        "リンゴ酸",
        "酢酸2-メチルブチル",
        "trans-2-ヘキセナール",
        "1-ヘキサノール",
        "2-メチル酪酸ヘキシル",
        "酢酸ブチル",
        "2-メチル酪酸ブチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.0000335,
          "min": 0.0000311,
          "max": 0.000036,
          "label": "香気成分",
          "basis": "中国陝西省で育てた「ふじ」完熟果の果肉（生）をSPME-GC-MSで分析（内部標準3-ノナノン）。2019・2020年の38成分の合計の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "酢酸2-メチルブチル",
            "percent": 18.86,
            "source": 0
          },
          {
            "name": "trans-2-ヘキセナール",
            "percent": 17.71,
            "source": 0
          },
          {
            "name": "酢酸ヘキシル",
            "percent": 15.25,
            "source": 0
          },
          {
            "name": "1-ヘキサノール",
            "percent": 6.7,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 6.35,
            "source": 0
          },
          {
            "name": "2-メチル酪酸ヘキシル",
            "percent": 6.07,
            "source": 0
          },
          {
            "name": "酢酸ブチル",
            "percent": 5.23,
            "source": 0
          },
          {
            "name": "2-メチル酪酸ブチル",
            "percent": 4.53,
            "source": 0
          },
          {
            "name": "ファルネセン",
            "percent": 2.03,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Yang S. et al. (2023) Front Plant Sci 14:1048846, Table 1（ふじ 2019・2020年）（38成分の合計 2019年 311.2・2020年 359.8 μg/kg FW を計算し、その平均）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10067597/"
          }
        ],
        "note": "皮をむいた果肉の値。品種差が大きく、同じ方法の別研究（Yang et al. 2022, Int J Mol Sci 23:2939, Table 2 の合計）では果肉でグラニースミス64 μg/kg、ジョナゴールド2116 μg/kg。表のファルネセンはα-ファルネセンの値。"
      }
    },
    {
      "name": "梨",
      "reading": "なし",
      "latin": "Pyrus pyrifolia",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "みずみずしい果実、白い花",
      "role": "淡いフルーティーさと水分感を出す。",
      "components": [
        "酢酸ヘキシル",
        "酢酸イソアミル",
        "ヘキサナール",
        "リナロール"
      ]
    },
    {
      "name": "ぶどう花",
      "reading": "ぶどうばな",
      "latin": "Vitis vinifera",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "白い花、ぶどう、軽い蜜",
      "role": "ワイン系ジンのフローラルな印象を支える。",
      "components": [
        "リナロール",
        "ゲラニオール",
        "ネロール",
        "酒石酸"
      ]
    },
    {
      "name": "サルサパリラ",
      "reading": "さるさぱりら",
      "latin": "Smilax spp.",
      "group": "根・土台",
      "part": "根",
      "aroma": "ルートビア、薬草、甘い根",
      "role": "クラフトコーラ的な薬草感を加える。",
      "components": [
        "サポニン類",
        "バニリン",
        "シンナムアルデヒド"
      ]
    },
    {
      "name": "バードック",
      "reading": "ばーどっく",
      "latin": "Arctium lappa",
      "group": "根・土台",
      "part": "根",
      "aroma": "土、ごぼう、乾いた根",
      "role": "土っぽさと野菜的な低音を作る。",
      "components": [
        "イヌリン",
        "ヘキサナール",
        "ゲルマクレンD",
        "アプロタキセン",
        "3,5-オクタジエン-2-オン",
        "β-エレメン",
        "ノナナール",
        "trans-2-オクテナール",
        "ジメチルスルフィド"
      ],
      "aliases": [
        "ごぼう",
        "ゴボウ",
        "牛蒡"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "アプロタキセン",
            "percent": 11.35,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 4.64,
            "source": 0
          },
          {
            "name": "3,5-オクタジエン-2-オン",
            "percent": 4.48,
            "source": 0
          },
          {
            "name": "β-エレメン",
            "percent": 2.48,
            "source": 0
          },
          {
            "name": "ノナナール",
            "percent": 2.38,
            "source": 0
          },
          {
            "name": "trans-2-オクテナール",
            "percent": 1.52,
            "source": 0
          },
          {
            "name": "ジメチルスルフィド",
            "percent": 1.28,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Zhang X., Herrera-Balandrano D.D., Huang W. et al. (2021) Foods 10(9):2095, Table 5（江蘇省豊県産の根を60℃で乾燥した粉末のSPME面積%）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8469698/"
          }
        ],
        "note": "定量値（絶対量）が見つからず、成分は乾燥根粉末のSPME面積%で入れたため oil は null。参考として、茨城県産の生のゴボウをエーテルで冷浸した抽出油の収率は0.026〜0.028%（鷲野ほか 1985, 日本農芸化学会誌 59(4):389-395）で、揮発しない酸やラクトンも含む上限の目安。ゴボウらしい土の香りの鍵は2-sec-ブチル-／2-イソブチル-3-メトキシピラジン（この分析で計0.64%）とされ、アプロタキセン（C17の直鎖ポリエン、どの系統にも当てはまらないため新しい系統「脂肪族炭化水素」とした）は同論文でも主成分。ゲルマクレンDは検出されず null、シロキサン・BHT・アルカンなど混入物と香りに効かないものは除いた。"
      }
    },
    {
      "name": "ダンデライオンルート",
      "reading": "だんでらいおんるーと",
      "latin": "Taraxacum officinale",
      "group": "根・土台",
      "part": "根",
      "aroma": "焙煎根、苦味、土",
      "role": "ビターズ的な苦味とロースト感。",
      "components": [
        "イヌリン",
        "フルフラール",
        "マルトール",
        "タンニン",
        "フェニル酢酸エチル",
        "β-エレメン",
        "2-ペンチルフラン",
        "酢酸エチル",
        "3,5-オクタジエン-2-オン",
        "ノナン酸エチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.00583,
          "min": 0.00177,
          "max": 0.01369,
          "label": "香気成分",
          "basis": "中国新疆で育てたセイヨウタンポポ4試料の根を40℃で乾燥・粉砕（焙煎なし）し、SPME-GC-MSで内部標準（4-メチル-1-ペンタノール）換算した定量値の合計（乾燥重量あたり）。フタル酸エステル類・可塑剤・酸化防止剤・ジメチルエーテル・アルカンを除いた73成分",
          "source": 0
        },
        "composition": [
          {
            "name": "フェニル酢酸エチル",
            "percent": 6.8,
            "source": 0
          },
          {
            "name": "β-エレメン",
            "percent": 4.56,
            "source": 0
          },
          {
            "name": "2-ペンチルフラン",
            "percent": 2.78,
            "source": 0
          },
          {
            "name": "酢酸エチル",
            "percent": 2.56,
            "source": 0
          },
          {
            "name": "3,5-オクタジエン-2-オン",
            "percent": 2.06,
            "source": 0
          },
          {
            "name": "ノナン酸エチル",
            "percent": 1.88,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 1.33,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Zhang N., Chen T., Ye S., Gao S., Dong Y. (2022) Separations 9(10):314, Supplementary Table S1B（T. officinale の根4試料 A17・A44・PZ・YS の合計 27.66・136.85・17.74・50.86 μg/g DW を計算し、その平均 58.28 μg/g）",
            "url": "https://www.mdpi.com/2297-8739/9/10/314"
          }
        ],
        "note": "焙煎していない乾燥根の値で、焙煎した根の香気成分の定量は見つからなかった。総量の約3割はパルミチン酸エチル（31.2%）などの脂肪酸エチルエステルで、香りにほとんど効かないため other_major に入れておらず、試料差も大きい（17.7〜136.9 μg/g）。表のフルフラールは論文の表記が 3-Furaldehyde（2-フルアルデヒドかは不明、A44では不検出）、マルトールは検出されず近い化合物の3-ヒドロキシ-2,3-ジヒドロマルトールが1.1%。"
      }
    },
    {
      "name": "カラムスルート",
      "reading": "からむするーと",
      "latin": "Acorus calamus",
      "group": "根・土台",
      "part": "根茎",
      "aroma": "菖蒲根、薬草、苦味、甘い根",
      "role": "古典的なビター薬草。規制や安全性の確認が必要。",
      "components": [
        "アサロン類",
        "オイゲノール",
        "リナロール",
        "アコレノン",
        "プレイソカラメンジオール",
        "ショウブノン",
        "イソショウブノン",
        "β-グルジュネン",
        "α-セリネン",
        "カンファー"
      ],
      "literature": {
        "oil": {
          "percent": 2.8499999999999996,
          "min": 2.4,
          "max": 3.3,
          "basis": "エストニア産の根茎3試料（2試料は三倍体型、1試料は四倍体型）を同時蒸留抽出の微量法で分析した精油の収率（要旨の値）",
          "source": 0
        },
        "composition": [
          {
            "name": "アコレノン",
            "percent": 18.1,
            "source": 1
          },
          {
            "name": "プレイソカラメンジオール",
            "percent": 12,
            "source": 1
          },
          {
            "name": "ショウブノン",
            "percent": 7.5,
            "source": 1
          },
          {
            "name": "イソショウブノン",
            "percent": 5.7,
            "source": 1
          },
          {
            "name": "アサロン類",
            "percent": 4.8,
            "source": 1
          },
          {
            "name": "β-グルジュネン",
            "percent": 4,
            "source": 1
          },
          {
            "name": "α-セリネン",
            "percent": 4,
            "source": 1
          },
          {
            "name": "カンファー",
            "percent": 3.5,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.3,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Raal A., Orav A., Gretchushnikova T. (2016) J Essent Oil Res 28(4):299-304（要旨）",
            "url": "https://doi.org/10.1080/10412905.2016.1147391"
          },
          {
            "title": "Sytykiewicz H., Łukasik I., Goławska S. (2025) Molecules 30(11):2417, Table 1（β-アサロン4.2＋α-アサロン0.6を合計。γ-アサロンは記載なし）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12156826/"
          }
        ],
        "note": "組成はポーランドの薬草店で買った乾燥根茎を3時間水蒸留した精油（倍数体の記載なし）で、アコレノンが主・β-アサロン4.2%の型。EMAの声明（EMEA/HMPC/139215/2005）では欧州の三倍体（var. calamus）の根茎精油のβ-アサロンは9〜19%、四倍体（var. angustatus）は85〜95%で、エストニアの三倍体型2試料もβ-アサロン9.3〜10.2%・アコレノン22.4〜27.5%（Raal 2016 要旨）なので、ジンで使う欧州型（三倍体型）の値として選んだ。収率の幅は四倍体型1試料を含む3試料の値で、オイゲノールは表になく null。"
      }
    },
    {
      "name": "トンカ豆",
      "reading": "とんかまめ",
      "latin": "Dipteryx odorata",
      "group": "甘味・樽香",
      "part": "種子",
      "aroma": "桜葉、杏仁、バニラ、干し草",
      "role": "強い甘い香り。クマリン規制に注意して扱う。",
      "components": [
        "クマリン",
        "バニリン",
        "ベンズアルデヒド"
      ],
      "literature": {
        "oil": {
          "percent": 3.19,
          "min": 2.04,
          "max": 4.34,
          "label": "クマリン",
          "basis": "市販のトンカ豆6試料のクマリン含量（メタノール抽出・HPLC-UV/Vis）20.4〜43.4 mg/g（トンカ豆に精油はほとんどない）",
          "source": 0
        },
        "composition": [
          {
            "name": "クマリン",
            "percent": 100,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Toma A.C., Stegmüller S., Richling E. (2025) Eur Food Res Technol 251:513-517（要旨。mg/g を％に換算）",
            "url": "https://doi.org/10.1007/s00217-024-04648-z"
          }
        ],
        "note": "トンカ豆に精油はほとんどなく、バニラと同じく種子のクマリン含量を入れた（範囲だけなので計算には中央値3.19%が使われる）。ほかに最適化した溶媒抽出で3.82%（Moraes et al. 2022 J Pharm Biomed Anal 210:114586、要旨）、総説的な記述で「1–3% weight/seed」（Dormousoglou et al. 2026 Int J Mol Sci 27(2):561）。同じToma et al. では手作りの「トンカ・ジン」のクマリンは2.2 mg/L。バニリン・ベンズアルデヒドはトンカ豆の成分として報告が見つからず（Ehlers et al. 1995 Z Lebensm Unters Forsch 201:278 はクマリン、ジヒドロクマリン、メリロト酸とそのエステル、HMF、o-クマル酸を挙げる）null。"
      }
    },
    {
      "name": "サフラン",
      "reading": "さふらん",
      "latin": "Crocus sativus",
      "group": "花・フローラル",
      "part": "柱頭",
      "aroma": "蜂蜜、乾いた花、薬草、金属感",
      "role": "ごく少量で高級感と独特のドライさを作る。",
      "components": [
        "サフラナール",
        "ピクロクロシン",
        "クロシン",
        "α-イソホロン"
      ],
      "literature": {
        "oil": {
          "percent": 0.25,
          "basis": "乾燥した柱頭（モロッコ・ブレマン県産、2019年9月）20 gを水蒸留3時間（クレベンジャー）。乾燥重量あたりの油の重量",
          "source": 0
        },
        "composition": [
          {
            "name": "サフラナール",
            "percent": 55.7,
            "source": 1
          },
          {
            "name": "α-イソホロン",
            "percent": 13.15,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Drioiche A. et al. (2023) Pharmaceuticals 16(4):545, 本文・Table 1",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10144431/"
          },
          {
            "title": "Kosar M., Demirci B., Goger F., Kara I., Baser K.H.C. (2017) Int J Food Prop 20(sup1):S746-S754 の要旨（トルコのエスキシェヒル産・サフランボル産の乾燥柱頭を微量水蒸気蒸留。2産地の平均を計算。精油量とは別の資料）",
            "url": "https://doi.org/10.1080/10942912.2017.1311341"
          }
        ],
        "note": "精油の量はモロッコ産1試料の値。同じ論文の精油組成はサフラナール6.39%と低く、ミリスチン酸・パルミチン酸イソプロピルなど混入が疑われる成分を含むため使わず、組成はトルコ2産地の乾燥柱頭の分析（要旨のみ閲覧できたので2成分だけ）にした。総説（Cid-Pérez et al. 2021 Molecules 26:6954）はサフラナールを揮発成分の30〜70%・乾燥重量の0.001〜0.006%としており、精油量×割合（約0.14%）とは桁が違うので注意。ピクロクロシン（サフラナールの前駆体の配糖体）とクロシン（色素）は揮発しない。"
      }
    },
    {
      "name": "レモングラス",
      "reading": "れもんぐらす",
      "latin": "Cymbopogon citratus / Cymbopogon flexuosus",
      "group": "ハーブ・グリーン",
      "part": "葉・茎",
      "aroma": "レモン、青い草、シャープなハーブ",
      "role": "柑橘感を葉の方向へ広げ、ジンソーダで爽快な輪郭を作る。",
      "components": [
        "シトラール",
        "ミルセン",
        "ゲラニオール",
        "ネロール",
        "リナロール",
        "酢酸ネリル"
      ],
      "literature": {
        "oil": {
          "percent": 1.0150000000000001,
          "min": 0.7,
          "max": 1.33,
          "basis": "市販の乾燥葉（ブラジル産6検体）・水蒸留2時間",
          "source": 0
        },
        "composition": [
          {
            "name": "シトラール",
            "percent": 70.3,
            "source": 1
          },
          {
            "name": "ミルセン",
            "percent": 13.84,
            "source": 1
          },
          {
            "name": "ゲラニオール",
            "percent": 5.65,
            "source": 1
          },
          {
            "name": "酢酸ネリル",
            "percent": 2.85,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 1.09,
            "source": 1
          },
          {
            "name": "ネロール",
            "percent": 0.53,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Barbosa L.C.A. et al. (2008) Molecules 13(8):1864-1874",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6244952/"
          },
          {
            "title": "Aly S.H. et al. (2025) PLoS One 20(2):e0319147（ゲラニアール36.08＋ネラール34.22）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11856542/"
          }
        ],
        "note": "成分はエジプト産生葉の1分析、精油量はブラジル市販乾燥葉（別ソース）。粉砕すると精油が大きく減る。"
      }
    },
    {
      "name": "ローズヒップ",
      "reading": "ろーずひっぷ",
      "latin": "Rosa spp.",
      "group": "果実・ベリー",
      "part": "偽果",
      "aroma": "赤い果実、酸、軽い花、ドライな渋み",
      "role": "フローラルな赤い酸と紅茶様のドライさを足す。",
      "components": [
        "アスコルビン酸",
        "リンゴ酸",
        "フラボノイド類",
        "カロテノイド類",
        "アントシアニン"
      ]
    },
    {
      "name": "オールスパイス",
      "reading": "おーるすぱいす",
      "latin": "Pimenta dioica",
      "group": "シード・スパイス",
      "part": "未熟果",
      "aroma": "クローブ、シナモン、ナツメグを合わせたような甘いスパイス",
      "role": "少量で温かい複合スパイス感を作る。",
      "components": [
        "オイゲノール",
        "メチルオイゲノール",
        "β-カリオフィレン",
        "リナロール",
        "β-ミルセン",
        "β-オシメン",
        "α-イランゲン",
        "α-フムレン",
        "テルピネン-4-オール"
      ],
      "literature": {
        "oil": {
          "percent": 2.755,
          "min": 1.51,
          "max": 4,
          "basis": "乾燥果実。グアテマラ産（天日乾燥・粉砕・水蒸留2時間）1.51%、メキシコ・タバスコ産（60℃で72時間乾燥・水蒸留1時間）1.7〜2.0 mL/50 g＝3.4〜4.0%",
          "source": 0
        },
        "composition": [
          {
            "name": "オイゲノール",
            "percent": 65.9,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 10.1,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 9.1,
            "source": 0
          },
          {
            "name": "メチルオイゲノール",
            "percent": 1.9,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 1.6,
            "source": 0
          },
          {
            "name": "β-オシメン",
            "percent": 1.3,
            "source": 0
          },
          {
            "name": "α-イランゲン",
            "percent": 1.2,
            "source": 0
          },
          {
            "name": "α-フムレン",
            "percent": 1.2,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 1,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Mérida-Reyes M.S. et al. (2020) Medicines 7(10):59（上限は Martínez-Bolaños L. et al. 2026 Plants 15(10):1515 の 1.7–2.0 mL/50 g を換算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7597960/"
          }
        ],
        "note": "成分はグアテマラ産乾燥果実1試料の値。ジャマイカ産ではオイゲノール73〜75%、メチルオイゲノール4〜10%という報告もある（Padmakumari 2011、要旨）。精油量はグアテマラ産1.51%とメキシコ産3.4〜4.0%で開きが大きいため、代表値は置かず範囲だけにした。"
      }
    },
    {
      "name": "紅茶",
      "reading": "こうちゃ",
      "latin": "Camellia sinensis",
      "group": "茶・ドライ",
      "part": "発酵茶葉",
      "aroma": "紅茶、花、渋み、ドライな余韻",
      "role": "柑橘やベルガモットと合わせてアールグレイ的な印象を作りやすい。",
      "components": [
        "リナロール",
        "ゲラニオール",
        "ヘキサナール",
        "フラボノイド類",
        "カフェイン",
        "テアニン",
        "リナロールオキシド類",
        "メチルサリチレート",
        "2-フェニルエタノール",
        "cis-3-ヘキセノール",
        "ベンジルアルコール",
        "インドール"
      ],
      "literature": {
        "oil": {
          "percent": 0.032,
          "label": "香気成分",
          "basis": "紅茶の製茶をエーテル浸漬し、得たオレオレジンを40℃で減圧水蒸気蒸留した精油の平均収量",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 31,
            "source": 1
          },
          {
            "name": "リナロールオキシド類",
            "percent": 13.2,
            "source": 1
          },
          {
            "name": "ゲラニオール",
            "percent": 12,
            "source": 1
          },
          {
            "name": "メチルサリチレート",
            "percent": 7.3,
            "source": 1
          },
          {
            "name": "2-フェニルエタノール",
            "percent": 3.6,
            "source": 1
          },
          {
            "name": "cis-3-ヘキセノール",
            "percent": 3.4,
            "source": 1
          },
          {
            "name": "ベンジルアルコール",
            "percent": 3,
            "source": 1
          },
          {
            "name": "インドール",
            "percent": 1.8,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "山西貞 (1968) 茶の香気. 栄養と食糧 21(4):227-235（総説）",
            "url": "https://www.jstage.jst.go.jp/article/jsnfs1949/21/4/21_4_227/_article/-char/ja/"
          },
          {
            "title": "Takeo T. (1983) Agric Biol Chem 47(6):1377-1379, Table I（雲南紅茶0012の水蒸気蒸留香気のピーク面積%。幅は同じ表の中国紅茶8点）",
            "url": "https://www.jstage.jst.go.jp/article/bbb1961/47/6/47_6_1377/_article"
          }
        ],
        "note": "紅茶の香りは品種で大きく違い、アッサム系（スリランカ・アッサム・雲南）はリナロールとそのオキシドが多く、中国種・日本の紅茶はゲラニオールが多い（キームンは34.6%）。ここでは「インド紅茶に似た香り」とされる雲南紅茶の値を代表にした。ヘキサナールは表になく（trans-2-ヘキセナールは痕跡）、精油量は1968年の総説の平均値。"
      }
    },
    {
      "name": "ブルーベリー",
      "reading": "ぶるーべりー",
      "latin": "Vaccinium corymbosum / Vaccinium spp.",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "青紫のベリー、ジャム、軽い酸、渋み",
      "role": "甘いベリー感と色味の印象を足す。",
      "components": [
        "アントシアニン",
        "イオノン類",
        "安息香酸",
        "リンゴ酸",
        "フラボノイド類",
        "リナロールオキシド類",
        "リナロール",
        "2-フェニルエタノール",
        "フルフラール",
        "α-テルピネオール",
        "2-ヘプタノン",
        "β-ダマセノン"
      ],
      "literature": {
        "oil": {
          "percent": 0.000142,
          "label": "香気成分",
          "basis": "米国アーカンソー州のスーパーで買った生のブルーベリー（品種の記載なし）を減圧・低温（50 °C・30分）で水蒸留し、抽出物をSPME-GC-MSで定量（生果あたり）",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロールオキシド類",
            "percent": 15.27,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 13.12,
            "source": 0
          },
          {
            "name": "2-フェニルエタノール",
            "percent": 7.81,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 4.7,
            "source": 0
          },
          {
            "name": "イオノン類",
            "percent": 4,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 3.99,
            "source": 0
          },
          {
            "name": "2-ヘプタノン",
            "percent": 2.82,
            "source": 0
          },
          {
            "name": "β-ダマセノン",
            "percent": 2.76,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Gu I. et al. (2020) Antioxidants 9(9):871, 本文と Table S7（ブルーベリーの減圧水蒸留抽出物）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7554842/"
          }
        ],
        "note": "品種不明の市販果1試料。減圧水蒸留の抽出物なので、蒸留で出てくる成分に近い値。2-エチルヘキサノール（5.8%）は香りが弱いため other_major から外した。フラネオールも2.3%あった。"
      }
    },
    {
      "name": "ガランガル",
      "reading": "がらんがる",
      "latin": "Alpinia galanga / Alpinia officinarum",
      "group": "根・土台",
      "part": "根茎",
      "aroma": "生姜、柑橘、樟脳、乾いたスパイス",
      "role": "ジンジャーより薬草的で、スパイスの奥行きを足す。",
      "components": [
        "1,8-シネオール",
        "オイゲノール",
        "カンファー",
        "β-カリオフィレン",
        "ジンゲロール",
        "酢酸フェンキル",
        "ケイ皮酸メチル",
        "グアイオール",
        "α-テルピネオール",
        "カンフェン",
        "ボルネオール",
        "フェンコール"
      ],
      "literature": {
        "oil": {
          "percent": 0.23,
          "min": 0.14,
          "max": 0.32,
          "basis": "生の根茎（乾燥のデータは見つからず）。インド・ケララ州産を水蒸気蒸留3時間で0.23%。範囲はタイ市場品0.14%とマレーシア産0.32%（いずれも生）",
          "source": 0
        },
        "composition": [
          {
            "name": "1,8-シネオール",
            "percent": 28.42,
            "source": 0
          },
          {
            "name": "酢酸フェンキル",
            "percent": 18.38,
            "source": 0
          },
          {
            "name": "カンファー",
            "percent": 7.71,
            "source": 0
          },
          {
            "name": "ケイ皮酸メチル",
            "percent": 4.22,
            "source": 0
          },
          {
            "name": "グアイオール",
            "percent": 3.27,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 2.58,
            "source": 0
          },
          {
            "name": "カンフェン",
            "percent": 2.55,
            "source": 0
          },
          {
            "name": "ボルネオール",
            "percent": 2.48,
            "source": 0
          },
          {
            "name": "フェンコール",
            "percent": 2.21,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 0.62,
            "source": 0
          },
          {
            "name": "オイゲノール",
            "percent": 0.05,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Jirovetz L. et al. (2003) Acta Pharm. 53(2):73-81（範囲は Chaiyana W. et al. 2022 Molecules 27(10):3275 と Abdullah F. et al. 2015 J. Insect Sci. 15(1):7）",
            "url": "https://acta.pharmaceutica.farmaceut.org/materials/pdf/Jirovetz.pdf"
          }
        ],
        "note": "乾燥根茎の精油データが見つからず、生の根茎（インド・ケララ州、A. galanga）の値。産地差が非常に大きく、タイ市場品ではケイ皮酸メチル33.31%・1,8-シネオール29.64%（Chaiyana 2022）、マレーシア産では1,8-シネオール61.9%（Abdullah 2015）。ジンゲロールは不揮発性の辛味成分で精油には入らず、この分析にも出てこない。"
      }
    },
    {
      "name": "ビルベリー",
      "reading": "びるべりー",
      "latin": "Vaccinium myrtillus",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "黒いベリー、酸、渋み、森の果実",
      "role": "ブルーベリーより暗いベリー感とタンニンを出す。",
      "components": [
        "アントシアニン",
        "リンゴ酸",
        "安息香酸",
        "フラボノイド類"
      ]
    },
    {
      "name": "エルダーベリー",
      "reading": "えるだーべりー",
      "latin": "Sambucus nigra",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "黒い果実、酸、軽い花、渋み",
      "role": "エルダーフラワーより果実寄りの重さと色味を足す。",
      "components": [
        "アントシアニン",
        "リンゴ酸",
        "フラボノイド類",
        "ベンズアルデヒド"
      ]
    },
    {
      "name": "チコリルート",
      "reading": "ちこりるーと",
      "latin": "Cichorium intybus",
      "group": "茶・ドライ",
      "part": "根",
      "aroma": "焙煎根、コーヒー様、苦味、土",
      "role": "ローストした苦味とノンカフェインのコーヒー様ニュアンスを作る。",
      "components": [
        "イヌリン",
        "フルフラール",
        "マルトール",
        "カフェ酸",
        "タンニン",
        "バニリン",
        "5-ヒドロキシメチルフルフラール",
        "2-アセチルピロール",
        "フェニルアセトアルデヒド"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "バニリン",
            "percent": 5.48,
            "source": 0
          },
          {
            "name": "5-ヒドロキシメチルフルフラール",
            "percent": 4.27,
            "source": 0
          },
          {
            "name": "2-アセチルピロール",
            "percent": 3.77,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 2.8,
            "source": 0
          },
          {
            "name": "フェニルアセトアルデヒド",
            "percent": 1.04,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Sannai A., Fujimori T., Kato K. (1982) Agric. Biol. Chem. 46(2):429-433, Table II（焙煎根エキスの揮発画分の相対%）",
            "url": "https://www.jstage.jst.go.jp/article/bbb1961/46/2/46_2_429/_article"
          }
        ],
        "note": "市販の焙煎チコリ根エキス（50%エタノール抽出物）を水蒸気蒸留した揮発画分の相対%で、焙煎根に対する香気成分の総量は見つからなかった（同論文はエキス7.5 kgから揮発油1.38 gを得ている）。揮発画分の約3割は脂肪酸とそのメチルエステルで除外した。マルトールはこの分析では検出されず、近年の研究（Wu & Cadwallader 2019、要旨）ではロタンドン、ソトロン、ジヒドロマルトール、マルトールなどが焙煎チコリの特徴香とされる。"
      }
    },
    {
      "name": "リンゴンベリー",
      "reading": "りんごんべりー",
      "latin": "Vaccinium vitis-idaea",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "赤いベリー、酸、軽い渋み",
      "role": "北欧系ジンの赤い酸味とドライな果実感を支える。",
      "components": [
        "安息香酸",
        "アントシアニン",
        "リンゴ酸",
        "フラボノイド類"
      ]
    },
    {
      "name": "カフィアライムリーフ",
      "reading": "かふぃあらいむりーふ",
      "latin": "Citrus hystrix",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "鮮烈なライム葉、グリーン、南国ハーブ",
      "role": "果皮ではなく葉の青い柑橘を強く出す。",
      "components": [
        "シトロネラール",
        "リモネン",
        "リナロール",
        "β-ピネン",
        "シトロネロール",
        "サビネン",
        "酢酸シトロネリル"
      ],
      "literature": {
        "oil": {
          "percent": 0.72,
          "min": 0.27,
          "max": 1.5,
          "basis": "マレーシアの果樹園の生葉を水蒸気蒸留3時間。範囲はタイの生葉（水蒸留2時間）0.27%から、インドネシア4産地の2日しおれさせた葉（水蒸気蒸留3時間）0.78〜1.5%まで",
          "source": 0
        },
        "composition": [
          {
            "name": "シトロネラール",
            "percent": 77.69,
            "source": 0
          },
          {
            "name": "シトロネロール",
            "percent": 3.75,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 3.2,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 3.02,
            "source": 0
          },
          {
            "name": "酢酸シトロネリル",
            "percent": 2.81,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 0.21,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 0.16,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Othman H.I.A. et al. (2023) Plants 12(1):134, Table S2（範囲はTadtong S. et al. 2025 Int J Mol Sci 26(12):5601, Table 1 と Efendi D. et al. 2021 Metabolites 11(5):260）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9823843/"
          }
        ],
        "note": "生葉の値。乾燥葉の精油量を測った資料は見つからなかった（乾燥葉は水分が抜けるぶん1gあたりは多くなるはずだが、乾燥で揮発する分もある）。成分はシトロネラールが78〜84%と大部分で、β-ピネンやサビネンが多い果皮の精油（同じTadtong et al. 2025の表4）とは別物。"
      }
    },
    {
      "name": "ハマナス",
      "reading": "はまなす",
      "latin": "Rosa rugosa",
      "group": "和ボタニカル",
      "part": "花弁・果実",
      "aroma": "野ばら、海辺の花、赤い果実、蜂蜜",
      "role": "日本らしいローズ系フローラルと果実感を同時に出す。",
      "components": [
        "ゲラニオール",
        "シトロネロール",
        "ネロール",
        "2-フェニルエタノール",
        "ローズオキサイド",
        "酢酸シトロネリル",
        "γ-ムウロレン",
        "2-トリデカノン",
        "酢酸ゲラニル",
        "8-イソプロピル-1,5-ジメチルシクロデカ-1,5-ジエン",
        "リモネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.0058,
          "min": 0.0031,
          "max": 0.042,
          "basis": "青森県鰺ヶ沢町の自生ハマナスの花（2009年6月）2.5 kgを6時間水蒸気蒸留。範囲は中国の栽培ハマナス19品種の生花の水蒸留（0.0314〜0.4162 μL/g を % v/w に換算）",
          "source": 0
        },
        "composition": [
          {
            "name": "酢酸シトロネリル",
            "percent": 12.1,
            "source": 0
          },
          {
            "name": "シトロネロール",
            "percent": 7.7,
            "source": 0
          },
          {
            "name": "γ-ムウロレン",
            "percent": 6.1,
            "source": 0
          },
          {
            "name": "2-トリデカノン",
            "percent": 6,
            "source": 0
          },
          {
            "name": "酢酸ゲラニル",
            "percent": 5.5,
            "source": 0
          },
          {
            "name": "8-イソプロピル-1,5-ジメチルシクロデカ-1,5-ジエン",
            "percent": 5.5,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 1.6,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 1.5,
            "source": 0
          },
          {
            "name": "ネロール",
            "percent": 1.4,
            "source": 0
          },
          {
            "name": "2-フェニルエタノール",
            "percent": 0.9,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "長岐正彦 (2012) コスメトロジー研究報告 20:31-39「自生ハマナス（Rosa rugosa）の精油成分とその抗菌活性」（範囲は Wang J. et al. (2023) Biomolecules 13(3):439 の本文。μL/g を % v/w に換算）",
            "url": "https://www.kose-cosmetology.or.jp/research_report/archives/2012/fullVersion/Cosmetology%20Vol20%202012%20p31-39%20Nagaki_M.pdf"
          }
        ],
        "note": "日本の自生ハマナス（青森県）1試料の精油で、酢酸シトロネリル・セスキテルペン類が多く、C21〜C27のアルカン（ステアロプテン）が23.2%を占め、シトロネロールは7.7%と少ない。中国の栽培品（平陰玫瑰）の工業用精油はシトロネロール48.3%・ゲラニオール19.9%で、範囲にその値を入れた。ローズオキサイドは精油では検出されず（蒸留湯の抽出物に0.1%、生花のヘッドスペースでは2種で計7.0%、平陰玫瑰の精油では計0.17%）、null にした。生花のヘッドスペースは2-フェニルエタノール37.6%・シトロネロール37.5%で、水に溶けやすい2-フェニルエタノールは精油より蒸留湯に多く残る。精油量は生花あたりで、乾燥花弁はこれより多くなる。"
      }
    },
    {
      "name": "ヘザー",
      "reading": "へざー",
      "latin": "Calluna vulgaris",
      "group": "茶・ドライ",
      "part": "花・枝葉",
      "aroma": "ドライな花、蜂蜜、野草、軽い渋み",
      "role": "スコットランド系の荒野っぽい花と乾いた余韻を作る。",
      "components": [
        "フラボノイド類",
        "タンニン",
        "ヘキサナール",
        "リナロール"
      ]
    },
    {
      "name": "メドウスイート",
      "reading": "めどうすいーと",
      "latin": "Filipendula ulmaria",
      "group": "花・フローラル",
      "part": "花・葉",
      "aroma": "甘い薬草、杏仁、湿った花、干し草",
      "role": "サリチル酸系の薬草感でビターズ的な奥行きを足す。",
      "components": [
        "サリチルアルデヒド",
        "メチルサリチレート",
        "クマリン",
        "リナロール",
        "ノナナール",
        "ライラックアルデヒド類"
      ],
      "literature": {
        "oil": {
          "percent": 0.2,
          "min": 0.05,
          "max": 1.31,
          "basis": "乾燥花を水蒸気蒸留（EMA報告書が引用したESCOPの値）。幅は乾燥花の水蒸留で0.05%（シベリア）〜1.31%（リトアニア5産地・開花初期の平均）",
          "source": 0
        },
        "composition": [
          {
            "name": "サリチルアルデヒド",
            "percent": 72.3,
            "source": 1
          },
          {
            "name": "メチルサリチレート",
            "percent": 18.41,
            "source": 1
          },
          {
            "name": "ノナナール",
            "percent": 1.74,
            "source": 1
          },
          {
            "name": "ライラックアルデヒド類",
            "percent": 1,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.76,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "EMA/HMPC/434892/2010 Assessment report on Filipendula ulmaria (L.) Maxim., herba and flos (2011)（範囲はOlennikov et al. 2016 Table 4 と Ložienė et al. 2023）",
            "url": "https://www.ema.europa.eu/en/documents/herbal-report/final-assessment-report-filipendula-ulmaria-l-maxim-herba-and-filipendula-ulmaria-l-maxim-flos-first-version_en.pdf"
          },
          {
            "title": "Ložienė K. et al. (2023) Plants 12(2):300（5産地・開花初期の平均。最小はOlennikov et al. 2016のシベリア産35.7%、最大はTable S1の94.8%）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9862637/"
          }
        ],
        "note": "精油量は文献で30倍近く違う（乾燥花でシベリア0.05%、イタリア0.04%、リトアニア開花初期1.31%・晩期0.61%）ため、代表値はEMA/ESCOPの0.2%とした。成分はリトアニア5産地の乾燥花序（開花初期）の平均で、other_majorもTable S1から平均を計算（ライラックアルデヒドはA〜Dの合計）。クマリンは生薬に痕跡量とされる（EMA）が、精油の分析では検出されない。"
      }
    },
    {
      "name": "ユーカリ",
      "reading": "ゆーかり",
      "latin": "Eucalyptus spp.",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "強い清涼感、樟脳、ミント様、木質",
      "role": "少量でトップに抜けと薬草的な清涼感を与える。",
      "components": [
        "1,8-シネオール",
        "α-ピネン",
        "リモネン",
        "p-シメン",
        "イソバレルアルデヒド"
      ],
      "literature": {
        "oil": {
          "percent": 2.15,
          "min": 1.8,
          "max": 2.5,
          "basis": "E. globulus の乾燥葉（EMAが引く文献値1.8〜2.5%。欧州薬局方は丸葉で2.0%以上）",
          "source": 0
        },
        "composition": [
          {
            "name": "1,8-シネオール",
            "percent": 67.1,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 17.6,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 7.9,
            "source": 1
          },
          {
            "name": "イソバレルアルデヒド",
            "percent": 1,
            "source": 1
          },
          {
            "name": "p-シメン",
            "percent": 0.7,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "EMA/HMPC/320282/2023 Assessment report on Eucalyptus globulus Labill.; E. polybractea R.T. Baker; E. smithii R.T. Baker, aetheroleum (2024)",
            "url": "https://www.ema.europa.eu/en/documents/herbal-report/final-assessment-report-eucalyptus-globulus-labill-eucalyptus-polybractea-rt-baker-eucalyptus-smithii-rt-baker-aetheroleum-revision-1_en.pdf"
          },
          {
            "title": "Pinto M. et al. (2026) Pest Manag Sci 82(8):7510-7525, Table 1（成葉の精油AEEO、3地点の平均。範囲はEMA/HMPC/892615/2011 Assessment report on Eucalyptus globulus Labill., folium）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13352317/"
          }
        ],
        "note": "E. globulus の値。成分はポルトガル産の成葉（薬局方の「老枝の葉」に当たる）を生のまま水蒸留した分析で、若葉ではα-ピネン24.6%・シネオール57.9%。市販のユーカリ油（欧州薬局方）は精留してシネオール70%以上・α-ピネン10%以下にしたもので、葉を蒸留したままの油とは組成が違う。"
      }
    },
    {
      "name": "シーバックソーン",
      "reading": "しーばっくそーん",
      "latin": "Hippophae rhamnoides",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "橙色の酸、トロピカル、青み、オイル感",
      "role": "北欧・海沿いの果実感と鮮やかな酸を足す。",
      "components": [
        "リンゴ酸",
        "キナ酸",
        "ヘキサナール",
        "カロテノイド類",
        "フラボノイド類",
        "イソ吉草酸イソアミル",
        "リナロール",
        "吉草酸sec-ブチル",
        "安息香酸イソアミル",
        "ヘキサン酸ブチル",
        "ヘキサン酸エチル",
        "オクタン酸エチル",
        "イソ吉草酸エチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.0036,
          "label": "香気成分",
          "basis": "果実の揮発性成分の合計（GC-MS、60成分を同定。要旨に書かれた約36 mg/kg）",
          "source": 0
        },
        "composition": [
          {
            "name": "イソ吉草酸イソアミル",
            "percent": 13.81,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 12.46,
            "source": 1
          },
          {
            "name": "吉草酸sec-ブチル",
            "percent": 9.91,
            "source": 1
          },
          {
            "name": "安息香酸イソアミル",
            "percent": 6.94,
            "source": 1
          },
          {
            "name": "ヘキサン酸ブチル",
            "percent": 6.37,
            "source": 1
          },
          {
            "name": "ヘキサン酸エチル",
            "percent": 5.94,
            "source": 1
          },
          {
            "name": "オクタン酸エチル",
            "percent": 5.57,
            "source": 1
          },
          {
            "name": "イソ吉草酸エチル",
            "percent": 2.68,
            "source": 1
          },
          {
            "name": "ヘキサナール",
            "percent": 0.03,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Hirvi T., Honkanen E. (1984) Z Lebensm Unters Forsch 179(5):387-388（要旨）（本文はペイウォールで未確認。36 mg/kg を%に換算）",
            "url": "https://doi.org/10.1007/BF01043436"
          },
          {
            "title": "Zhang Z. et al. (2024) Food Chem X 24:101828, Table 3（中国北部の5試料の果汁、SPMEの面積%）（5試料の平均。検出は甘粛の1試料だけ）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11421254/"
          }
        ],
        "note": "総量は1984年の論文の要旨の値（産地・抽出法は未確認）、成分の割合は中国北部の5試料の果汁（SPME の面積%）の平均で、別々の試料。どちらもエステルが主（5試料でエステル62〜88%）。水蒸留で2.1%（界面活性剤併用で3.2%）の「精油」が取れたという報告（Liaqat et al. 2025, Food Technol Biotechnol 63:26）もあるが、ほかの果実の香気成分量と桁が違いすぎるため使わなかった。"
      }
    },
    {
      "name": "ジャスミン",
      "reading": "じゃすみん",
      "latin": "Jasminum sambac / Jasminum grandiflorum",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "白い花、濃厚な甘み、果実、わずかな動物感",
      "role": "香水的な白花の厚みを作る。入れすぎると支配的になりやすい。",
      "components": [
        "ベンジルアセテート",
        "リナロール",
        "インドール",
        "ジャスモン",
        "ジャスミンラクトン",
        "ネロリドール",
        "α-ファルネセン",
        "安息香酸ベンジル",
        "イソカリオフィレン",
        "フィトール",
        "アントラニル酸メチル",
        "サリチル酸ベンジル"
      ],
      "literature": {
        "oil": {
          "percent": 0.05,
          "basis": "ジャスミン（J. grandiflorum）の花（インド）の水蒸留精油。要旨に生・乾燥の記載なし。同じ研究でコンクリート0.35%、アブソリュート0.27%",
          "source": 0
        },
        "composition": [
          {
            "name": "ベンジルアセテート",
            "percent": 32.4,
            "source": 1
          },
          {
            "name": "ネロリドール",
            "percent": 11.9,
            "source": 1
          },
          {
            "name": "ジャスモン",
            "percent": 8.5,
            "source": 1
          },
          {
            "name": "α-ファルネセン",
            "percent": 7.6,
            "source": 1
          },
          {
            "name": "安息香酸ベンジル",
            "percent": 7.4,
            "source": 1
          },
          {
            "name": "イソカリオフィレン",
            "percent": 6.2,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 3.6,
            "source": 1
          },
          {
            "name": "フィトール",
            "percent": 3.5,
            "source": 1
          },
          {
            "name": "アントラニル酸メチル",
            "percent": 2.5,
            "source": 1
          },
          {
            "name": "サリチル酸ベンジル",
            "percent": 2.5,
            "source": 1
          },
          {
            "name": "ジャスミンラクトン",
            "percent": 1.89,
            "source": 2
          },
          {
            "name": "インドール",
            "percent": 0.98,
            "source": 2
          }
        ],
        "sources": [
          {
            "title": "Prakash O., Sahoo D. & Rout P.K. (2012) Nat Prod Commun 7(1):89-92（要旨）",
            "url": "https://pubmed.ncbi.nlm.nih.gov/22428256/"
          },
          {
            "title": "Mansour K.A. et al. (2022) Molecules 27(11):3639, Table 1（J. grandiflorum 生花・エジプト産の水蒸留精油）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9182578/"
          },
          {
            "title": "Yassen M.S. et al. (2026) Sci Rep 16:8947, Table 2（別分析：J. grandiflorum 生花のヘッドスペース、8月。精油では不検出）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12988214/"
          }
        ],
        "note": "香水用のJ. grandiflorumの値で、ジャスミン茶に使うJ. sambacはリナロール・α-ファルネセンが多くcis-ジャスモンを含まない（Yassen 2026）。精油量は花（生・乾燥の記載なし）の水蒸留値で、Mansour 2022の0.8% v/wは桁違いに高く、香料のアブソリュートは花の約0.3%（Yassen 2026のコンクリート0.76%×アブソリュート39.67%から計算）。インドールとジャスミンラクトンは精油で検出されずヘッドスペース分析の値で補った。"
      }
    },
    {
      "name": "レモンマートル",
      "reading": "れもんまーとる",
      "latin": "Backhousia citriodora",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "非常に強いレモン、甘い葉、澄んだ柑橘",
      "role": "少量でレモン様のトップを強く押し出す。",
      "components": [
        "シトラール",
        "リナロール",
        "ゲラニオール",
        "ミルセン",
        "6-メチル-5-ヘプテン-2-オン"
      ],
      "literature": {
        "oil": {
          "percent": 1.5,
          "min": 1.1,
          "max": 3.2,
          "basis": "オーストラリアのシトラール型の生葉。代表値は商業蒸留（小枝を少し含む）、範囲は生葉の報告値",
          "source": 0
        },
        "composition": [
          {
            "name": "シトラール",
            "percent": 89.78,
            "source": 1
          },
          {
            "name": "ゲラニオール",
            "percent": 2.08,
            "source": 2
          },
          {
            "name": "6-メチル-5-ヘプテン-2-オン",
            "percent": 1.02,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.53,
            "source": 1
          },
          {
            "name": "ミルセン",
            "percent": 0.22,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Southwell I. (2021) Foods 10(7):1596（総説）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8305781/"
          },
          {
            "title": "Lim A.C. et al. (2022) Molecules 27(15):4895, Table 1（ゲラニアール52.13＋ネラール37.65を合計。範囲はSouthwell 2021 Table 2のシトラール型精油の規格範囲）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9370046/"
          },
          {
            "title": "Nagata T. et al. (2024) BMC Complement Med Ther 24:211, Table 2（市販のレモンマートル精油の分析。範囲はSouthwell 2021 Table 2）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11149199/"
          }
        ],
        "note": "精油量は生葉の値で、ジンでよく使う乾燥葉の精油量を測った資料は見つからなかった（乾燥葉は水分が抜けるぶん1gあたりは生葉より多いはず）。成分はマレーシアの有機栽培の葉を3日陰干しして水蒸留4時間した1分析で、ゲラニオールはこの分析に載っていないため市販精油の分析値で補った。シトロネラール型のケモタイプもあるが、栽培・流通の主流はシトラール型。"
      }
    },
    {
      "name": "ローワンベリー",
      "reading": "ろーわんべりー",
      "latin": "Sorbus aucuparia",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "赤い実、酸、渋み、野性味",
      "role": "北欧系の野生ベリー感とドライな酸を足す。",
      "components": [
        "リンゴ酸",
        "ソルビン酸",
        "タンニン",
        "アントシアニン"
      ]
    },
    {
      "name": "梅",
      "reading": "うめ",
      "latin": "Prunus mume",
      "group": "和ボタニカル",
      "part": "果実",
      "aroma": "梅、杏仁、酸、和の果実",
      "role": "和の酸味と核果の杏仁様ニュアンスを作る。",
      "components": [
        "ベンズアルデヒド",
        "クマリン",
        "リンゴ酸",
        "酢酸エチル",
        "酢酸ブチル",
        "酢酸ヘキシル",
        "酪酸ブチル",
        "アセトイン",
        "イオノン類",
        "1-ヘキサノール",
        "ジヒドロ-β-イオノン",
        "酪酸エチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.000631,
          "min": 0.0000829,
          "max": 0.00158,
          "label": "香気成分",
          "basis": "中国四川・雲南の青梅8品種（商業熟度の約80%、2024年5〜6月収穫）の生果。SPME-GC-MS、内部標準2-オクタノール",
          "source": 0
        },
        "composition": [
          {
            "name": "酢酸ブチル",
            "percent": 42.05,
            "source": 0
          },
          {
            "name": "酢酸ヘキシル",
            "percent": 23.56,
            "source": 0
          },
          {
            "name": "酢酸エチル",
            "percent": 5.38,
            "source": 0
          },
          {
            "name": "酪酸ブチル",
            "percent": 4.95,
            "source": 0
          },
          {
            "name": "アセトイン",
            "percent": 3.39,
            "source": 0
          },
          {
            "name": "イオノン類",
            "percent": 2.45,
            "source": 0
          },
          {
            "name": "1-ヘキサノール",
            "percent": 1.94,
            "source": 0
          },
          {
            "name": "ジヒドロ-β-イオノン",
            "percent": 1.67,
            "source": 0
          },
          {
            "name": "酪酸エチル",
            "percent": 1.41,
            "source": 0
          },
          {
            "name": "ベンズアルデヒド",
            "percent": 0.09,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Deng M. et al. (2026) Foods 15(6):1057, Table 7（青梅8品種）（分類ごとの合計を足した各品種の総量 828.7〜15816.6 μg/kg の平均を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13025654/"
          }
        ],
        "note": "梅酒に使う青梅に近い中国の8品種（酢酸ブチル・酢酸ヘキシルが主で品種差が大きい）。日本の「南高」の生果の定量値は見つけられなかった。ベンズアルデヒドは果肉の遊離の値でごくわずか。その元になるアミグダリンは種に多く、未熟果で種52.9 g/kg・果肉と皮0.81 g/kg（乾物、Ramalingam et al. 2024, Foods 13:2609, Table 1）。クマリンは検出されず null。"
      }
    },
    {
      "name": "セイボリー",
      "reading": "せいぼりー",
      "latin": "Satureja hortensis / Satureja montana",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "タイム様、胡椒、薬草、温かいハーブ",
      "role": "肉料理に合うようなセイボリーなハーブ感を足す。",
      "components": [
        "カルバクロール",
        "チモール",
        "p-シメン",
        "γ-テルピネン",
        "α-テルピネン",
        "α-ピネン",
        "β-ミルセン",
        "α-ツジェン",
        "β-ピネン",
        "β-ビサボレン"
      ],
      "literature": {
        "oil": {
          "percent": 2.78,
          "min": 2.68,
          "max": 3.55,
          "basis": "サマーセイボリー（S. hortensis）のアルジェリア産地上部を陰干しし水蒸留3時間。範囲はイラン産品種Saturnの乾燥品（施肥5水準）",
          "source": 0
        },
        "composition": [
          {
            "name": "カルバクロール",
            "percent": 45.15,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 17.72,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 9.01,
            "source": 0
          },
          {
            "name": "α-テルピネン",
            "percent": 3.38,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 2.74,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.54,
            "source": 0
          },
          {
            "name": "α-ツジェン",
            "percent": 2.3,
            "source": 0
          },
          {
            "name": "チモール",
            "percent": 2.16,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 1.64,
            "source": 0
          },
          {
            "name": "β-ビサボレン",
            "percent": 1.32,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Boudechicha A. et al. (2024) ACS Omega 9(25):27030-27046（範囲はMohtashami S. et al. 2021 Food Sci Nutr 9(9):4986-4997, Table 1）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11209936/"
          }
        ],
        "note": "サマーセイボリー（Satureja hortensis）の値で、ウィンターセイボリー（S. montana）とは別。カルバクロール型だが、γ-テルピネンは産地・栽培で約18〜42%と大きく変わる（ルーマニア産はγ-テルピネン42.35%＞カルバクロール32.83%でチモール不検出：Chambre D.R. et al. 2020 Sci Rep 10:21322）。"
      }
    },
    {
      "name": "バタフライピー",
      "reading": "ばたふらいぴー",
      "latin": "Clitoria ternatea",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "穏やかな豆、土、淡い花、青い色の印象",
      "role": "香りより色変化と柔らかな植物感を使う素材。",
      "components": [
        "アントシアニン",
        "フラボノイド類",
        "タンニン"
      ]
    },
    {
      "name": "大和当帰",
      "reading": "やまととうき",
      "latin": "Angelica acutiloba",
      "group": "和ボタニカル",
      "part": "葉・根",
      "aroma": "和の薬草、セロリ様、根、清涼感",
      "role": "アンジェリカ系の土台を日本の薬草方向へ寄せる。",
      "components": [
        "β-フェランドレン",
        "α-ピネン",
        "リモネン",
        "クマリン",
        "リグスチリド",
        "β-カリオフィレン",
        "γ-テルピネン",
        "p-シメン",
        "ブチリデンフタリド",
        "カリオフィレンオキシド",
        "ゲルマクレンD"
      ],
      "literature": {
        "oil": {
          "percent": 0.44,
          "basis": "大和当帰の乾燥葉パウダー（山口県産）を連続水蒸気蒸留抽出（SDE）",
          "source": 0
        },
        "composition": [
          {
            "name": "リグスチリド",
            "percent": 36.45,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 10.9,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 9.4,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 6.88,
            "source": 0
          },
          {
            "name": "ブチリデンフタリド",
            "percent": 3.55,
            "source": 0
          },
          {
            "name": "カリオフィレンオキシド",
            "percent": 2.58,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 2.21,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 0.98,
            "source": 0
          },
          {
            "name": "β-フェランドレン",
            "percent": 0.18,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 0.11,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Ezoe S., Nakano K., Akakabe Y. (2025) J. Oleo Sci. 74(9):837-843",
            "url": "https://www.jstage.jst.go.jp/article/jos/74/9/74_ess25099/_article/-char/ja/"
          }
        ],
        "note": "食品（茶・調味料）に使われる葉の乾燥粉末の値で、根は生薬として使われる（Ezoe 2025）。根の精油は大和産の市販品で約0.2%、国産品で0.10〜0.15%とされ（柳沢 2019の総説）、四川栽培の根の精油はリグスチリド22.8%・ブチリデンフタリド19.5%が主（Du 2002、要旨）。生葉ではγ-テルピネン（36.6%）が最多で乾燥するとモノテルペンが減ってリグスチリドが主になり、リグスチリド等はZ体・E体の合計、クマリンは検出されなかった。"
      }
    },
    {
      "name": "ニガヨモギ",
      "reading": "にがよもぎ",
      "latin": "Artemisia absinthium",
      "group": "ハーブ・グリーン",
      "part": "葉・花",
      "aroma": "強い苦味、薬草、樟脳、アブサン様",
      "role": "ビターで薬草的な輪郭を少量で作る。",
      "components": [
        "ツヨン",
        "カンファー",
        "1,8-シネオール",
        "β-ピネン",
        "酢酸サビニル",
        "β-ミルセン",
        "サビネン",
        "エポキシオシメン",
        "イソ吉草酸ネリル",
        "酪酸ネリル",
        "p-シメン"
      ],
      "literature": {
        "oil": {
          "percent": 0.45,
          "min": 0.1,
          "max": 1.1,
          "basis": "欧州15か国の薬局で買った市販の乾燥ニガヨモギ（地上部）19試料を欧州薬局方の方法で3時間蒸留。代表値は19試料の平均を計算",
          "source": 0
        },
        "composition": [
          {
            "name": "酢酸サビニル",
            "percent": 11.39,
            "source": 0
          },
          {
            "name": "ツヨン",
            "percent": 8.73,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 8.38,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 7.82,
            "source": 0
          },
          {
            "name": "エポキシオシメン",
            "percent": 5.01,
            "source": 0
          },
          {
            "name": "イソ吉草酸ネリル",
            "percent": 3.14,
            "source": 0
          },
          {
            "name": "酪酸ネリル",
            "percent": 2.48,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 2.29,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 2.01,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 0.27,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Orav A. et al. (2006) Proc. Estonian Acad. Sci. Chem. 55(3):155-165, Table 2（19試料の平均を計算）",
            "url": "https://kirj.ee/wp-content/plugins/kirj/pub/chem-3-2006-155-165_20230303173851.pdf"
          }
        ],
        "note": "ケモタイプ差がとても大きく（β-ツヨン0.1〜64.6%、酢酸サビニル0〜70.5%、エポキシオシメン0.1〜59.7%、サビネン・ミルセン型もある）、市販品の主流と言える型がないため、欧州の薬局で買った市販乾燥品19試料の平均値を使った（実在する1つの精油の組成ではない）。α-ツヨンはリナロールと重なって分けられず（合算で平均4.16%）、ツヨンはβ体だけの値。カンファーはこの分析に出てこず、カマズレンは0〜6.6%（平均0.80%）、EMA報告書（EMA/HMPC/751484/2016）の精油量は0.2〜1.5%、欧州薬局方の下限は0.2%。"
      }
    },
    {
      "name": "パンダンリーフ",
      "reading": "ぱんだんりーふ",
      "latin": "Pandanus amaryllifolius",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "香ばしい米、バニラ、ナッツ、青い葉",
      "role": "アジア菓子のような甘い香ばしさを作る。",
      "components": [
        "2-アセチル-1-ピロリン",
        "ヘキサナール",
        "リナロール",
        "デカン酸エチル",
        "リモネン",
        "オクタン酸エチル",
        "ドデカン酸エチル",
        "アセトフェノン"
      ],
      "literature": {
        "oil": {
          "percent": 0.00869,
          "label": "香気成分",
          "basis": "熱風乾燥（50℃・36時間）した海南島産パンダン葉の2-AP（溶媒抽出＋UPLC-MS/MS、乾燥重量あたり80.72 µg/g）と、天日乾燥（25℃・7日）した海南島産の葉粉末をSPME-GC-MSで定量したそのほかの揮発成分（2-オクタノール換算）の合計",
          "source": 0
        },
        "composition": [
          {
            "name": "2-アセチル-1-ピロリン",
            "percent": 92.93,
            "source": 0
          },
          {
            "name": "デカン酸エチル",
            "percent": 0.98,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 0.81,
            "source": 0
          },
          {
            "name": "オクタン酸エチル",
            "percent": 0.78,
            "source": 0
          },
          {
            "name": "ドデカン酸エチル",
            "percent": 0.47,
            "source": 0
          },
          {
            "name": "アセトフェノン",
            "percent": 0.31,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 0.05,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Cheng Y. et al. (2024) Foods 13(24):4010（2-AP）＋ Tang K. et al. (2025) Foods 14(6):935, Table 2 の天日乾燥 T1-2（2-AP 80.72 mg/kg に、SPMEの定量値のうち汚染由来とみられるBHT・キシレン・スチレン・ナフタレン・テトラメチルベンゼンを除いた38成分の合計 6.14 mg/kg を足して計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11728351/"
          },
          {
            "title": "Tang K. et al. (2025) Foods 14(6):935, Table 2 の天日乾燥 T1-2（0.047 mg/kg ÷ 総量 86.86 mg/kg で計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11941618/"
          }
        ],
        "note": "パンダン葉の精油の収率は見つからず、香気成分の総量は別々の2研究（どちらも海南島産の乾燥葉）の定量値の和。2-APを溶媒抽出＋LC-MS/MSの値で入れたのは、SPMEの研究の同じ試料をGC-IMSで測った2-APが約0.03 mg/kgで、直接定量の値（生葉で10.3 mg/kg〈Wongpornchai et al. 2003, J Agric Food Chem 51:457 の要旨〉、4.38 ppm〈Bhatt et al. 2021, Int J Mol Sci 22:6968〉、熱風乾燥葉で80.72 µg/g）より桁違いに小さく、ヘッドスペース法では2-APを大きく過小評価するため。その結果2-APが総量の9割を占めるが、溶媒抽出では3-メチル-2(5H)-フラノンが揮発成分の73%とされ（Jiang 1999、Tang 2025の序論）、天日乾燥のSPMEでは検出されないこの成分を含めると総量はもっと多いはず。天日乾燥品のSPMEの残りは脂肪酸エチルエステルが多く（試料の特徴の可能性）、どれも総量の1%未満。リナロールは検出されなかった。SPMEの全72成分の合計は 6.97 mg/kg。"
      }
    },
    {
      "name": "ホーリーバジル",
      "reading": "ほーりーばじる",
      "latin": "Ocimum tenuiflorum",
      "group": "ハーブ・グリーン",
      "part": "葉・花",
      "aroma": "クローブ様、バジル、薬草、甘いスパイス",
      "role": "バジルよりスパイス寄りのハーブ感を出す。",
      "components": [
        "オイゲノール",
        "メチルオイゲノール",
        "リナロール",
        "1,8-シネオール",
        "β-エレメン",
        "β-カリオフィレン",
        "cis-β-エレメン",
        "α-フムレン"
      ],
      "literature": {
        "oil": {
          "percent": 1.085,
          "min": 0.5,
          "max": 1.67,
          "basis": "ネパール（バルディヤ）で開花期に採った地上部（葉と花穂）を風乾し水蒸留3時間。冬0.50%・秋1.67%",
          "source": 0
        },
        "composition": [
          {
            "name": "オイゲノール",
            "percent": 34.95,
            "source": 0
          },
          {
            "name": "β-エレメン",
            "percent": 32.85,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 21.64,
            "source": 0
          },
          {
            "name": "cis-β-エレメン",
            "percent": 1.92,
            "source": 0
          },
          {
            "name": "メチルオイゲノール",
            "percent": 1.43,
            "source": 0
          },
          {
            "name": "α-フムレン",
            "percent": 1.18,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.52,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 0.06,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Paudel P. et al. (2025) Molecules 30(17):3581, Table 1",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12430450/"
          }
        ],
        "note": "インドのトゥルシーに多いオイゲノール＋β-エレメン＋β-カリオフィレン型の、ネパール産風乾品の秋の分析を使った。タイのホーリーバジル（生葉）はメチルオイゲノールが主のケモタイプで（Tangpao et al. 2018 Foods 7:175）、選ぶ品種で香りが大きく変わる。インド・オディシャの40系統では生葉で0.30〜1.25%（Panda et al. 2026 Sci Rep 16:23635）。"
      }
    },
    {
      "name": "ルバーブ",
      "reading": "るばーぶ",
      "latin": "Rheum rhabarbarum",
      "group": "果実・ベリー",
      "part": "葉柄",
      "aroma": "鋭い酸、赤い茎、青み、軽い土っぽさ",
      "role": "果実ではない酸の骨格と赤い印象を足す。",
      "components": [
        "リンゴ酸",
        "シュウ酸",
        "アントシアニン",
        "フラボノイド類"
      ]
    },
    {
      "name": "ローズゼラニウム",
      "reading": "ろーずぜらにうむ",
      "latin": "Pelargonium graveolens",
      "group": "花・フローラル",
      "part": "葉",
      "aroma": "バラ、ゼラニウム、グリーン、シトラス",
      "role": "ローズより青く、花と葉の間の香りを作る。",
      "components": [
        "ゲラニオール",
        "シトロネロール",
        "リナロール",
        "ローズオキサイド",
        "メントン",
        "β-カリオフィレン",
        "ビリジフロレン",
        "チグリン酸ゲラニル",
        "チグリン酸2-フェニルエチル",
        "δ-カジネン",
        "ネロール"
      ],
      "literature": {
        "oil": {
          "percent": 1.34,
          "min": 0.3,
          "max": 1.34,
          "basis": "開花期の地上部（トルコ産）を室温で陰干し（水分約10%）し、100 gを粉砕して水蒸留3時間。最小はモロッコ産の葉を乾燥法を変えて乾かした値（乾燥重量あたり0.3〜1.27% w/w）の下限",
          "source": 0
        },
        "composition": [
          {
            "name": "シトロネロール",
            "percent": 39.87,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 17.09,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 7.42,
            "source": 0
          },
          {
            "name": "メントン",
            "percent": 4.48,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 3.36,
            "source": 0
          },
          {
            "name": "ビリジフロレン",
            "percent": 2.22,
            "source": 0
          },
          {
            "name": "ローズオキサイド",
            "percent": 2,
            "source": 0
          },
          {
            "name": "チグリン酸ゲラニル",
            "percent": 1.68,
            "source": 0
          },
          {
            "name": "チグリン酸2-フェニルエチル",
            "percent": 1.34,
            "source": 0
          },
          {
            "name": "δ-カジネン",
            "percent": 1.06,
            "source": 0
          },
          {
            "name": "ネロール",
            "percent": 1.03,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Akçura S., Çakmakçı R., Ürüşan Z. (2023) Grasas y Aceites 74(1):e497, 本文・Figure 1（最小は El Broudi S. et al. (2022) J Essent Oil Bear Plants 25(3):508-523 の要旨）",
            "url": "https://doi.org/10.3989/gya.0226221"
          }
        ],
        "note": "トルコの開花期の地上部（茎を含む）を陰干しした1産地の値で、同じ研究でも天日干し0.70%・60℃乾燥0.42%と乾燥法で大きく変わり、モロッコの乾燥葉は0.3〜1.27%（乾燥重量あたり）。成分も陰干し試料の値で、市販のゼラニウム油に多いギ酸シトロネリル・イソメントン（論文が引くISO規格ではそれぞれ4〜12%・4〜10%）はこの試料では検出されず、「メントン」4.48%はイソメントンを含む可能性がある。ローズオキサイドはcis体だけの値。"
      }
    },
    {
      "name": "大和橘",
      "reading": "やまとたちばな",
      "latin": "Citrus tachibana",
      "group": "和ボタニカル",
      "part": "果皮",
      "aroma": "古い和柑橘、青み、明るい皮、軽い苦味",
      "role": "柚子とは違う日本固有柑橘の印象を足す。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "β-ピネン",
        "リナロール",
        "β-ミルセン",
        "δ-3-カレン",
        "α-ピネン",
        "ノナナール",
        "β-オシメン",
        "ゲルマクレンD"
      ],
      "literature": {
        "oil": {
          "percent": 0.12,
          "basis": "フランス・コルシカ島の保存園の'Tachibana'（C. tachibana）の熟果の果皮表層をおろし、遠心分離で油を分けた（加熱なし）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 83.4,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 7.1,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 1.8,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 1.6,
            "source": 0
          },
          {
            "name": "δ-3-カレン",
            "percent": 1.1,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 0.9,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.5,
            "source": 0
          },
          {
            "name": "ノナナール",
            "percent": 0.5,
            "source": 0
          },
          {
            "name": "β-オシメン",
            "percent": 0.4,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 0.3,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Luro et al. (2023) Horticulturae 9(5):577, 補足資料 'PEO yield' シート",
            "url": "https://doi.org/10.3390/horticulturae9050577"
          }
        ],
        "note": "日本（奈良など）の大和橘そのものの精油データは見つからず、フランス・コルシカ島の保存園で育った'Tachibana'1系統の値。組成はリモネン/γ-テルピネン型で、ほかのマンダリンにないδ-3-カレン（1.1%）を含むのが特徴。収率はおろし皮を遠心分離する方法の値で、この方法では温州みかん系でも平均0.5%と低めに出る（生果皮の溶媒抽出では0.70%、温州みかんの項）。Tachibana の0.12%は小果で果皮が薄いことを反映している可能性があるが、実際の精油量より低いかもしれない。"
      }
    },
    {
      "name": "苺",
      "reading": "いちご",
      "latin": "Fragaria x ananassa",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "甘い赤い果実、キャンディ、酸、花",
      "role": "親しみやすい赤い果実感と甘いトップを作る。",
      "components": [
        "フラネオール",
        "酢酸エチル",
        "酢酸ヘキシル",
        "リナロール",
        "リンゴ酸",
        "ゲラニオール",
        "ヘキサン酸ヘキシル",
        "酪酸メチル",
        "ヘキサン酸メチル",
        "trans-2-ヘキセノール",
        "メシフラン",
        "酪酸エチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.000155,
          "min": 0.000111,
          "max": 0.000196,
          "label": "香気成分",
          "basis": "スペイン・ウエルバの養液栽培3品種（カマロサ、カンドンガ、フェスティバル）の生の完熟果。SPME-GC-FIDで標準品のある23成分を定量（2-オクタノール換算）した合計",
          "source": 0
        },
        "composition": [
          {
            "name": "ゲラニオール",
            "percent": 24.05,
            "source": 0
          },
          {
            "name": "フラネオール",
            "percent": 16.47,
            "source": 0
          },
          {
            "name": "ヘキサン酸ヘキシル",
            "percent": 11.85,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 8.6,
            "source": 0
          },
          {
            "name": "酪酸メチル",
            "percent": 7.64,
            "source": 0
          },
          {
            "name": "ヘキサン酸メチル",
            "percent": 3.11,
            "source": 0
          },
          {
            "name": "trans-2-ヘキセノール",
            "percent": 2.45,
            "source": 0
          },
          {
            "name": "メシフラン",
            "percent": 2.19,
            "source": 0
          },
          {
            "name": "酪酸エチル",
            "percent": 1.95,
            "source": 0
          },
          {
            "name": "酢酸エチル",
            "percent": 0.26,
            "source": 1
          },
          {
            "name": "酢酸ヘキシル",
            "percent": 0.26,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "González-Domínguez R. et al. (2020) Foods 9(6):768, Table 1（23成分の合計 Camarosa 1107.5・Candonga 1571.1・Festival 1960.6 μg/kg を計算し、その平均）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7353567/"
          },
          {
            "title": "Kim I. et al. (2022) Molecules 27(19):6599, Table 3（韓国「雪香」完熟果の貯蔵前 B0h）（10 ÷ 同じ試料の揮発成分の合計3787 μg/kg で計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9571338/"
          }
        ],
        "note": "標準品のある23成分だけの合計なので総量は少なめに出ている。ゲラニオールが多いのはこの試料の特徴で、品種・産地で大きく変わる。酢酸エチルと酢酸ヘキシルはこの分析になく、韓国「雪香」の完熟果（別の研究）の割合で補った。"
      }
    },
    {
      "name": "杉",
      "reading": "すぎ",
      "latin": "Cryptomeria japonica",
      "group": "骨格・樹脂",
      "part": "葉・木部",
      "aroma": "杉材、乾いた森、樹脂、落ち着いた木質",
      "role": "ヒノキより乾いた針葉樹感と和の木質を足す。",
      "components": [
        "α-ピネン",
        "セドロール",
        "δ-カジネン",
        "リモネン",
        "エレモール",
        "テルピネン-4-オール",
        "サビネン",
        "γ-テルピネン",
        "β-ミルセン",
        "α-オイデスモール"
      ],
      "literature": {
        "oil": {
          "percent": 2.7,
          "min": 2.3,
          "max": 3.1,
          "basis": "スギの葉（国内）の絶乾重量100 gあたりの精油含量。生葉を移動式装置で水蒸気蒸留した実収率は生葉重量の0.6〜0.7%",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 23.5,
            "source": 1
          },
          {
            "name": "エレモール",
            "percent": 10.8,
            "source": 1
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 8.2,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 7.6,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 6,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 5.1,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 4.3,
            "source": 1
          },
          {
            "name": "α-オイデスモール",
            "percent": 4.2,
            "source": 1
          },
          {
            "name": "セドロール",
            "percent": 2,
            "source": 1
          },
          {
            "name": "δ-カジネン",
            "percent": 1.2,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "佐々木尚三・小沼順一 (1985) 日本林学会誌 67(2):67-71",
            "url": "https://www.jstage.jst.go.jp/article/jjfs1953/67/2/67_2_67/_article/-char/ja/"
          },
          {
            "title": "関根伸浩・澁谷栄・谷田貝光克 (2012) 木材学会誌 58(1):44-53, Table 2（スギ針葉）",
            "url": "https://www.jstage.jst.go.jp/article/jwrs/58/1/58_1_44/_article/-char/ja/"
          }
        ],
        "note": "葉（針葉）の精油を採用し、成分は秋田県能代市の針葉1試料（6月、原表は文字化けのため画像から転記、セドロールは「(epi-)-cedrol」で異性体の区別なし）。国内でもケモタイプ差が大きく、山形の葉油は ent-カウレン22.5%・エレモール22.4%・テルピネン-4-オール21.0%・α-ピネン2.0%（Yamashita ら 2015 J Wood Sci）で、この試料のジテルペン炭化水素（フィロクラデン2.1%・カウレン1.1%、系統名なら「ジテルペン」）は揮発しにくいので other_major に入れていない。生葉の実収率は0.5〜0.7%（佐々木・小沼 1985、立山杉で約0.5%：Matsunaga ら 2000）、材の精油は0.05%（中性油、Shieh ら 1981）と少ない。"
      }
    },
    {
      "name": "ヒバ",
      "reading": "ひば",
      "latin": "Thujopsis dolabrata / Chamaecyparis obtusa var. formosana",
      "group": "骨格・樹脂",
      "part": "木部・葉",
      "aroma": "ヒバ材、樹脂、湿った木、清潔感",
      "role": "ヒノキに近いが、より重く湿った木質を作る。",
      "components": [
        "ヒノキチオール",
        "ツヨプセン",
        "α-ピネン",
        "セドロール",
        "β-ドラブリン"
      ],
      "literature": {
        "oil": {
          "percent": 1,
          "min": 1,
          "max": 1.5,
          "basis": "青森ヒバの製材廃材（おが粉）を工場で水蒸気蒸留（約1%）。範囲1〜1.5%は野田・清水 (2000) 生活衛生 44(1):13-19",
          "source": 0
        },
        "composition": [
          {
            "name": "ツヨプセン",
            "percent": 55,
            "source": 0
          },
          {
            "name": "セドロール",
            "percent": 7.5,
            "source": 0
          },
          {
            "name": "ヒノキチオール",
            "percent": 1.5,
            "source": 0
          },
          {
            "name": "β-ドラブリン",
            "percent": 1.5,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "岡部敏弘・小野浩之・小舘澄枝 (2012) におい・かおり環境学会誌 43(2):128-137（範囲は野田・清水 2000 生活衛生 44(1):13-19）",
            "url": "https://www.jstage.jst.go.jp/article/jao/43/2/43_128/_article/-char/ja/"
          }
        ],
        "note": "青森ヒバ（ヒノキアスナロ）材の精油で、成分は総説の表（岡部ら『青森ヒバの不思議』1990の引用、原表は文字化けのため画像から転記）の範囲の中央値を使い、α-ピネンの値は見つからなかった。表の残り24〜42%はパラサイメン・ジヒドロサイメン・ウィドロールなどのセスキテルペン化合物で内訳がなく、シトロネル酸（1〜2%）は酸性成分のため入れていない。乾材あたりの含量は1〜2.0 mL/100 g（林野庁 2018 表5）で、台湾ヒノキ（C. obtusa var. formosana）の材油は別物。"
      }
    },
    {
      "name": "ヨモギ",
      "reading": "よもぎ",
      "latin": "Artemisia princeps",
      "group": "和ボタニカル",
      "part": "葉",
      "aroma": "草餅、薬草、青み、ほろ苦さ",
      "role": "和菓子や薬草茶を思わせる青い苦味を足す。",
      "components": [
        "1,8-シネオール",
        "ツヨン",
        "カンファー",
        "ボルネオール",
        "τ-カジノール"
      ],
      "literature": {
        "oil": {
          "percent": 1.4,
          "basis": "ソウルの市場で買った乾燥ヨモギ（韓国のヨモギ A. princeps var. orientalis）の地上部を砕き、水蒸気蒸留3時間",
          "source": 0
        },
        "composition": [
          {
            "name": "ボルネオール",
            "percent": 12.1,
            "source": 0
          },
          {
            "name": "ツヨン",
            "percent": 8.7,
            "source": 0
          },
          {
            "name": "τ-カジノール",
            "percent": 6.7,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 6.2,
            "source": 0
          },
          {
            "name": "カンファー",
            "percent": 2.9,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Chung M.S. (2017) Food Sci Biotechnol 26(5):1457-1461",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6049784/"
          }
        ],
        "note": "日本のヨモギの精油量・組成表はJ-STAGE等で見つからず、同じ種の韓国の市販乾燥品（地上部）の値を使った。論文に載っているのは主成分4つとカンファーだけで、残りの成分は不明。日本産の葉の抽出物でもボルネオール・α-ツヨン・1,8-シネオールが主（Umano et al. 2000 J Agric Food Chem 48:3463、要旨）だが、韓国の自生株を4年分析した例ではツヨン3.56〜23.11%、カンファー0〜11.90%と年によって大きく変わる（Choi 2015 Korean J Food Nutr 28:533, Table 1）。"
      }
    },
    {
      "name": "海苔",
      "reading": "のり",
      "latin": "Pyropia spp.",
      "group": "海・ミネラル",
      "part": "海藻",
      "aroma": "焼き海苔、磯、旨み、軽い硫黄感",
      "role": "昆布より香ばしく、海のニュアンスをはっきり出す。",
      "components": [
        "ジメチルスルフィド",
        "ヨード様成分",
        "グルタミン酸",
        "ヘキサナール",
        "2-エチル-1-ヘキサノール",
        "ジアセチル",
        "アセトアルデヒド",
        "1-オクテン-3-オール",
        "イソバレルアルデヒド",
        "アセトイン",
        "1-ペンテン-3-オール"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "ジメチルスルフィド",
            "percent": 19.01,
            "source": 0
          },
          {
            "name": "2-エチル-1-ヘキサノール",
            "percent": 10.97,
            "source": 0
          },
          {
            "name": "ジアセチル",
            "percent": 8.63,
            "source": 0
          },
          {
            "name": "アセトアルデヒド",
            "percent": 7.82,
            "source": 0
          },
          {
            "name": "1-オクテン-3-オール",
            "percent": 3.69,
            "source": 0
          },
          {
            "name": "イソバレルアルデヒド",
            "percent": 3.47,
            "source": 0
          },
          {
            "name": "アセトイン",
            "percent": 3.4,
            "source": 0
          },
          {
            "name": "1-ペンテン-3-オール",
            "percent": 2.96,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 2.79,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Garicano Vilar E., O'Sullivan M.G., Kerry J.P., Kilcawley K.N. (2021) J Sci Food Agric 101(3):1228-1238, S3 Table（HS-SPME。列は H. elongata, U. pinnatifida, P. umbilicalis, P. palmata, A. esculenta, Fucoxanthin extract。P. umbilicalis の109成分の面積の合計 2.736×10⁷ に対する割合を計算）",
            "url": "https://hdl.handle.net/10468/10663"
          }
        ],
        "note": "日本の乾海苔（Pyropia）の香気成分の総量・組成は見つからず、アイルランド産の乾燥ノリ（Porphyra umbilicalis、風乾・除湿品を粉砕）のHS-SPME（40℃）の面積%で代用した（面積の17%を占めるアセトンは香りへの寄与が小さく除いた）。量の手がかりとして、市販乾燥黒のりのジメチルスルフィドは6.1 µg/g、ジメチルジスルフィドは0.05 µg/g（松浦・藤山・池内 2005 分析化学 54(11):1075-1082, Table 6、https://www.jstage.jst.go.jp/article/bunsekikagaku/54/11/54_11_1075/_article/-char/ja/）。乾燥アマノリ（P. tenera）のマイクロ波水蒸留油ではβ-イオノン20.9%、2,6-ノナジエナール8.7%、ヘキサナール4.7%とされるが（Patra et al. 2017 Chem Cent J 11:34）、収率1.41%は香気成分の量としては高すぎ、組成にもジメチルスルフィドが出ないため使わなかった。"
      }
    },
    {
      "name": "金柑",
      "reading": "きんかん",
      "latin": "Citrus japonica",
      "group": "シトラス",
      "part": "果皮・果実",
      "aroma": "甘い小型柑橘、皮、軽い苦味",
      "role": "オレンジより小粒で和菓子寄りの丸い柑橘感を足す。",
      "components": [
        "リモネン",
        "ミルセン",
        "リナロール",
        "デカナール",
        "α-ピネン",
        "α-テルピネオール"
      ],
      "literature": {
        "oil": {
          "percent": 2,
          "basis": "中国・四川省成都の市場で買った寧波金柑（F. crassifolia）の生果皮を粉砕し、水蒸留4時間",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 97.19,
            "source": 1
          },
          {
            "name": "ミルセン",
            "percent": 1.34,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 0.32,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 0.28,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.14,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Wang et al. (2012) Int J Mol Sci 13(3):3382-3393",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3317718/"
          },
          {
            "title": "Yang et al. (2023) Pharmaceutics 15(6):1595, Table 3（KU＝Citrus japonica、済州島産の果皮の水蒸留油）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10301132/"
          }
        ],
        "note": "収率は四川省産の寧波金柑の生果皮の値（この油はリモネン74.79%、ミルセン7.11%で酸化生成物が多く、典型から外れるので組成には使わなかった）。組成は済州島産 C. japonica 果皮の水蒸留油（同論文の収率は乾物基準9.52 mL/100 g）。日本の金柑（F. japonica）の冷圧油もリモネン93.73%、ミルセン1.84%（Choi 2005, J Agric Food Chem 53:1642 の要旨）と近い。デカナールは検出されなかった。果実まるごと使う場合は果肉の分だけ薄まる。"
      }
    },
    {
      "name": "唐辛子",
      "reading": "とうがらし",
      "latin": "Capsicum annuum",
      "group": "シード・スパイス",
      "part": "果実",
      "aroma": "青い唐辛子、乾いた辛味、軽い果実感",
      "role": "香りより刺激と温度感を設計する素材。",
      "components": [
        "カプサイシン",
        "β-カリオフィレン",
        "リナロール",
        "ヘキサナール",
        "ヒマカラ-3(12),4-ジエン",
        "γ-ヒマカレン",
        "2-メチル酪酸4-メチルペンチル",
        "o-シメン",
        "2-オクタノン",
        "α-ヒマカレン",
        "4-メチルペンタン酸4-メチルペンチル",
        "γ-テルピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.0128,
          "min": 0.00937,
          "max": 0.0145,
          "label": "香気成分",
          "basis": "中国貴州省遵義産の乾燥唐辛子2品種（朝天椒・線椒）を熱風乾燥（75℃12時間）または天日乾燥（約5日）したもの（水分約7%）。SPME-GC-MSで2-オクタノール換算の定量値（μg/g）を合計し、4試料の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "ヒマカラ-3(12),4-ジエン",
            "percent": 18.12,
            "source": 0
          },
          {
            "name": "γ-ヒマカレン",
            "percent": 7.2,
            "source": 0
          },
          {
            "name": "2-メチル酪酸4-メチルペンチル",
            "percent": 2.4,
            "source": 0
          },
          {
            "name": "o-シメン",
            "percent": 2.25,
            "source": 0
          },
          {
            "name": "2-オクタノン",
            "percent": 2.09,
            "source": 0
          },
          {
            "name": "α-ヒマカレン",
            "percent": 2.06,
            "source": 0
          },
          {
            "name": "4-メチルペンタン酸4-メチルペンチル",
            "percent": 2.05,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 1.98,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 0.88,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.39,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Wu D. et al. (2025) Food Chem X 29:102757, Table S2（熱風・天日乾燥の4試料それぞれで145成分の定量値を合計し、平均128.2 μg/gを計算。範囲は4試料の93.7〜144.6 μg/g）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12275960/"
          }
        ],
        "note": "乾燥唐辛子を蒸留した精油の収率は査読論文で見つからず、SPMEの2-オクタノール換算の半定量値の合計（アルカン・酢酸なども含む）を使った。陰干しの2試料は262〜300 μg/gと多いが、増えた分の多くは香りの弱い脂肪酸メチルエステルで、β-カリオフィレンは陰干し試料でだけ0.46〜0.52 μg/g検出された（熱風・天日の4試料では不検出）。カプサイシンは揮発しない。"
      }
    },
    {
      "name": "仏手柑",
      "reading": "ぶっしゅかん",
      "latin": "Citrus medica var. sarcodactylis",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "濃いシトロン、白い皮、花、鋭い柑橘",
      "role": "レモンより香水的で、ピール感を強く出せる。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "リナロール",
        "シトラール",
        "β-オシメン",
        "α-ピネン",
        "β-ピネン",
        "β-ミルセン",
        "α-テルピネン",
        "α-ベルガモテン"
      ],
      "literature": {
        "oil": {
          "percent": 1.07,
          "basis": "中国・浙江省金華産の生果実（果肉がほぼなく果皮が主体）を水蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 47.6,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 29.46,
            "source": 0
          },
          {
            "name": "β-オシメン",
            "percent": 7.29,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 3.32,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 1.89,
            "source": 0
          },
          {
            "name": "シトラール",
            "percent": 1.65,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 1.55,
            "source": 0
          },
          {
            "name": "α-テルピネン",
            "percent": 0.69,
            "source": 0
          },
          {
            "name": "α-ベルガモテン",
            "percent": 0.45,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.11,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Deng et al. (2017) Medicines 4(1):1",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5597067/"
          }
        ],
        "note": "組成は浙江省金華産の生果実を冷圧した果汁の上層油を、短時間の減圧蒸留（65〜85℃）で分けた油。同じ論文の普通の水蒸留油はp-シメン17.6%（加熱による変化）、リモネン60.1%、γ-テルピネン6.2%。日本産仏手柑の溶媒抽出油（Shiota 1990, Flavour Fragr J 5:33、同論文Table 1に再掲）もリモネン47.79%、γ-テルピネン32.08%と近い。β-オシメンは(Z)体5.914%と(E)体1.377%の合計。"
      }
    },
    {
      "name": "蜂蜜",
      "reading": "はちみつ",
      "latin": "Honey",
      "group": "甘味・樽香",
      "part": "蜜",
      "aroma": "蜂蜜、花、ワックス、軽い発酵感",
      "role": "香りの丸みと柔らかな甘い印象を加える。植物ではないため補助素材として扱う。",
      "components": [
        "2-フェニルエタノール",
        "ベンズアルデヒド",
        "フルフラール",
        "酢酸エチル",
        "1-ノナノール",
        "リナロールオキシド類"
      ],
      "literature": {
        "oil": {
          "percent": 0.000455,
          "min": 0.000455,
          "max": 0.000531,
          "label": "香気成分",
          "basis": "スーパーと養蜂家から買った蜂蜜38試料（多くはEUとEU外の蜂蜜の混合）をITEX-DHS-GC-MSで分析（標準物質で校正）。対象13成分のうちエタノールを除く12成分の平均濃度の合計。代表値は花の蜂蜜22試料の4550.3 ng/g、範囲はアカシア4試料の5314.0 ng/gまで",
          "source": 0
        },
        "composition": [
          {
            "name": "2-フェニルエタノール",
            "percent": 31.87,
            "source": 0
          },
          {
            "name": "1-ノナノール",
            "percent": 19.12,
            "source": 0
          },
          {
            "name": "リナロールオキシド類",
            "percent": 1.03,
            "source": 0
          },
          {
            "name": "ベンズアルデヒド",
            "percent": 0.7,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Kaziur-Cegla W., Jochmann M.A., Molt K., Bruchmann A., Schmidt T.C. (2022) Food Chem X 14:100337, Table 2（品種ごとの平均から、エタノールを除く12成分の合計を計算：花の蜂蜜 4550.3・森の蜂蜜 5227.3・アカシア 5314.0 ng/g。対象成分だけの合計）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9130071/"
          }
        ],
        "note": "校正した定量値は対象13成分だけで、フェニルアセトアルデヒド・ジメチルスルフィドなど他の揮発成分は含まれず、実際の総量はこれより多い（12成分の合計の約47%は2-ブタノール、オクタン酸、ノナン酸、安息香酸で other_major から除いた）。フルフラールはこの分析の対象外で、米国の市販蜂蜜4種のSPMEでは全イオン面積の4.5〜8.9%（Mulheron et al. 2024 J Food Sci, PMC11673473, Table 3、定量値なし）。酢酸エチルはブラジルの蜂蜜8試料で貯蔵360日以降に一部で検出されただけ（da Silva et al. 2020 J Food Sci Technol 57:1167、要旨）で null。成熟アカシア蜂蜜のSPME半定量（111成分の合計0.81 µg/g、PMC12553060）は2-フェニルエタノールを31 ng/gと校正値の約60分の1に出しており使わなかった。"
      }
    },
    {
      "name": "白朮",
      "reading": "びゃくじゅつ",
      "latin": "Atractylodes japonica / A. macrocephala",
      "group": "根・土台",
      "part": "根茎",
      "aroma": "土、乾いた根、ほのかな甘さ、薬草",
      "role": "土っぽさとほのかな甘さで、アフターに落ち着きと奥行きを出す。",
      "components": [
        "アトラクチロン",
        "β-エレメン",
        "アトラクチレノリド類",
        "3,7-グアイアジエン",
        "セリナ-3,7(11)-ジエン",
        "β-セリネン",
        "ar-クルクメン",
        "アロマデンドレン",
        "アリストロン"
      ],
      "aliases": [
        "オケラ",
        "ビャクジュツ"
      ],
      "literature": {
        "oil": {
          "percent": 1.33,
          "basis": "唐白朮（A. macrocephala、中国浙江省磐安産）の乾燥した刻み根茎を粉砕し、水蒸留約5時間（中国薬局方の方法）",
          "source": 0
        },
        "composition": [
          {
            "name": "アトラクチロン",
            "percent": 41.92,
            "source": 0
          },
          {
            "name": "3,7-グアイアジエン",
            "percent": 9.57,
            "source": 0
          },
          {
            "name": "セリナ-3,7(11)-ジエン",
            "percent": 5.57,
            "source": 0
          },
          {
            "name": "β-セリネン",
            "percent": 4.88,
            "source": 0
          },
          {
            "name": "ar-クルクメン",
            "percent": 3.65,
            "source": 0
          },
          {
            "name": "アロマデンドレン",
            "percent": 3.23,
            "source": 0
          },
          {
            "name": "アリストロン",
            "percent": 2.69,
            "source": 0
          },
          {
            "name": "β-エレメン",
            "percent": 0.25,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Gu S. et al. (2019) Molecules 24(16):2956",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6719198/"
          }
        ],
        "note": "唐白朮（A. macrocephala）の生薬（収穫後に刻んで室温乾燥）の値で、和白朮（A. japonica）の精油組成は見つからなかった。和白朮と A. ovata（=A. macrocephala）の根茎はアトラクチロンを乾燥重量の0.35〜3.99%含む（Kohjyouma 1997）。アトラクチレノリド類は名前で同定されておらず null、other_major の同定はNISTライブラリ照合のみで一部不確か。"
      }
    },
    {
      "name": "ラベージ",
      "reading": "らべーじ",
      "latin": "Levisticum officinale",
      "group": "根・土台",
      "part": "根",
      "aroma": "セロリ、甘い根、スープのような旨味感、スパイス",
      "role": "セロリに似た甘くスパイシーな香りで、ミドルからアフターに厚みを出す。",
      "components": [
        "リグスチリド",
        "β-フェランドレン",
        "テルピニルアセテート",
        "ブチリデンフタリド",
        "ネオクニジリド",
        "3-n-ブチルフタリド",
        "スパツレノール",
        "ケッサン",
        "4-ビニルグアイアコール"
      ],
      "aliases": [
        "ロベージ",
        "ラベッジ",
        "ラベージルート"
      ],
      "literature": {
        "oil": {
          "percent": 0.8,
          "min": 0.6,
          "max": 1,
          "basis": "乾燥根（生薬 Levistici radix）の文献値（EMA評価報告書が引用）",
          "source": 0
        },
        "composition": [
          {
            "name": "ブチリデンフタリド",
            "percent": 37.3,
            "source": 1
          },
          {
            "name": "リグスチリド",
            "percent": 10.37,
            "source": 1
          },
          {
            "name": "ネオクニジリド",
            "percent": 8.9,
            "source": 1
          },
          {
            "name": "3-n-ブチルフタリド",
            "percent": 6.8,
            "source": 1
          },
          {
            "name": "スパツレノール",
            "percent": 6.3,
            "source": 1
          },
          {
            "name": "ケッサン",
            "percent": 2.1,
            "source": 1
          },
          {
            "name": "4-ビニルグアイアコール",
            "percent": 1.8,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 1.26,
            "source": 1
          },
          {
            "name": "テルピニルアセテート",
            "percent": 0.15,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "EMA HMPC (2012) Assessment report on Levisticum officinale Koch, radix (EMA/HMPC/524623/2011)",
            "url": "https://www.ema.europa.eu/en/documents/herbal-report/final-assessment-report-levisticum-officinale-koch-radix_en.pdf"
          },
          {
            "title": "Spréa R.M. et al. (2020) Resources 9(7):81, Table 2（Clevenger 精油）（Z体29＋E体8.3の合計）",
            "url": "https://www.mdpi.com/2079-9276/9/7/81"
          }
        ],
        "note": "組成はスペインの市販乾燥根を水蒸留した精油（収率はごく低く数値なし）で、(Z)-リグスチリドが少なくブチリデンフタリドが多い。文献上の根の精油は(Z)-リグスチリド37.0〜67.5%・β-フェランドレン1.7〜15.5%が普通とされる（EMA 2012）。テルピニルアセテートはこの分析の精油では検出されず、EMAの文献値で補った（葉の精油では主成分）。"
      }
    },
    {
      "name": "根セロリ",
      "reading": "ねせろり",
      "latin": "Apium graveolens var. rapaceum",
      "group": "根・土台",
      "part": "根",
      "aroma": "セロリ、根の甘さ、青い野菜、ナッツ様",
      "role": "セロリらしい青さと根の甘さで、野菜のような厚みを足す。",
      "components": [
        "リモネン",
        "β-ミルセン",
        "3-n-ブチルフタリド",
        "セダネノリド",
        "β-ピネン",
        "γ-テルピネン",
        "β-オシメン",
        "ネオクニジリド",
        "p-シメン",
        "β-セリネン"
      ],
      "aliases": [
        "セロリアック",
        "セルリアック",
        "セロリルート"
      ],
      "literature": {
        "oil": {
          "percent": 0.00515,
          "min": 0.00319,
          "max": 0.00676,
          "label": "香気成分",
          "basis": "ベルギーで育てた根セロリ6品種（1986・1987年の10試料）の生の根を同時蒸留抽出（10時間）し、内部標準で定量したテルペン類・フタリド類・ペンチルシクロヘキサジエンの合計（生重量あたり）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 41.82,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 17.31,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 8.12,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 7.36,
            "source": 0
          },
          {
            "name": "β-オシメン",
            "percent": 7.33,
            "source": 0
          },
          {
            "name": "ネオクニジリド",
            "percent": 5.26,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 3.29,
            "source": 0
          },
          {
            "name": "3-n-ブチルフタリド",
            "percent": 1.63,
            "source": 0
          },
          {
            "name": "β-セリネン",
            "percent": 1.4,
            "source": 0
          },
          {
            "name": "セダネノリド",
            "percent": 1.09,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Van Wassenhove F., Dirinck P., Vulsteke G., Schamp N. (1990) HortScience 25(5):556-559, Table 3・4（10試料の合計 31,915〜67,566 μg/kg を個々の値から計算し、その平均 51,497 μg/kg）",
            "url": "https://journals.ashs.org/view/journals/hortsci/25/5/article-p556.xml"
          }
        ],
        "note": "生の根の値（乾燥根の値は見つからなかった）。論文は「テルペン類とフタリド類の合計」を香りの量の指標としており、それにセロリ様の1-ペンチルシクロヘキサジエン（0.9%）を加えた総量で、同じ表のピリジン（平均9.8 mg/kg）・ヘキサナール（4.0）・フルフラール（3.5）・3-メチルブタナール（2.6）と分岐アルカン類は指標に入っていないため除いた。表の合計行のうち3か所（1986年 Monarch のフタリド類、Snehvide のテルペン類、1987年 Cobra のフタリド類）は個々の値の和と合わないので個々の値から計算し、オシメンは異性体不明（x・yの合計）を β-オシメンとした。第2弾の葉柄セロリ（var. dulce）根の精油はフタリド類が主だったが、根セロリのこの分析ではリモネン・β-ピネンなどのモノテルペンが大半を占める。"
      }
    },
    {
      "name": "パセリ根",
      "reading": "ぱせりね",
      "latin": "Petroselinum crispum var. tuberosum",
      "group": "根・土台",
      "part": "根",
      "aroma": "パセリ、青い根、ほのかな甘さ、ハーブ",
      "role": "パセリに似た青い香りと根の甘さで、草の爽やかさを加える。",
      "components": [
        "1,3,8-p-メンタトリエン",
        "β-フェランドレン",
        "ミリスチシン",
        "アピオール",
        "β-ピネン",
        "リグスチリド",
        "β-ミルセン",
        "エレミシン"
      ],
      "aliases": [
        "パセリルート",
        "ハンブルクパセリ"
      ],
      "literature": {
        "oil": {
          "percent": 0.032,
          "min": 0.013,
          "max": 0.045,
          "basis": "生の根（ポーランド産の根パセリ15品種、2年）を水蒸留3時間",
          "source": 0
        },
        "composition": [
          {
            "name": "アピオール",
            "percent": 33.25,
            "source": 0
          },
          {
            "name": "ミリスチシン",
            "percent": 14.95,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 10.9,
            "source": 0
          },
          {
            "name": "β-フェランドレン",
            "percent": 8.65,
            "source": 0
          },
          {
            "name": "リグスチリド",
            "percent": 2.9,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.7,
            "source": 0
          },
          {
            "name": "1,3,8-p-メンタトリエン",
            "percent": 2,
            "source": 0
          },
          {
            "name": "エレミシン",
            "percent": 1.5,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Gruszecki R., Walasek-Janusz M. (2022) Agronomy 12(8):1949, Table 2",
            "url": "https://www.mdpi.com/2073-4395/12/8/1949"
          }
        ],
        "note": "ポーランドの根パセリ15品種・2年の平均を計算した値で、生の根（乾燥根の値は見つからなかった）。品種と年による差が大きく、アピオール18.7〜46.7%、ミリスチシン6.5〜27.7%。精油の約1割はファルカリノール（ポリアセチレン、香りへの寄与は小さい）で other_major から除いた。"
      }
    },
    {
      "name": "ゲンチアナ",
      "reading": "げんちあな",
      "latin": "Gentiana lutea",
      "group": "根・土台",
      "part": "根",
      "aroma": "強い苦味、土、根の甘さ",
      "role": "強い苦味の根。苦味の成分は蒸留液には移りにくく、蒸留では土っぽい根の香りが中心になる。",
      "components": [
        "ゲンチオピクロシド",
        "アマロゲンチン",
        "ゲンチシン"
      ],
      "aliases": [
        "ゲンチアン",
        "ジェンシャン",
        "ゲンチアナルート"
      ]
    },
    {
      "name": "甘夏",
      "reading": "あまなつ",
      "latin": "Citrus natsudaidai",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "和柑橘、明るい皮、軽い苦味、柔らかな甘さ",
      "role": "柚子より丸く、オレンジより和の酸と苦味を出す。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "ヌートカトン",
        "リナロール",
        "β-ミルセン",
        "α-ピネン",
        "オクタナール",
        "β-ピネン",
        "β-フェランドレン",
        "デカナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.4,
          "basis": "夏みかん（韓国・済州島産）の成熟果皮を水蒸留30時間。乾物基準2.06%を果皮の水分80.06〜81.37%で生重量基準に換算",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 80.68,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 5.3,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 2.25,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 1.3,
            "source": 1
          },
          {
            "name": "オクタナール",
            "percent": 0.89,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 0.49,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 0.46,
            "source": 1
          },
          {
            "name": "デカナール",
            "percent": 0.28,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.11,
            "source": 1
          },
          {
            "name": "ヌートカトン",
            "percent": 0.03,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Yang, Choi, Lee, Kim & Park (2022) J Korean Wood Sci Technol 50(4):272-282（乾物基準2.06%×(1−0.8006〜0.8137)＝0.38〜0.41%を計算）",
            "url": "https://www.woodj.org/archive/view_article?pid=wood-50-4-272"
          },
          {
            "title": "Lan Phi, Nishiyama, Choi & Sawamura (2006) Biosci Biotechnol Biochem 70(8):1832-1838, Table 1（高知産の手搾り冷圧油、% w/w）",
            "url": "https://www.jstage.jst.go.jp/article/bbb/70/8/70_50705/_article"
          }
        ],
        "note": "甘夏（川野夏橙、夏みかんの枝変わり）そのものの精油データは見つからず、夏みかん（C. natsudaidai）の値を使った。組成は高知県果樹試験場産の手搾り冷圧油1試料（同定60成分で94.08%）。収率は韓国・済州島産の成熟果皮を30時間水蒸留した値（乾物基準2.06%）を生重量基準に換算したもので、水分は熟度3段階をまとめた範囲。同じ研究グループの別分析（Yang et al. 2023）も乾物基準2.03 mL/100 gと近い。"
      }
    },
    {
      "name": "ブラッドオレンジ",
      "reading": "ぶらっどおれんじ",
      "latin": "Citrus sinensis",
      "group": "シトラス",
      "part": "果皮・果実",
      "aroma": "赤いオレンジ、甘い柑橘、軽いベリー感",
      "role": "オレンジの丸みに赤い果実感を少し足す。",
      "components": [
        "リモネン",
        "アントシアニン",
        "リナロール",
        "デカナール",
        "β-ミルセン",
        "サビネン",
        "α-ピネン",
        "β-フェランドレン",
        "オクタナール",
        "テルピネン-4-オール"
      ],
      "literature": {
        "oil": {
          "percent": 0.52,
          "basis": "チュニジア産オレンジ'マルテーズ'（Lsen asfour）の成熟果（橙色）の生果皮を水蒸留120分",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 94.07,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 1.84,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 0.9,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.79,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 0.52,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 0.24,
            "source": 1
          },
          {
            "name": "デカナール",
            "percent": 0.18,
            "source": 1
          },
          {
            "name": "オクタナール",
            "percent": 0.15,
            "source": 1
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 0.12,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Bourgou et al. (2012) Sci World J 2012:528593, Table 1（Orange maltaise 列の Stage 3）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3353483/"
          },
          {
            "title": "Ferrer et al. (2023) Plants 12(5):990, 補足資料 S4 PEO data（ブラッド系12品種の中央値を計算。表の値は割合で、×100が%。おろし皮から遠心分離した油）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10005092/"
          }
        ],
        "note": "組成はフランス・コルシカ島の保存園のブラッド系12品種（Moro、Tarocco、Sanguinello、半ブラッドの Maltaise demi sanguine など）の、おろし皮から遠心分離した油の中央値。Moro はリモネン94.60%、リナロール1.02%、デカナール0.19%、Tarocco はリモネン95.87%、リナロール0.54%、デカナール0.14%。アントシアニンは果肉の色素で揮発しないのでnull。ブラッドオレンジの生果皮の収率は見つからず、チュニジアのオレンジ'マルテーズ'（半ブラッド系が多い品種群だが、論文に果肉色の記載はない）の成熟期の値を使った（半熟期は0.74%）。コルシカの値（おろし皮の乾物あたり3.6〜8.2%）は基準が違うので使わなかった。"
      }
    },
    {
      "name": "オレンジフラワー",
      "reading": "おれんじふらわー",
      "latin": "Citrus aurantium flower",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "白い花、ネロリ、蜂蜜、明るい柑橘",
      "role": "シトラスを花の方向へ持ち上げる。",
      "components": [
        "リナロール",
        "リナリルアセテート",
        "ネロール",
        "ゲラニオール",
        "β-ピネン",
        "リモネン",
        "β-オシメン",
        "ファルネソール",
        "α-テルピネオール",
        "酢酸ゲラニル",
        "サビネン",
        "ネロリドール"
      ],
      "literature": {
        "oil": {
          "percent": 0.31,
          "min": 0.25,
          "max": 0.57,
          "basis": "ビターオレンジの乾燥花を水蒸留6時間（レビューの表2に集められた値）。幅は粉砕した花の水蒸留0.25%〜粉末の水蒸気蒸留0.57%。生花（ギリシャ）では0.12%",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 29.14,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 19.08,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 12.04,
            "source": 1
          },
          {
            "name": "β-オシメン",
            "percent": 6.06,
            "source": 1
          },
          {
            "name": "ファルネソール",
            "percent": 5.14,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 4.56,
            "source": 1
          },
          {
            "name": "ゲラニオール",
            "percent": 4.31,
            "source": 1
          },
          {
            "name": "リナリルアセテート",
            "percent": 3.88,
            "source": 1
          },
          {
            "name": "酢酸ゲラニル",
            "percent": 2.59,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 2.01,
            "source": 1
          },
          {
            "name": "ネロリドール",
            "percent": 1.76,
            "source": 1
          },
          {
            "name": "ネロール",
            "percent": 0.83,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Seyyedi-Mansour S. et al. (2025) Molecules 30(4):930（レビュー）, Table 2（Moutaouafiq et al. の値。範囲も同じ表のZhu et al. 2022 と Değirmenci & Erkurt 2020）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11858012/"
          },
          {
            "title": "Sarrou E. et al. (2013) Molecules 18(9):10639-10647, Table 1（生花の水蒸留精油＝ネロリ油）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6270488/"
          }
        ],
        "note": "ジンでは乾燥花を使うことが多いとみて精油量は乾燥花の値（レビューの二次引用）にし、生花ならギリシャ産で0.12%（Sarrou 2013）。成分は生花の精油（ネロリ油に相当、ギリシャ産1分析）で、乾燥花の精油ではリモネン40.8%・リナロール26.7%という報告もある（同レビュー表2）。アントラニル酸メチルは0.19%で1%未満。"
      }
    },
    {
      "name": "パッションフルーツ",
      "reading": "ぱっしょんふるーつ",
      "latin": "Passiflora edulis",
      "group": "果実・ベリー",
      "part": "果実・葉",
      "aroma": "南国果実、酸、花、熟した甘さ",
      "role": "トロピカルなトップとジューシーな酸を足す。",
      "components": [
        "酢酸エチル",
        "酢酸イソアミル",
        "リナロール",
        "ジャスミンラクトン"
      ]
    },
    {
      "name": "マンゴー",
      "reading": "まんごー",
      "latin": "Mangifera indica",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "熟した南国果実、樹脂、甘い黄色い果肉",
      "role": "丸いトロピカル感と厚みを作る。",
      "components": [
        "ミルセン",
        "リモネン",
        "酢酸エチル",
        "ジャスミンラクトン"
      ]
    },
    {
      "name": "レーズン",
      "reading": "れーずん",
      "latin": "Vitis vinifera",
      "group": "果実・ベリー",
      "part": "乾燥果実",
      "aroma": "干し葡萄、濃い果実、軽い酸化感、甘い余韻",
      "role": "ドライフルーツの厚みと熟成感を加える。",
      "components": [
        "フルフラール",
        "酢酸エチル",
        "リンゴ酸",
        "タンニン"
      ]
    },
    {
      "name": "カカオハスク",
      "reading": "かかおはすく",
      "latin": "Theobroma cacao",
      "group": "ナッツ・焙煎",
      "part": "殻",
      "aroma": "カカオの殻、焙煎、軽い渋み、香ばしさ",
      "role": "カカオニブより軽いロースト香とドライな苦味を足す。",
      "components": [
        "ピラジン類",
        "テオブロミン",
        "フルフラール",
        "タンニン",
        "フェニルアセトアルデヒド",
        "ベンズアルデヒド",
        "イソバレルアルデヒド",
        "ノナナール",
        "2-フェニルエタノール",
        "ジアセチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.0008101,
          "min": 0.0004572,
          "max": 0.001373,
          "label": "香気成分",
          "basis": "20か国・44ロットのカカオ豆を同じ条件で焙煎して分けた殻を粉末にし、HS-SPME-GC-MSで分析（5-ノナノール換算の半定量、µg/kg）。酸を除く全成分の合計の44試料の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "ピラジン類",
            "percent": 22.65,
            "source": 0
          },
          {
            "name": "フェニルアセトアルデヒド",
            "percent": 13.03,
            "source": 0
          },
          {
            "name": "ベンズアルデヒド",
            "percent": 7.28,
            "source": 0
          },
          {
            "name": "イソバレルアルデヒド",
            "percent": 5.95,
            "source": 0
          },
          {
            "name": "ノナナール",
            "percent": 5.56,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 4.73,
            "source": 0
          },
          {
            "name": "2-フェニルエタノール",
            "percent": 4.33,
            "source": 0
          },
          {
            "name": "ジアセチル",
            "percent": 2.95,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Barbosa-Pereira L. et al. (2019) Data in Brief 25:104268, Table S1（補足Excel mmc1.xlsx）（各試料の Total から酸（Acids の∑）を引き、44試料の平均 8100.9 µg/kg を計算。幅は試料ごとの最小・最大）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6700496/"
          }
        ],
        "note": "イタリア（トリノ）のチョコレート会社から集めた44ロットの焙煎豆の殻のHS-SPME半定量（5-ノナノール換算・応答係数1）で、酸（平均1.07 mg/kg、主に酢酸と3-メチル酪酸）は合計から除いた（含めると平均9.17 mg/kg）。ピラジン類とフルフラールは試料による差が大きい。テオブロミンとタンニンは揮発しないためnull。"
      }
    },
    {
      "name": "ティムールペッパー",
      "reading": "てぃむーるぺっぱー",
      "latin": "Zanthoxylum armatum",
      "group": "シード・スパイス",
      "part": "果皮",
      "aroma": "グレープフルーツ、しびれ、青いスパイス",
      "role": "山椒系の刺激に明るい柑橘感を重ねる。",
      "components": [
        "リモネン",
        "リナロール",
        "サンショオール",
        "β-ミルセン",
        "ケイ皮酸メチル",
        "サビネン"
      ],
      "literature": {
        "oil": {
          "percent": 5.09,
          "min": 2.72,
          "max": 7.6,
          "basis": "ネパール・サリヤン郡の果実（種子を除いた果皮）を1週間陰干し、10試料（野生・栽培、標高1000〜2000 m）を水蒸留6時間",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 59.37,
            "source": 0
          },
          {
            "name": "ケイ皮酸メチル",
            "percent": 17.57,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 16.95,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.3,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 1.05,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Phuyal N. et al. (2020) Int. J. Food Prop. 23(1):1971-1978, Table 1（10試料の値と、最後の列が著者の平均）",
            "url": "https://www.tandfonline.com/doi/full/10.1080/10942912.2020.1833032"
          }
        ],
        "note": "ネパール産10試料の平均で、産地・標高による振れが大きい（リナロール44.7〜74.1%、ケイ皮酸メチル9.5〜25.0%）。中国産の同種（藤椒など）は精油量が平均11.84%と多く（Xiang 2016）、ケイ皮酸メチルを含まない品種もある（Fan 2025 Food Chem X）。サンショオールは不揮発性のアミドで精油には入らない。"
      }
    },
    {
      "name": "ネトル",
      "reading": "ねとる",
      "latin": "Urtica dioica",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "青い葉、草、ミネラル、軽い苦味",
      "role": "ハーブに青さとミネラル感を加える。",
      "components": [
        "フィトール",
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "タンニン",
        "カルバクロール",
        "trans-3-ヘキセノール",
        "α-カジノール",
        "カリオフィレンオキシド",
        "スパツレノール",
        "τ-ムウロロール"
      ],
      "literature": {
        "oil": {
          "percent": 0.00753,
          "label": "香気成分",
          "basis": "生のネトル全草14.6 kgを工業的に水蒸気蒸留（100分、精油は分離せず）した芳香蒸留水18.9 L中の揮発成分（エーテル抽出・秤量）の合計を、生の全草あたりに換算",
          "source": 0
        },
        "composition": [
          {
            "name": "cis-3-ヘキセノール",
            "percent": 27.9,
            "source": 0
          },
          {
            "name": "カルバクロール",
            "percent": 10.5,
            "source": 0
          },
          {
            "name": "trans-3-ヘキセノール",
            "percent": 5.7,
            "source": 0
          },
          {
            "name": "α-カジノール",
            "percent": 4.7,
            "source": 0
          },
          {
            "name": "カリオフィレンオキシド",
            "percent": 3.1,
            "source": 0
          },
          {
            "name": "スパツレノール",
            "percent": 2.8,
            "source": 0
          },
          {
            "name": "τ-ムウロロール",
            "percent": 2.4,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Krajewska A. et al. (2022) Molecules 27(12):3912, 本文と Table 1（58.2 mg/L × 18.9 L ÷ 生の全草14.6 kg = 75.3 mg/kg を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9230648/"
          }
        ],
        "note": "ネトルは水蒸気蒸留で精油がとれない（論文は non essential oil bearing plant とする）ため、生の全草を工業的に蒸留した芳香蒸留水の揮発成分の総量で、生の重量あたりの値（乾燥葉ではない。生葉の水分は約82%とされ、乾燥重量あたりなら約5.7倍になる）。7画分の濃度から合計すると 67.7 mg/kg。成分は蒸留水の揮発画分の面積%。フィトールとヘキサヒドロファルネシルアセトンは精油の研究では主成分（Ilies et al. 2012 ではフィトール11.2%、トルコ産〈Gül et al. 2012〉はカルバクロール38.2%・フィトール2.7%）だが蒸留水には検出されず、ヘキサナールも報告がない。p-シメン-9-オール（3.2%）と8-ヒドロキシネオメントール（2.7%）は香りの寄与が不明なため other_major から外した。"
      }
    },
    {
      "name": "ヤロウ",
      "reading": "やろう",
      "latin": "Achillea millefolium",
      "group": "花・フローラル",
      "part": "花・葉",
      "aroma": "薬草、白い花、カモミール、ほろ苦さ",
      "role": "フローラルと薬草の間をつなぐ。",
      "components": [
        "カマズレン",
        "ビサボロール",
        "カンファー",
        "1,8-シネオール",
        "β-ピネン",
        "β-カリオフィレン",
        "カリオフィレンオキシド",
        "ネロリドール",
        "ピノカルボン",
        "α-テルピネオール",
        "サビネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.31,
          "min": 0.09,
          "max": 0.95,
          "basis": "ポーランドの市販オーガニック乾燥地上部を水蒸留4時間。範囲は欧州各国の19試料（0.9〜9.5 mL/kg）",
          "source": 0
        },
        "composition": [
          {
            "name": "β-ピネン",
            "percent": 12.84,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 9.15,
            "source": 0
          },
          {
            "name": "カマズレン",
            "percent": 9.05,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 7.26,
            "source": 0
          },
          {
            "name": "カリオフィレンオキシド",
            "percent": 4.47,
            "source": 0
          },
          {
            "name": "ネロリドール",
            "percent": 3.79,
            "source": 0
          },
          {
            "name": "ピノカルボン",
            "percent": 2.88,
            "source": 0
          },
          {
            "name": "カンファー",
            "percent": 2.74,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 2.39,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 2.28,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Górska-Drabik E. et al. (2025) Molecules 30(9):1927, Table 1（範囲はOrav A. et al. 2006 Nat Prod Res 20(12):1082-1088 の要旨）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12073657/"
          }
        ],
        "note": "β-ピネン＋カマズレン型の市販品1分析。精油の組成は倍数性で変わり、2倍体・4倍体はカマズレンを含む（最大25%）が6倍体はアズレン類を含まない（EMA/HMPC/376415/2019）。ビサボロールはこの分析では検出されず（欧州の一部の試料ではα-/β-ビサボロールの報告あり）、欧州薬局方の下限は精油0.2%（2 mL/kg、花のついた先端部）。"
      }
    },
    {
      "name": "マジョラム",
      "reading": "まじょらむ",
      "latin": "Origanum majorana",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "甘いハーブ、タイム、温かいグリーン",
      "role": "タイムより柔らかい甘いハーブ感を出す。",
      "components": [
        "テルピネン-4-オール",
        "リナロール",
        "サビネン",
        "γ-テルピネン",
        "trans-サビネン水和物",
        "cis-サビネン水和物",
        "p-シメン",
        "α-テルピネオール",
        "α-テルピネン",
        "cis-p-メンタ-2-エン-1-オール"
      ],
      "literature": {
        "oil": {
          "percent": 1.04,
          "min": 0.4,
          "max": 1.85,
          "basis": "ハンガリー産栽培マジョラムの室温乾燥葉を蒸留3時間。範囲は総説の表の乾燥品の値（0.3 mL/100 g未満の報告は除外）",
          "source": 0
        },
        "composition": [
          {
            "name": "trans-サビネン水和物",
            "percent": 25.18,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 24.92,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 6.48,
            "source": 0
          },
          {
            "name": "cis-サビネン水和物",
            "percent": 5.44,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 4.72,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 4.53,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 4.43,
            "source": 0
          },
          {
            "name": "α-テルピネン",
            "percent": 3,
            "source": 0
          },
          {
            "name": "cis-p-メンタ-2-エン-1-オール",
            "percent": 2.35,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.1,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Ghazal T.S.A. et al. (2022) Plants 11(11):1432（範囲はKakouri E. et al. 2022 Life 12(12):1982, Table 1）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9183178/"
          }
        ],
        "note": "ハンガリー産（欧州の主要産地）乾燥葉の1分析で、テルピネン-4-オールとサビネン水和物（cis＋transで30.6%）が主。リナロールはこの試料では0.1%と少ないが、総説の表ではハンガリー産12%、市販品14.7〜15.3%の例もあり、産地差が大きい。"
      }
    },
    {
      "name": "椿の実",
      "reading": "つばきのみ",
      "latin": "Camellia japonica",
      "group": "ナッツ・焙煎",
      "part": "種子・搾り粕",
      "aroma": "柔らかな種子、油脂、ナッツ、ほのかな茶様",
      "role": "香りを丸め、和の穏やかなナッティさを加える。",
      "components": [
        "フィトール",
        "ヘキサナール",
        "タンニン",
        "フルフラール",
        "γ-ブチロラクトン",
        "イソアミルアルコール",
        "ピラジン類",
        "アセトイン",
        "2-メチル-1-ブタノール",
        "ケイ皮酸メチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.000184,
          "min": 0.000111,
          "max": 0.002376,
          "label": "香気成分",
          "basis": "中国江西省の油茶（Camellia oleifera）の種子を170 °Cで0〜30分焙煎して冷圧搾した油のSPME-GC-MS（内部標準1,2-ジクロロベンゼン、油あたりmg/kg）。表1の38成分の合計。代表値は焙煎なし（0分）、幅は5〜30分焙煎を含む",
          "source": 0
        },
        "composition": [
          {
            "name": "γ-ブチロラクトン",
            "percent": 19.2,
            "source": 1
          },
          {
            "name": "イソアミルアルコール",
            "percent": 15.8,
            "source": 1
          },
          {
            "name": "ピラジン類",
            "percent": 14.5,
            "source": 1
          },
          {
            "name": "アセトイン",
            "percent": 6.8,
            "source": 1
          },
          {
            "name": "2-メチル-1-ブタノール",
            "percent": 4.3,
            "source": 1
          },
          {
            "name": "ケイ皮酸メチル",
            "percent": 2.7,
            "source": 1
          },
          {
            "name": "ヘキサナール",
            "percent": 1.5,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Lan H. et al. (2025) Foods 15(1):87, Table 1（38成分の合計を焙煎時間ごとに計算：0分 1.84・5分 1.11・30分 23.76 mg/kg）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12785429/"
          },
          {
            "title": "Hsu F.-L. et al. (2024) Foods 13(16):2610, Table 2（ヤブツバキ C. japonica の種子を焙煎せず圧搾した油のヘッドスペース、面積%）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11353628/"
          }
        ],
        "note": "成分の割合は台湾産ヤブツバキの種子（40 °C乾燥・焙煎なし）を圧搾した油のヘッドスペース（面積%、1%以上の成分だけ記載）で、本種の定量値がないため量は油茶の焙煎種子から搾った油の半定量値（油あたり）で代用した。種子あたりでは油分（ヤブツバキ54.1%）の分だけ約半分、搾り粕はさらに少ないと考えられる。フィトールとフルフラールはヤブツバキの表になく（フルフラールは油茶で20分以上焙煎したときだけ0.06〜0.49 mg/kg、合計の0.4〜2.1%）、タンニンは揮発しない。ほとんど匂わない2,3-ブタンジオール（2異性体計23.2%）は other_major から除いた。"
      }
    },
    {
      "name": "椿茶",
      "reading": "つばきちゃ",
      "latin": "Camellia japonica / Camellia sinensis",
      "group": "和ボタニカル",
      "part": "葉",
      "aroma": "緑茶、青い葉、穏やかな渋み、軽い花",
      "role": "煎茶より丸い和の茶葉感を足す。",
      "components": [
        "テアニン",
        "カフェイン",
        "フィトール",
        "ヘキサナール",
        "リナロール",
        "cis-3-ヘキセノール",
        "α-テルピネオール",
        "オイゲノール",
        "リナロールオキシド類",
        "ゲラニオール"
      ],
      "literature": {
        "oil": {
          "percent": 0.006,
          "min": 0.0046,
          "max": 0.0083,
          "basis": "大阪府箕面市・兵庫県川西市の自生ヤブツバキの新芽・小枝（葉75〜85%）の生の試料3つを細断し1夜水に浸して水蒸気蒸留（塩酸を加える前のA区分）。3試料の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 27.33,
            "source": null
          },
          {
            "name": "cis-3-ヘキセノール",
            "percent": 18.3,
            "source": null
          },
          {
            "name": "α-テルピネオール",
            "percent": 17.87,
            "source": null
          },
          {
            "name": "オイゲノール",
            "percent": 11.6,
            "source": null
          },
          {
            "name": "リナロールオキシド類",
            "percent": 5.2,
            "source": null
          },
          {
            "name": "ゲラニオール",
            "percent": 3.33,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "藤田安二・藤田真一・吉川久 (1973) 日本農芸化学会誌 47(10):645-650「サザンカ，ツバキおよびチャノキの精油」（試料I〜IIIのA区分の油分と試料重量から収率を計算し平均）",
            "url": "https://www.jstage.jst.go.jp/article/nogeikagaku1924/47/10/47_10_645/_article/-char/ja/"
          }
        ],
        "note": "ヤブツバキの生の新芽・小枝の精油（藤田安二・藤田真一・吉川久 (1973) 日本農芸化学会誌 47(10):645-650「サザンカ，ツバキおよびチャノキの精油」 の Table II、IA・IIA・IIIA 列の3試料平均。値は IA/IIA/IIIA の順に リナロール 22.1/36.1/23.8、cis-β,γ-ヘキセノール 28.2/18.2/8.5、α-テルピネオール 5.7/14.5/33.4、オイゲノール 30.8/3.0/1.0）。茶として乾燥・加熱した葉の値ではなく、塩酸で配糖体を分解すると油分は計0.015〜0.05%に増え、オイゲノール（配糖体由来）やフルフラールが出る。テアニン・カフェインは揮発しないため null、フィトールとヘキサナールはこの分析では報告がない。"
      }
    },
    {
      "name": "伽羅",
      "reading": "きゃら",
      "latin": "Aquilaria spp.",
      "group": "骨格・樹脂",
      "part": "香木",
      "aroma": "沈香、樹脂、甘い木質、深い香煙",
      "role": "少量で香木の奥行きと静かな余韻を作る。",
      "components": [
        "セドロール",
        "バニリン",
        "β-カリオフィレン",
        "α-ピネン",
        "アロアロマデンドレン",
        "ジヒドロオイデスモール",
        "α-オイデスモール",
        "ブルネソール",
        "τ-カジノール",
        "デヒドロフキノン"
      ],
      "literature": {
        "oil": {
          "percent": 0.1,
          "basis": "マレーシア・ジョホール州の植林の A. sinensis の沈香（樹脂化した心材）を乾燥・粉末にし、20 kgを14日間水に浸けてから工業用蒸留器で120時間水蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "アロアロマデンドレン",
            "percent": 13.04,
            "source": null
          },
          {
            "name": "ジヒドロオイデスモール",
            "percent": 8.81,
            "source": null
          },
          {
            "name": "α-オイデスモール",
            "percent": 8.48,
            "source": null
          },
          {
            "name": "ブルネソール",
            "percent": 7.63,
            "source": null
          },
          {
            "name": "τ-カジノール",
            "percent": 4.95,
            "source": null
          },
          {
            "name": "デヒドロフキノン",
            "percent": 3.83,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Chan S.W. et al. (2024) PLoS One 19(11):e0310770, Results",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11542896/"
          }
        ],
        "note": "伽羅（奇楠、Qinan 型）の精油の収率・組成は見つからず、マレーシアの栽培 A. sinensis の沈香の精油（収率も組成も同じ論文、表1の面積%）で代用した。沈香の水蒸留収率はほかに A. subintegra の材で0.22% w/w（水に浸けた対照、Monggoot ら 2018 Indian J Microbiol 58:201 の要旨）、A. malaccensis で最大0.18%（Chan ら 2024 の引用）と低い。沈香らしい香りの成分はアガロスピロール（2.72%）・ジンコーエレモール（1.21%）などで、表の成分（セドロール・バニリン・β-カリオフィレン・α-ピネン）はこの精油では検出されなかった（カリオフィレンオキシドは2.00%）。奇楠型の沈香は普通の沈香より揮発油が多く、GC で検出される成分に占める2-(2-フェニルエチル)クロモン類が10%以上（最大25%）と多い（Zhang ら 2025 Front Plant Sci 16:1546050）。"
      }
    },
    {
      "name": "アボカドシード",
      "reading": "あぼかどしーど",
      "latin": "Persea americana",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "種子、ほのかなナッツ、青い渋み、穏やかな土っぽさ",
      "role": "香りを強く出すより、ドライな厚みと渋みを補助する。",
      "components": [
        "フィトール",
        "ヘキサナール",
        "タンニン",
        "フルフラール",
        "trans-2-ヘキセノール",
        "trans-2-ヘプテナール",
        "3-シクロヘキセン-1-カルバルデヒド",
        "2-デカノン",
        "3,4-ジヒドロ-2H-チオピラン-3-オン",
        "ヘプタン酸メチル"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "trans-2-ヘキセノール",
            "percent": 7.34,
            "source": 0
          },
          {
            "name": "trans-2-ヘプテナール",
            "percent": 5.36,
            "source": 0
          },
          {
            "name": "3-シクロヘキセン-1-カルバルデヒド",
            "percent": 4.92,
            "source": 0
          },
          {
            "name": "2-デカノン",
            "percent": 4.67,
            "source": 0
          },
          {
            "name": "3,4-ジヒドロ-2H-チオピラン-3-オン",
            "percent": 4.23,
            "source": 0
          },
          {
            "name": "ヘプタン酸メチル",
            "percent": 4.12,
            "source": 0
          },
          {
            "name": "フィトール",
            "percent": 2.14,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Bayomy H.M. et al. (2023) Processes 11(2):377, Table 3（生の種子粉 HKF、メタノール抽出液のGC-MS面積%）",
            "url": "https://doi.org/10.3390/pr11020377"
          }
        ],
        "note": "エジプト産ハス種の種子を天日乾燥して粉にし、メタノール抽出液をGC-MSで測った面積%で、香気成分の総量（絶対量）の資料は見つからなかった。コロンビア産ハス種の種子のSPME分析（Arango et al. 2025, Food Sci Nutr 13:e70489）はα-ピネン・カンフェン・リモネンなどテルペン中心だが有無だけで量がなく、この表とは傾向が違う。同じ論文の180 °C・30分焙煎品ではピラジン類14.92%、フィトール0.36%で、ヘキサナールとフルフラールは生・焙煎とも検出されず、タンニンは揮発しない。"
      }
    },
    {
      "name": "チェリー",
      "reading": "ちぇりー",
      "latin": "Prunus avium / Prunus cerasus",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "赤い果実、杏仁、甘酸っぱさ、軽い花",
      "role": "ベリーより丸い赤い果実感と甘い余韻を作る。",
      "components": [
        "ベンズアルデヒド",
        "フラネオール",
        "酢酸エチル",
        "リナロール"
      ]
    },
    {
      "name": "ココナッツ",
      "reading": "ここなっつ",
      "latin": "Cocos nucifera",
      "group": "ナッツ・焙煎",
      "part": "果肉・殻",
      "aroma": "ココナッツ、甘い油脂、軽いロースト、ミルキー",
      "role": "南国感とクリーミーな甘さを加える。",
      "components": [
        "マルトール",
        "フルフラール",
        "バニリン",
        "酢酸エチル",
        "δ-デカラクトン",
        "δ-オクタラクトン",
        "ドデカン酸エチル",
        "δ-ドデカラクトン",
        "デカン酸エチル",
        "2-トリデカノン"
      ],
      "literature": {
        "oil": {
          "percent": 0.0326,
          "min": 0.0319,
          "max": 0.0326,
          "label": "香気成分",
          "basis": "市販の乾燥ココナッツ（シュレッド）200 gを水蒸気蒸留し、留出液をエーテルで抽出した香気濃縮物の重さ（溶媒ピーク分を差し引く）。非焙煎326 ppm、160 °C・35分焙煎319 ppm",
          "source": 0
        },
        "composition": [
          {
            "name": "δ-デカラクトン",
            "percent": 25.15,
            "source": 0
          },
          {
            "name": "δ-オクタラクトン",
            "percent": 10.12,
            "source": 0
          },
          {
            "name": "ドデカン酸エチル",
            "percent": 9.2,
            "source": 0
          },
          {
            "name": "δ-ドデカラクトン",
            "percent": 7.06,
            "source": 0
          },
          {
            "name": "デカン酸エチル",
            "percent": 4.6,
            "source": 0
          },
          {
            "name": "2-トリデカノン",
            "percent": 4.29,
            "source": 0
          },
          {
            "name": "酢酸エチル",
            "percent": 0.92,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Saittagaroon S., Kawakishi S., Namiki M. (1984) Agric Biol Chem 48(9):2301-2307, Table I・III（ppm を%に換算）",
            "url": "https://www.jstage.jst.go.jp/article/bbb1961/48/9/48_9_2301/_article"
          }
        ],
        "note": "量は水蒸気蒸留した香気濃縮物の重さからの概算で、同定成分の合計は258 ppm（酸化防止剤BHT 2 ppm・汚染物DBP 14 ppmを含む）。割合は非焙煎品（表II）の ppm を総量326 ppmで割って計算した。160 °C・35分焙煎品（表IV）ではδ-オクタラクトン56・δ-デカラクトン58 ppmに加えアルキルピラジン6種計14 ppm（総量の4.4%）、5-メチルフルフラール3 ppm、2-アセチルピロール4 ppmが出るが、マルトール・フルフラール・バニリンはどちらでも検出されていない。"
      }
    },
    {
      "name": "スミレ",
      "reading": "すみれ",
      "latin": "Viola odorata",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "紫の花、パウダリー、柔らかな甘さ、清潔感",
      "role": "ローズより静かなフローラル感と上品な粉っぽさを足す。",
      "components": [
        "イオノン類",
        "リナロール",
        "ネロリドール",
        "2-フェニルエタノール"
      ],
      "literature": {
        "oil": {
          "percent": 0.003,
          "basis": "A（花の精油）。スミレの花 33,000 kg から花の精油 1 kg（生花の溶剤抽出で得た花の精油、1904年の文献を総説が引用）から 1÷33,000 を計算",
          "source": 0
        },
        "composition": [
          {
            "name": "イオノン類",
            "percent": 8.44,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Aloum L. et al. (2020) Molecules 25(24):5822（総説。von Soden H. (1904) J Prakt Chem 69:256-272 を引用。1÷33,000 を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7764282/"
          },
          {
            "title": "Gautschi M., Bajgrowicz J.A., Kraft P. (2001) CHIMIA 55(5):379-387（Uhde & Ohloff 1972 Helv Chim Acta 55:2621 のスミレの花の精油の値。α-イオノン 8.22% ＋ β-イオノン 0.22% を合計）",
            "url": "https://doi.org/10.2533/chimia.2001.379"
          }
        ],
        "note": "量は歴史的な値（生花を溶剤で抽出して得た花の精油）で、乾燥花の値は見つからなかった。イオノン類は花の精油の分析値で、開花中の花のヘッドスペースでは α-イオノン35.7%・β-イオノン21.1%・ジヒドロ-β-イオノン18.2%とされる（Kaiser の私信を同じ総説が引用。Keene et al. 2024 HortScience 59:974 は主な放出成分をベンズアルデヒド・1,4-ジメトキシベンゼン・3種のイオノン・p-クレゾールと報告し、数値は図のみ）。リナロール・ネロリドール・2-フェニルエタノールの値は見つからず、Hammami et al. 2011（Arch Appl Sci Res 3:44、リナロール7.33%・収率2.3%）は方法に「乾燥した地上部」とあり花の値か不明でイオノンもないため採用しなかった。"
      }
    },
    {
      "name": "カシス",
      "reading": "かしす",
      "latin": "Ribes nigrum",
      "group": "果実・ベリー",
      "part": "果実・葉",
      "aroma": "黒いベリー、青い葉、酸、タンニン",
      "role": "ベリーの濃さと青いニュアンスを同時に出す。",
      "components": [
        "アントシアニン",
        "タンニン",
        "ヘキサナール",
        "酢酸エチル"
      ]
    },
    {
      "name": "プラム",
      "reading": "ぷらむ",
      "latin": "Prunus domestica",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "すもも、甘酸っぱさ、杏仁、赤い果実",
      "role": "軽い核果感と酸を加え、果実味を丸くする。",
      "components": [
        "ベンズアルデヒド",
        "フラネオール",
        "酢酸エチル",
        "リナロール"
      ]
    },
    {
      "name": "リンデン",
      "reading": "りんでん",
      "latin": "Tilia spp.",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "菩提樹、蜂蜜、白い花、ハーブティー",
      "role": "甘い白い花とハーブティーの柔らかさを作る。",
      "components": [
        "リナロール",
        "ファルネセン",
        "ゲラニオール",
        "2-フェニルエタノール",
        "4-ビニルグアイアコール",
        "安息香酸ベンジル",
        "p-シメン-8-オール",
        "テルピネン-4-オール",
        "cis-p-メンタ-2,8-ジエン-1-オール",
        "チグリン酸2-フェニルエチル",
        "オイゲノール"
      ],
      "literature": {
        "oil": {
          "percent": 0.08,
          "min": 0.02,
          "max": 0.1,
          "basis": "A（精油）。ルーマニア（ブカレスト植物園）の T. platyphyllos の花と苞をキシレンを使って4時間水蒸留した2回の平均（乾燥の記載なし）。ポーランドの T. cordata の市販品（乾燥花）・採取品も0.07〜0.08% v/w。幅はEMA評価報告書の「精油 0.02〜0.1%」",
          "source": 0
        },
        "composition": [
          {
            "name": "2-フェニルエタノール",
            "percent": 26.07,
            "source": 0
          },
          {
            "name": "4-ビニルグアイアコール",
            "percent": 8.35,
            "source": 0
          },
          {
            "name": "安息香酸ベンジル",
            "percent": 7.33,
            "source": 0
          },
          {
            "name": "p-シメン-8-オール",
            "percent": 5.6,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 2.86,
            "source": 0
          },
          {
            "name": "cis-p-メンタ-2,8-ジエン-1-オール",
            "percent": 2.51,
            "source": 0
          },
          {
            "name": "チグリン酸2-フェニルエチル",
            "percent": 2.5,
            "source": 0
          },
          {
            "name": "オイゲノール",
            "percent": 2.43,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 1.22,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Rădulescu V. & Oprea E. (2008) Farmacia 56(2):129-138（幅は EMA/HMPC/337067/2011 Assessment report on Tilia cordata Miller, Tilia platyphyllos Scop., Tilia x vulgaris Heyne or their mixtures, flos。市販品の値は Kowalski R. et al. (2017) J Essent Oil Bear Plants 20(4):1137-1142 の要旨）",
            "url": "https://farmaciajournal.com/arhiva/20082/issue22008art03.doc"
          }
        ],
        "note": "精油量は乾燥の記載がない花（苞つき）の値だが、市販の乾燥リンデン花（ポーランド）も0.07〜0.08%で一致し、EMAの幅（0.02〜0.1%）の中ほど。成分は水蒸留液全体（油と水）を固相抽出した分析なので水に溶けやすい2-フェニルエタノールが多く、ふつうのクレベンジャー精油（Kowalski 2017、Kelmendi 2020、Toker 1999、Fitsiou 2007）はトリコサン・ヘンエイコサンなどのアルカンが主でリナロールは0.5〜4%。ファルネセン・ゲラニオールは花の精油の分析で報告がなく、生きた花のヘッドスペースでも主成分はリモネン・p-シメン・δ-3-カレン（Buchbauer 1995 Flavour Fragr J 10:221 の要旨）だった。"
      }
    },
    {
      "name": "ロディオラロゼア",
      "reading": "ろでぃおらろぜあ",
      "latin": "Rhodiola rosea",
      "group": "花・フローラル",
      "part": "根",
      "aroma": "ローズルート、土、柔らかな花、根の苦味",
      "role": "花と根の間にある、落ち着いたフローラル感を足す。",
      "components": [
        "ゲラニオール",
        "ローズオキサイド",
        "リナロール",
        "2-フェニルエタノール",
        "ミルテノール",
        "シンナミルアルコール"
      ],
      "literature": {
        "oil": {
          "percent": 0.21,
          "min": 0.05,
          "max": 0.21,
          "basis": "ブルガリアで栽培した乾燥根茎を粉砕し、リケンス・ニッカーソン装置で水蒸気蒸留と溶媒抽出を同時に行った値。最小はノルウェー産の乾燥根茎の水蒸気蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "ゲラニオール",
            "percent": 48.79,
            "source": 0
          },
          {
            "name": "ミルテノール",
            "percent": 28.05,
            "source": 0
          },
          {
            "name": "シンナミルアルコール",
            "percent": 9.97,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.74,
            "source": 0
          },
          {
            "name": "2-フェニルエタノール",
            "percent": 0.65,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Evstatieva L., Todorova M., Antonova D., Staneva J. (2010) Pharmacogn Mag 6(24):256-258, 本文（最小は Rohloff J. (2002) Phytochemistry 59(6):655-661 の要旨）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2992135/"
          }
        ],
        "note": "ブルガリアで栽培した1試料の値。中国の市販品はゲラニオール56.97%・1-オクタノール12.21%（収率0.10%）、インドの市販品はフェネチルアルコール56.22%（収率0.25%）で、著者は別種や別ケモタイプの可能性を指摘している。ノルウェー産の水蒸気蒸留（Rohloff 2002）は0.05%で、n-デカノール30.38%・ゲラニオール12.49%が多い。収率は溶媒で同時に抽出する方法の値で、水蒸留より高めに出る可能性がある。ローズオキサイドはどちらの資料にも報告がない。"
      }
    },
    {
      "name": "桃",
      "reading": "もも",
      "latin": "Prunus persica",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "白桃、甘い果肉、花、やわらかな酸",
      "role": "明るい果実感と柔らかな甘さを作る。",
      "components": [
        "ジャスミンラクトン",
        "酢酸エチル",
        "ベンズアルデヒド",
        "リナロール",
        "γ-デカラクトン",
        "trans-2-ヘキセノール",
        "1-ヘキサノール",
        "6-ペンチル-α-ピロン",
        "δ-デカラクトン",
        "γ-ドデカラクトン",
        "γ-ヘキサラクトン"
      ],
      "literature": {
        "oil": {
          "percent": 0.000122,
          "min": 0.000104,
          "max": 0.000183,
          "label": "香気成分",
          "basis": "白桃「白鳳」（1988年、果樹試験場つくば）を硬熟で収穫し室温で4日追熟した果肉（種を除く）。減圧水蒸気蒸留・内部標準2-オクタノールで33成分を定量した合計",
          "source": 0
        },
        "composition": [
          {
            "name": "γ-デカラクトン",
            "percent": 20.56,
            "source": 0
          },
          {
            "name": "trans-2-ヘキセノール",
            "percent": 18.26,
            "source": 0
          },
          {
            "name": "ベンズアルデヒド",
            "percent": 12.17,
            "source": 0
          },
          {
            "name": "1-ヘキサノール",
            "percent": 11.43,
            "source": 0
          },
          {
            "name": "6-ペンチル-α-ピロン",
            "percent": 8.31,
            "source": 0
          },
          {
            "name": "δ-デカラクトン",
            "percent": 7.24,
            "source": 0
          },
          {
            "name": "γ-ドデカラクトン",
            "percent": 3.95,
            "source": 0
          },
          {
            "name": "γ-ヘキサラクトン",
            "percent": 2.8,
            "source": 0
          },
          {
            "name": "ジャスミンラクトン",
            "percent": 1.81,
            "source": 0
          },
          {
            "name": "酢酸エチル",
            "percent": 1.23,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.33,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Kakiuchi N., Ohmiya A. (1991) J Japan Soc Hort Sci 60(1):209-216, Table 1（白鳳）（硬熟・追熟後の合計。範囲は3つの収穫熟度の追熟後）",
            "url": "https://www.jstage.jst.go.jp/article/jjshs1925/60/1/60_1_209/_pdf"
          }
        ],
        "note": "日本の白桃「白鳳」1試料で、論文が食べごろとする「硬熟で収穫→4日追熟」の値。収穫直後は青くさいC6成分が多く総量3405〜5028 μg/kg、追熟で1038〜1832 μg/kg に減りラクトンが増える。ベンズアルデヒドは種を除いた果肉の値。"
      }
    },
    {
      "name": "白樺の葉",
      "reading": "しらかばのは",
      "latin": "Betula spp.",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "白樺、青い葉、軽い樹皮、ミネラル",
      "role": "森の明るい青さと乾いた木質感を補う。",
      "components": [
        "フィトール",
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "タンニン",
        "α-ベツレノール",
        "14-ヒドロキシ-4,5-ジヒドロ-β-カリオフィレン",
        "フムレンエポキシドII",
        "β-ベツレナール",
        "4-ノルカリオフィラ-8(14)-エン-5-オン",
        "カリオフィレンオキシド"
      ],
      "literature": {
        "oil": {
          "percent": 0.07500000000000001,
          "min": 0.05,
          "max": 0.1,
          "basis": "欧州の生薬ベツラ葉（シダレカンバ・ヨーロッパシラカンバの乾燥葉）の精油含量（EMAの評価報告書がBlaschek 2013を引用）",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ベツレノール",
            "percent": 29.3,
            "source": 1
          },
          {
            "name": "14-ヒドロキシ-4,5-ジヒドロ-β-カリオフィレン",
            "percent": 21.4,
            "source": 1
          },
          {
            "name": "フムレンエポキシドII",
            "percent": 4.8,
            "source": 1
          },
          {
            "name": "β-ベツレナール",
            "percent": 4.7,
            "source": 1
          },
          {
            "name": "4-ノルカリオフィラ-8(14)-エン-5-オン",
            "percent": 4.7,
            "source": 1
          },
          {
            "name": "カリオフィレンオキシド",
            "percent": 4.3,
            "source": 1
          },
          {
            "name": "フィトール",
            "percent": 0.2,
            "source": 1
          },
          {
            "name": "ヘキサナール",
            "percent": 0.1,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "EMA/HMPC/573240/2014 Assessment report on Betula pendula Roth and/or Betula pubescens Ehrh. as well as hybrids of both species, folium (24 November 2014), p.5",
            "url": "https://www.ema.europa.eu/en/documents/herbal-report/final-assessment-report-betula-pendula-roth-betula-pubescens-ehrh-folium_en.pdf"
          },
          {
            "title": "Başer K.H.C., Demirci B. (2007) ARKIVOC 2007(vii):335-348, Table 1（B. pendula の葉 L の列）",
            "url": "https://doi.org/10.3998/ark.5550190.0008.730"
          }
        ],
        "note": "精油量はEMAの評価報告書の値（乾燥葉0.05〜0.1%、主成分はセスキテルペンオキシド）で、範囲のみ。組成はトルコ・エルズルム産の B. pendula の葉（1998年5月）を水蒸留3時間した精油（TIC面積%、表は主要成分のみ）で、この試料の精油量は乾燥重量あたり0.63%と報告書の範囲よりかなり多い（同じ研究のほかのカバノキ属の葉は0.11〜0.56%）。日本のシラカンバ（B. platyphylla）の葉の資料は見つからなかった。cis-3-ヘキセノールは表になく（(Z)-3-ヘキセナール0.2%）、タンニンは揮発しない。β-ベツレナールはセスキテルペンのアルデヒドで、一覧に合う系統がないため新しい系統名「セスキテルペンアルデヒド」とした。"
      }
    },
    {
      "name": "シーソルト",
      "reading": "しーそると",
      "latin": "Sea salt",
      "group": "海・ミネラル",
      "part": "塩",
      "aroma": "塩気、海風、ミネラル、軽い旨み",
      "role": "甘さを引き締め、マリン感と輪郭を作る。",
      "components": [
        "ヨード様成分",
        "グルタミン酸",
        "ジメチルスルフィド",
        "ヘキサナール"
      ]
    },
    {
      "name": "トマト",
      "reading": "とまと",
      "latin": "Solanum lycopersicum",
      "group": "果実・野菜",
      "part": "果実・葉",
      "aroma": "青いトマト、葉、旨み、軽い酸",
      "role": "ベジタルな青さと旨みの印象を足す。",
      "components": [
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "グルタミン酸",
        "イオノン類"
      ]
    },
    {
      "name": "パイナップル",
      "reading": "ぱいなっぷる",
      "latin": "Ananas comosus",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "パイナップル、甘酸っぱさ、南国果実、軽い発酵感",
      "role": "トロピカルなトップと明るい酸を加える。",
      "components": [
        "酢酸エチル",
        "酢酸イソアミル",
        "酢酸ヘキシル",
        "フルフラール"
      ]
    },
    {
      "name": "バオバブ",
      "reading": "ばおばぶ",
      "latin": "Adansonia digitata",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "乾いた果実、酸、粉っぽさ、軽い渋み",
      "role": "ドライな酸味とアフリカンボタニカルらしい骨格を足す。",
      "components": [
        "リンゴ酸",
        "タンニン",
        "フルフラール",
        "酢酸エチル"
      ]
    },
    {
      "name": "ハスカップ",
      "reading": "はすかっぷ",
      "latin": "Lonicera caerulea",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "濃いベリー、酸、紫の果実、軽い渋み",
      "role": "ブルーベリーより酸の強い北国ベリー感を出す。",
      "components": [
        "アントシアニン",
        "リンゴ酸",
        "タンニン",
        "リナロール"
      ]
    },
    {
      "name": "ハニーブッシュ",
      "reading": "はにーぶっしゅ",
      "latin": "Cyclopia spp.",
      "group": "茶・ドライ",
      "part": "葉",
      "aroma": "蜂蜜、紅茶、乾いた草、柔らかな甘さ",
      "role": "ノンカフェインの茶様ノートと甘い余韻を作る。",
      "components": [
        "リナロール",
        "ゲラニオール",
        "タンニン",
        "フルフラール"
      ]
    },
    {
      "name": "ポピー",
      "reading": "ぽぴー",
      "latin": "Papaver rhoeas",
      "group": "花・フローラル",
      "part": "花・種子",
      "aroma": "淡い花、種子、ナッツ、軽い粉っぽさ",
      "role": "花の軽さと種子由来の穏やかな香ばしさを足す。",
      "components": [
        "イオノン類",
        "リナロール",
        "ネロリドール",
        "タンニン",
        "2-フェニルエタノール",
        "ノナナール",
        "ヘプタナール",
        "ウンデカナール",
        "シトロネロール",
        "ファルネソール"
      ],
      "literature": {
        "oil": {
          "percent": 0.34,
          "basis": "A（精油）。イタリア・ロンバルディア州の2集団のヒナゲシの生の花弁を無溶媒マイクロ波抽出（12分）した精油（植物の水分から出た水層のジクロロメタン抽出分を含む）。生重量あたり",
          "source": 0
        },
        "composition": [
          {
            "name": "2-フェニルエタノール",
            "percent": 1.86,
            "source": null
          },
          {
            "name": "ノナナール",
            "percent": 1.78,
            "source": null
          },
          {
            "name": "ヘプタナール",
            "percent": 1,
            "source": null
          },
          {
            "name": "ウンデカナール",
            "percent": 0.72,
            "source": null
          },
          {
            "name": "シトロネロール",
            "percent": 0.49,
            "source": null
          },
          {
            "name": "ファルネソール",
            "percent": 0.45,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Cavalloro V. et al. (2024) Metabolites 14(12):664",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11678624/"
          }
        ],
        "note": "イタリアの生の花弁の値で、乾燥花弁の値は見つからなかった。収率0.34%の大半はノナデセン・ヘンエイコサンなどの炭化水素（花弁の精油の72〜83%）と脂肪酸エステルで、香りの成分は数%しかない。表の成分は花弁で検出されず、葉でのみ β-イオノン0.34〜0.65%・リナロール0.23〜0.37%（ネロリドールは不検出、タンニンは揮発しない）。other_major は Table 1 の花の2集団（Hill・Lowlands）の平均を計算（不検出は0として計算、丘陵の集団では2-フェニルエタノール・ヘプタナールは不検出）。"
      }
    },
    {
      "name": "マーガオ",
      "reading": "まーがお",
      "latin": "Litsea cubeba",
      "group": "シード・スパイス",
      "part": "果実",
      "aroma": "レモングラス、山椒、青い柑橘、スパイス",
      "role": "台湾山胡椒らしい明るいシトラススパイスを作る。",
      "components": [
        "シトラール",
        "リモネン",
        "リナロール",
        "β-ミルセン",
        "イソプレゴン",
        "シトロネラール",
        "ベルベノール",
        "ゲラニオール"
      ],
      "literature": {
        "oil": {
          "percent": 3.8,
          "min": 3.04,
          "max": 4.56,
          "basis": "中国8産地の熟した果実を室温で風乾し、水蒸留5時間",
          "source": 0
        },
        "composition": [
          {
            "name": "シトラール",
            "percent": 82.9,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 3.05,
            "source": 0
          },
          {
            "name": "イソプレゴン",
            "percent": 2.01,
            "source": 0
          },
          {
            "name": "シトロネラール",
            "percent": 1.69,
            "source": 0
          },
          {
            "name": "ベルベノール",
            "percent": 1.41,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 1.4,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 1.19,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 0.54,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Si L. et al. (2012) Molecules 17(6):7057-7066",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6268156/"
          }
        ],
        "note": "中国8産地の風乾果実の油で、成分と other_major は8試料の平均を計算（シトラールはゲラニアール＋ネラールの合計）。中国産の市販リツエア果実油（EFSA 2021、6バッチ平均）はゲラニアール36.35%＋ネラール29.77%、リモネン12.98%、リナロール1.92%、ミルセン1.55%で、乾燥果実の油よりリモネンが多い。"
      }
    },
    {
      "name": "わさび",
      "reading": "わさび",
      "latin": "Eutrema japonicum",
      "group": "和ボタニカル",
      "part": "根茎・葉",
      "aroma": "山葵、青い辛味、根、清涼感",
      "role": "香りよりも鋭い温度感と和の青さを与える。",
      "components": [
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "フィトール",
        "β-カリオフィレン",
        "アリルイソチオシアネート",
        "4-ペンテニルイソチオシアネート",
        "5-ヘキセニルイソチオシアネート",
        "3-ブテニルイソチオシアネート",
        "6-ヘプテニルイソチオシアネート",
        "sec-ブチルイソチオシアネート"
      ],
      "literature": {
        "oil": {
          "percent": 0.255,
          "min": 0.217,
          "max": 0.324,
          "label": "香気成分",
          "basis": "産地の違う沢ワサビの根茎5本をすりおろし37℃で5分加水分解させ、生じたアリルイソチオシアネートをFPD付きGCで定量（生の根茎あたり）。5本の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "アリルイソチオシアネート",
            "percent": 90.19,
            "source": null
          },
          {
            "name": "4-ペンテニルイソチオシアネート",
            "percent": 2.99,
            "source": null
          },
          {
            "name": "5-ヘキセニルイソチオシアネート",
            "percent": 1.99,
            "source": null
          },
          {
            "name": "3-ブテニルイソチオシアネート",
            "percent": 1.41,
            "source": null
          },
          {
            "name": "6-ヘプテニルイソチオシアネート",
            "percent": 0.93,
            "source": null
          },
          {
            "name": "sec-ブチルイソチオシアネート",
            "percent": 0.81,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "小嶋操・浜田浩・利光典子 (1985) 日本食品工業学会誌 32(12):886-891「沢ワサビ根茎の乾燥によるカラシ油類の変化」, Table 3（生ワサビ A〜E の括弧内の値の平均を計算）",
            "url": "https://www.jstage.jst.go.jp/article/nskkk1962/32/12/32_12_886/_article/-char/ja/"
          }
        ],
        "note": "総量は定量されたアリルイソチオシアネートだけの値で（ほかのイソチオシアネートを足すと約1割多い）、乾燥粉末では0.856〜1.335%。組成は長野県穂高の在来種の根茎ペースト（1 kg）のエーテル抽出精油の中性部（収率0.17%）の面積%で（伊奈和夫ほか (1981) 日本食品工業学会誌 28(7):365-370「沢わさび，西洋わさびの揮発成分」, Table 2 の値: Allyl NCS 90.19, 4-Pentenyl NCS 2.99, 5-Hexenyl NCS 1.99, 3-Butenyl NCS 1.41, 6-Heptenyl NCS 0.93, Sec-butyl NCS 0.81）、FPDの分析（小嶋ら）でも生ワサビのアリル体は93.65〜97.57%。わさび特有とされる6-メチルチオヘキシルイソチオシアネートなどの長鎖体はこれらの古い分析には出てこない。表の4成分（ヘキサナールなど）はこれらの分析で報告がなく null。"
      }
    },
    {
      "name": "桑の葉",
      "reading": "くわのは",
      "latin": "Morus alba",
      "group": "茶・ドライ",
      "part": "葉",
      "aroma": "桑茶、青い葉、軽い甘み、穏やかな渋み",
      "role": "緑茶より柔らかい葉の香りを足す。",
      "components": [
        "フィトール",
        "ヘキサナール",
        "タンニン",
        "フルフラール"
      ]
    },
    {
      "name": "胡麻",
      "reading": "ごま",
      "latin": "Sesamum indicum",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "胡麻、焙煎、ナッツ、香ばしさ",
      "role": "ローストしたナッティさと和の香ばしさを加える。",
      "components": [
        "ピラジン類",
        "フルフラール",
        "マルトール",
        "β-カリオフィレン",
        "フラノン類",
        "ヒドロキシアセトン",
        "フェニルアセトアルデヒド",
        "2-メチルブタナール",
        "ジメチルスルホン",
        "2,4-ジメチルベンズアルデヒド"
      ],
      "literature": {
        "oil": {
          "percent": 0.0009871,
          "min": 0.0004892,
          "max": 0.001121,
          "label": "香気成分",
          "basis": "中国産白胡麻（Zhuzhi-22）を175℃40分焙煎してコロイドミルですりつぶした胡麻ペースト。SAFE抽出・GC-O-MSで香りのあった50成分を4-ノナノールで半定量（µg/kg）した合計。代表値は水分5%のまま焙煎した試料（SP-5）、幅は焙煎前の水分を5〜25%に調整した5試料",
          "source": 0
        },
        "composition": [
          {
            "name": "ピラジン類",
            "percent": 43.26,
            "source": 0
          },
          {
            "name": "フラノン類",
            "percent": 8.94,
            "source": 0
          },
          {
            "name": "ヒドロキシアセトン",
            "percent": 6.61,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 6.44,
            "source": 0
          },
          {
            "name": "フェニルアセトアルデヒド",
            "percent": 4.39,
            "source": 0
          },
          {
            "name": "2-メチルブタナール",
            "percent": 4.38,
            "source": 0
          },
          {
            "name": "ジメチルスルホン",
            "percent": 3.43,
            "source": 0
          },
          {
            "name": "2,4-ジメチルベンズアルデヒド",
            "percent": 3.22,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Yang M. et al. (2024) Food Chem X 21:101100, Table 3（50成分の定量値の合計を計算：SP-5 9870.8 µg/kg、5試料 4891.9〜11205.7 µg/kg。ND は0として扱った）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10792181/"
          }
        ],
        "note": "焙煎胡麻（粒）そのものの定量値は見つからず、焙煎してすりつぶした胡麻ペーストの値で代用し、GC-Oで香りのあった50成分だけの合計のため総量は下限に近い。同じ大学の別研究（Hou et al. 2019 J Oleo Sci 68:551, Table 1、SPME）は140〜190℃焙煎の胡麻ペーストでピラジン類だけで495〜1983 µg/gと2桁以上多く、定量法による差が非常に大きい。マルトールとβ-カリオフィレンはどちらの分析にも報告がなくnull。"
      }
    },
    {
      "name": "スイートシシリー",
      "reading": "すいーとししりー",
      "latin": "Myrrhis odorata",
      "group": "ハーブ・グリーン",
      "part": "葉・種子",
      "aroma": "アニス、甘いハーブ、青い葉、柔らかなスパイス",
      "role": "アニス様の甘さを、葉の青さで軽く整える。",
      "components": [
        "アネトール",
        "エストラゴール",
        "リナロール",
        "フェンコン",
        "メチルオイゲノール",
        "ネロリドール",
        "ゲルマクレンD"
      ],
      "literature": {
        "oil": {
          "percent": 0.45,
          "min": 0.4,
          "max": 0.5,
          "basis": "リトアニア産とフランス産の葉を水蒸留。代表値は2産地の平均（要旨の値で、乾燥葉か生葉かは不明）",
          "source": 0
        },
        "composition": [
          {
            "name": "アネトール",
            "percent": 49.4,
            "source": 0
          },
          {
            "name": "メチルオイゲノール",
            "percent": 13.7,
            "source": 0
          },
          {
            "name": "ネロリドール",
            "percent": 11.1,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 4.65,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Dobravalskytė D., Venskutonis P.R., Zebib B., Merah O., Talou T. (2013) J. Essent. Oil Res. 25(1):44-48, Abstract（本文は有料のため要旨をOpenAlexで確認）（2産地の平均を計算）",
            "url": "https://doi.org/10.1080/10412905.2012.744703"
          }
        ],
        "note": "リトアニア・フランス産の葉の精油の要旨の値（2産地の平均）で、全文が有料のため乾燥葉か生葉か、エストラゴール・リナロール・フェンコンの量は確かめられず null。フィンランド産・ロシアの植物園の葉の精油は(E)-アネトールが83〜85%と高く（要旨）、産地で型が違う。種子（果実）の精油の資料は見つからず、葉の値を使った。"
      }
    },
    {
      "name": "マックマット",
      "reading": "まっくまっと",
      "latin": "Clausena indica",
      "group": "シトラス",
      "part": "葉・果実",
      "aroma": "青い柑橘、カレーリーフ、ハーブ、軽い苦味",
      "role": "東南アジアらしい青い柑橘感と葉のスパイスを足す。",
      "components": [
        "リモネン",
        "β-カリオフィレン",
        "リナロール",
        "ヘキサナール",
        "ミリスチシン",
        "β-ミルセン",
        "α-スプリンゲン",
        "β-ビサボレン",
        "エレミシン",
        "テルピノレン"
      ],
      "literature": {
        "oil": {
          "percent": 0.36,
          "basis": "ベトナム北部（タイグエン省・バッカン省、2019年9月）の熟した果実を35℃で12日乾燥し、6時間水蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "ミリスチシン",
            "percent": 68.3,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 6.5,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 5.5,
            "source": 0
          },
          {
            "name": "α-スプリンゲン",
            "percent": 2.9,
            "source": 0
          },
          {
            "name": "β-ビサボレン",
            "percent": 2.6,
            "source": 0
          },
          {
            "name": "エレミシン",
            "percent": 1.9,
            "source": 0
          },
          {
            "name": "テルピノレン",
            "percent": 1.6,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 0.6,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Quan, Anh, Lam et al. (2022) Molecules 27(3):774, Table 1（CI＝Clausena indica の熟果の精油）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8840550/"
          }
        ],
        "note": "マックマットは表の Clausena indica（葉・果実）として扱った。この種の精油は産地・部位で型が大きく違い、ベトナム産熟果はミリスチシン68.3%（ナツメグ様）、ベトナム産の枝葉はミリスチシン35.3%・テルピノレン16.7%・δ-3-カレン11.3%、地上部はテルピノレン53.9〜56.1%、葉だけの別報ではメントン70.6%、インド産の葉はサビネン53.1%・テルピネン-4-オール13.1%（いずれも要旨・引用の値）。全成分表と収率がそろうのは果実だけなので果実の値を使った；リナロール（同じ表の他2種では検出）とヘキサナールは検出されていない。α-スプリンゲンはジテルペン炭化水素で、系統一覧にないため新しい系統「ジテルペン」とした。"
      }
    },
    {
      "name": "エゾノカワラマツバ",
      "reading": "えぞのかわらまつば",
      "latin": "Galium boreale",
      "group": "ハーブ・グリーン",
      "part": "花・葉",
      "aroma": "乾いた草、淡い花、干し草、穏やかな甘さ",
      "role": "北方の野草らしいドライな草花感を作る。",
      "components": [
        "クマリン",
        "フィトール",
        "ヘキサナール",
        "リナロール",
        "2-メチルベンズアルデヒド",
        "ゲルマクレンD",
        "4-メチルベンズアルデヒド",
        "cis-3-ヘキセノール",
        "フェニルアセトアルデヒド",
        "ドデカナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.01227,
          "min": 0.00401,
          "max": 0.02052,
          "basis": "イタリア西アルプスの開花期の野生カワラマツバ（G. verum）の生の葉と花を別々に水蒸気蒸留（1時間）し内部標準で定量した精油量。代表値は葉と花を1:1で混ぜたとした平均、範囲は葉だけ〜花だけ",
          "source": 0
        },
        "composition": [
          {
            "name": "2-メチルベンズアルデヒド",
            "percent": 26.55,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 25.2,
            "source": 0
          },
          {
            "name": "4-メチルベンズアルデヒド",
            "percent": 8.95,
            "source": 0
          },
          {
            "name": "cis-3-ヘキセノール",
            "percent": 6.1,
            "source": 0
          },
          {
            "name": "フェニルアセトアルデヒド",
            "percent": 4.03,
            "source": 0
          },
          {
            "name": "ドデカナール",
            "percent": 2.92,
            "source": 0
          },
          {
            "name": "フィトール",
            "percent": 0.68,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 0.61,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.35,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Tava A. et al. (2020) Molecules 25(10):2333, Table 1（葉 40.13 µg/g と花 205.21 µg/g の平均 122.67 µg/g を計算。G. verum の値で代用）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7287616/"
          }
        ],
        "note": "エゾノカワラマツバそのもの（仕様の学名 G. boreale＝キタノカワラマツバの資料もない）の分析は見つからず、同属のカワラマツバ類の基準種 G. verum（イタリア西アルプス、開花期の野生品）の生の葉と花の精油で代用。和名エゾノカワラマツバは G. verum の変種（var. trachycarpum）に当てられることが多いが未確認。花・葉を1:1で混ぜたと仮定して平均した（葉だけなら精油0.004%で2-メチルベンズアルデヒド26.3%・cis-3-ヘキセノール17.3%が主、花だけなら0.021%でゲルマクレンD 27.7%・2-メチルベンズアルデヒド24.0%が主）。生の重量あたりの値で、乾燥品の定量値は見つからなかった（エストニア産の乾燥品のSPME分析〈Laanet et al. 2023, Molecules 28:2867〉は相対%のみ）。クマリンはどちらの分析でも検出されなかった。"
      }
    },
    {
      "name": "桜島小みかん",
      "reading": "さくらじまこみかん",
      "latin": "Citrus kinokuni",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "小みかん、明るい果皮、甘い柑橘、軽い苦味",
      "role": "日本のみかんらしい丸い柑橘トップを加える。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "リナロール",
        "デカナール",
        "β-ミルセン",
        "α-ピネン",
        "オクタナール",
        "チモール",
        "ノナナール",
        "ドデカナール"
      ],
      "literature": {
        "oil": {
          "percent": 1.9,
          "basis": "鹿児島県桜島産の紀州みかん（小みかん）50個の生果皮1.03 kgを刻んでペンタンで30分抽出し、SAFE（高真空蒸留、40℃）で分けた油19.5 g",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 87.92,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 4.16,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 1.78,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 1.01,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.61,
            "source": 0
          },
          {
            "name": "デカナール",
            "percent": 0.43,
            "source": 0
          },
          {
            "name": "オクタナール",
            "percent": 0.11,
            "source": 0
          },
          {
            "name": "チモール",
            "percent": 0.07,
            "source": 0
          },
          {
            "name": "ノナナール",
            "percent": 0.07,
            "source": 0
          },
          {
            "name": "ドデカナール",
            "percent": 0.06,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Miyazawa, Fujita & Kubota (2010) Biosci Biotechnol Biochem 74(4):835-842, Table 1",
            "url": "https://www.jstage.jst.go.jp/article/bbb/74/4/74_90937/_article"
          }
        ],
        "note": "桜島産の紀州みかんそのものの分析。果皮油を非極性画分（98.1%）と極性画分（1.9%）に分けて測っているため、各画分の面積%に画分の重量比を掛けて全体の割合を計算した（面積%と重量%の違いは無視）。非極性画分の表は香りに効く成分だけを載せており（リモネン・γ-テルピネン・ミルセン・α-ピネンで面積の96.7%）、β-ピネンやサビネンなどの値はない。極性画分ではリナロールとオクタナールが最も強い香り（FD 625）で、温州みかんより脂肪族アルデヒドが7〜400倍多く、チモールも特徴香。収率は第2弾の温州みかん（0.70%）と同じ方法・同じ論文の値。"
      }
    },
    {
      "name": "松の芽",
      "reading": "まつのめ",
      "latin": "Pinus spp.",
      "group": "骨格・樹脂",
      "part": "新芽",
      "aroma": "松葉、若い樹脂、青い針葉樹、清涼感",
      "role": "針葉樹の若い青さと樹脂感を前面に出す。",
      "components": [
        "α-ピネン",
        "β-ピネン",
        "リモネン",
        "カンフェン",
        "ゲルマクレンD",
        "ベルチシロール",
        "β-カリオフィレン",
        "酢酸ボルニル"
      ],
      "literature": {
        "oil": {
          "percent": 0.82,
          "basis": "ヨーロッパクロマツの若芽（針葉つき新梢、ルーマニア）を乾燥・粉砕し水蒸留4時間（5回の平均）",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 74.27,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 7.06,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 4.33,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 2.74,
            "source": 0
          },
          {
            "name": "ベルチシロール",
            "percent": 2.14,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 1.99,
            "source": 0
          },
          {
            "name": "カンフェン",
            "percent": 1.24,
            "source": 0
          },
          {
            "name": "酢酸ボルニル",
            "percent": 1.21,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Visan D. et al. (2021) Pharmaceuticals 14(11):1159, Table 1（Pinus nigra 若芽）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8617773/"
          }
        ],
        "note": "ヨーロッパクロマツ（Pinus nigra）の若芽（乾燥）の値で、生の新芽では生重量あたりの精油量はかなり低い。ヨーロッパアカマツ（P. sylvestris）の芽はロシア・トムスクの22試料で精油0.26〜0.88%（風乾、ロシア薬局方の規格は0.3%以上）、3-カレン13〜35%が主でα-ピネンは5〜19%と、種・産地で組成が大きく違う（Kolomiets ら 2019 Khimiya Rastitel'nogo Syr'ya 2019(1):181-190）。日本のアカマツ・クロマツの新芽の値は見つからなかった。"
      }
    },
    {
      "name": "ペッパーベリー",
      "reading": "ぺっぱーべりー",
      "latin": "Tasmannia lanceolata",
      "group": "シード・スパイス",
      "part": "果実",
      "aroma": "胡椒、赤い果実、樹皮、じんわりした辛味",
      "role": "黒胡椒より果実味のあるスパイス感を足す。",
      "components": [
        "β-カリオフィレン",
        "α-ピネン",
        "リナロール",
        "ピペリン",
        "1,8-シネオール",
        "グアイオール",
        "カラメネン",
        "ビシクロゲルマクレン",
        "β-ピネン",
        "δ-カジネン",
        "オイゲノール"
      ],
      "literature": {
        "oil": {
          "percent": 0.32,
          "min": 0.28,
          "max": 2,
          "basis": "【葉の値で代用】タスマニア北西部パラウェ産の葉と小枝（生）680 kgを小型の商用蒸留器で水蒸気蒸留2時間。範囲は同じ論文が引くStevens (1955) の葉・茎の0.28〜2%（葉だけのとき高い）",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 12.7,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 10.14,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 6.35,
            "source": 0
          },
          {
            "name": "グアイオール",
            "percent": 6.33,
            "source": 0
          },
          {
            "name": "カラメネン",
            "percent": 5.15,
            "source": 0
          },
          {
            "name": "ビシクロゲルマクレン",
            "percent": 4.59,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 3.74,
            "source": 0
          },
          {
            "name": "δ-カジネン",
            "percent": 2.99,
            "source": 0
          },
          {
            "name": "オイゲノール",
            "percent": 2.25,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 1.48,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Read C. (1995) Aspects of leaf and extract production from Tasmannia lanceolata. PhD thesis, University of Tasmania, 3.5.3節 p.64–65（範囲はStevens 1955の引用）",
            "url": "https://figshare.utas.edu.au/articles/thesis/Aspects_of_leaf_and_extract_production_from_Tasmannia_lanceolata/23246216"
          }
        ],
        "note": "果実を蒸留した精油の収率・組成は、PubMed・Europe PMCの全文検索、タスマニア大学の学位論文2本、RIRDC報告でも見つからず、葉と小枝の水蒸気蒸留精油（Read 1995）で代用した。果実の資料は石油エーテル抽出物8.2%（揮発画分の45%がポリゴジアールで、葉より単テルペンが多い：Menary et al. 1999, RIRDC 99/124）だけ。表の1,8-シネオールとビシクロゲルマクレンは他成分と重なる可能性があり、辛味のポリゴジアールは蒸留油では0.75%と少なく、ピペリンは本種に含まれない。"
      }
    },
    {
      "name": "ゴジベリー",
      "reading": "ごじべりー",
      "latin": "Lycium barbarum",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "クコ、赤い果実、軽いドライフルーツ、酸",
      "role": "乾いた赤い果実感と軽い甘酸っぱさを加える。",
      "components": [
        "カロテノイド類",
        "アントシアニン",
        "リンゴ酸",
        "酢酸エチル"
      ]
    },
    {
      "name": "レッドペッパー",
      "reading": "れっどぺっぱー",
      "latin": "Capsicum annuum",
      "group": "シード・スパイス",
      "part": "果実",
      "aroma": "赤唐辛子、甘い青さ、温かい辛味、乾いた果皮",
      "role": "辛味を主張しすぎず、温度感と赤い果皮感を足す。",
      "components": [
        "カプサイシン",
        "ピラジン類",
        "β-カリオフィレン",
        "リモネン",
        "6-メチル-3,5-ヘプタジエン-2-オン",
        "ゲラニルアセトン",
        "DDMP（ジヒドロマルトール）",
        "イオノン類",
        "サフラナール",
        "ジヒドロアクチニジオリド",
        "フェニルアセトアルデヒド"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "6-メチル-3,5-ヘプタジエン-2-オン",
            "percent": 8.21,
            "source": 0
          },
          {
            "name": "ゲラニルアセトン",
            "percent": 6.42,
            "source": 0
          },
          {
            "name": "DDMP（ジヒドロマルトール）",
            "percent": 6.39,
            "source": 0
          },
          {
            "name": "イオノン類",
            "percent": 5.88,
            "source": 0
          },
          {
            "name": "サフラナール",
            "percent": 4.51,
            "source": 0
          },
          {
            "name": "ジヒドロアクチニジオリド",
            "percent": 4.39,
            "source": 0
          },
          {
            "name": "フェニルアセトアルデヒド",
            "percent": 3.86,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 2.26,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Reale S. et al. (2021) Molecules 26(20):6177, Table 2（市販のスイートパプリカ粉。列はAltino 1 | Altino 2 | Altino 3 | Senise | Paprika の順で、Paprikaの値。SPMEの相対面積%）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8538362/"
          }
        ],
        "note": "パプリカ粉の精油収率・香気成分の定量値（絶対量）は開ける資料で見つからず、市販スイートパプリカ（イタリアの製造者、2020年産）のSPME相対面積%（30回分析の平均）だけを使った（oilはnull）。この試料はテトラデカン24%などアルカンが多く、ピラジン類とβ-カリオフィレンは検出されていない（イオノン類はβ-イオノンのみ）。参考：辛味種の乾燥唐辛子の香気成分の総量は約0.009〜0.014%（Wu et al. 2025、唐辛子の項）。"
      }
    },
    {
      "name": "マスカット",
      "reading": "ますかっと",
      "latin": "Vitis vinifera Muscat group",
      "group": "果実・ベリー",
      "part": "果実・果皮",
      "aroma": "マスカット、白ぶどう、花、明るい果実",
      "role": "華やかな白ぶどう感と軽いフローラルを加える。",
      "components": [
        "リナロール",
        "ゲラニオール",
        "ネロール",
        "酒石酸"
      ]
    },
    {
      "name": "クロウベリー",
      "reading": "くろうべりー",
      "latin": "Empetrum nigrum",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "黒いベリー、酸、渋み、北方の果実",
      "role": "濃い色のベリー感とドライな酸を補う。",
      "components": [
        "アントシアニン",
        "タンニン",
        "リンゴ酸",
        "酢酸エチル"
      ]
    },
    {
      "name": "タラゴン",
      "reading": "たらごん",
      "latin": "Artemisia dracunculus",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "アニス、甘いハーブ、青い葉、ほろ苦さ",
      "role": "甘いハーブ感を立て、スパイスと葉の間をつなぐ。",
      "components": [
        "エストラゴール",
        "アネトール",
        "リナロール",
        "β-カリオフィレン",
        "β-オシメン",
        "メチルオイゲノール",
        "サビネン",
        "リモネン"
      ],
      "literature": {
        "oil": {
          "percent": 1.95,
          "min": 1.13,
          "max": 3.39,
          "basis": "フレンチタラゴンの葉を温風で水分10%まで乾燥し水蒸留。代表値は推奨の45℃乾燥（1.95 mL/100 g乾物）、幅は60℃〜90℃乾燥。生葉は5.3 mL/100 g乾物",
          "source": 0
        },
        "composition": [
          {
            "name": "エストラゴール",
            "percent": 68.6,
            "source": 0
          },
          {
            "name": "β-オシメン",
            "percent": 12.01,
            "source": 0
          },
          {
            "name": "メチルオイゲノール",
            "percent": 8.5,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 4.93,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 2.4,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 0.43,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.1,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Arabhosseini A. (2005) Quality, energy requirement and costs of drying tarragon. PhD thesis, Wageningen University, Chapter 4, Table 2・Table 4",
            "url": "https://edepot.wur.nl/23177"
          },
          {
            "title": "Polito F. et al. (2026) Molecules 31(15):2583, Table 1（Arabhosseini の表に無いため補った）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13468418/"
          }
        ],
        "note": "フレンチタラゴン（エストラゴール型）。成分は生葉の精油の値で、乾燥（特に60℃）でエストラゴールの割合が下がる。β-オシメンは(Z)体と(E)体の合計。アネトールはどちらの分析でも検出されず null。ロシアンタラゴンはサビネン39%・エレミシン16%・メチルオイゲノール15%でエストラゴールがほとんどない（同じ論文のTable 4）。"
      }
    },
    {
      "name": "芳樟",
      "reading": "ほうしょう",
      "latin": "Cinnamomum camphora linalool type",
      "group": "樹皮・ウッディ",
      "part": "葉・木部",
      "aroma": "リナロール、柔らかな木質、樟脳、花",
      "role": "樟脳の清涼感を抑えた、丸い木質フローラルを作る。",
      "components": [
        "リナロール",
        "カンファー",
        "1,8-シネオール",
        "α-ピネン",
        "エレメン類",
        "β-カリオフィレン",
        "シトラール",
        "ゲルマクレンD"
      ],
      "literature": {
        "oil": {
          "percent": 1.55,
          "min": 0.27,
          "max": 2.83,
          "basis": "中国13省35集団の974本のうちリナロール型140本の生葉（約100 g）を水蒸留3時間（改良クレベンジャー）し、油を秤量した収率の平均と範囲",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 88.78,
            "source": 1
          },
          {
            "name": "エレメン類",
            "percent": 1.8,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 1.6,
            "source": 1
          },
          {
            "name": "シトラール",
            "percent": 0.71,
            "source": 1
          },
          {
            "name": "ゲルマクレンD",
            "percent": 0.7,
            "source": 1
          },
          {
            "name": "カンファー",
            "percent": 0.45,
            "source": 1
          },
          {
            "name": "1,8-シネオール",
            "percent": 0.35,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Zhang T. et al. (2023) Molecules 28(3):973, Table 4（リナロール型の収率）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9919661/"
          },
          {
            "title": "Hou J. et al. (2020) Front Genet 11:598714, Table 1（リナロール型クローン LI-1〜3 の生葉精油の平均を計算。「—」（不検出または0.1%未満）は0として計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7689033/"
          }
        ],
        "note": "クスノキはケモタイプで組成が全く違うため、リナロール型（芳樟）の生葉の精油を採用。量は中国のリナロール型140本の生葉の水蒸留収率（個体差が約10倍）、成分は江西省南昌のリナロール型クローン（3反復、各5株以上の混合）の生葉精油の平均で、Zhang ら 2023 のリナロール型個体（FJ-YX-29）でもリナロール93.73%・カンファー0.23%・1,8-シネオール0.03%。α-ピネンはリナロール型では検出されず（Hou ら 2020 の表の「Pinene」は異性体の記載がなく0〜0.36%）、other_major のエレメンは原表の記号が「ç-Elemene」で異性体が分からない。乾燥葉や材（芳樟材油）の収率は見つからず、乾燥葉なら重量あたりの精油量は生葉より多くなる。"
      }
    },
    {
      "name": "ほうじ茶",
      "reading": "ほうじちゃ",
      "latin": "Camellia sinensis",
      "group": "和ボタニカル",
      "part": "焙煎茶葉",
      "aroma": "焙煎茶、香ばしさ、穀物、柔らかな渋み",
      "role": "茶葉の渋みより、焙煎の香ばしさと丸みを足す。",
      "components": [
        "ピラジン類",
        "フルフラール",
        "カフェイン",
        "テアニン"
      ]
    },
    {
      "name": "トウヒ",
      "reading": "とうひ",
      "latin": "Picea spp.",
      "group": "骨格・樹脂",
      "part": "新芽・針葉",
      "aroma": "スプルース、針葉樹、樹脂、青い清涼感",
      "role": "森の青いトップノートと針葉樹の輪郭を作る。",
      "components": [
        "α-ピネン",
        "β-ピネン",
        "ボルネオール",
        "カンフェン",
        "リモネン",
        "酢酸ボルニル",
        "マノオール",
        "δ-カジネン",
        "サンテン",
        "α-カジノール"
      ],
      "literature": {
        "oil": {
          "percent": 1.02,
          "basis": "ヨーロッパトウヒの若芽（針葉つき新梢、ルーマニア）を乾燥・粉砕し水蒸留4時間（5回の平均）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 21.14,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 11.64,
            "source": 0
          },
          {
            "name": "酢酸ボルニル",
            "percent": 11.08,
            "source": 0
          },
          {
            "name": "カンフェン",
            "percent": 10.7,
            "source": 0
          },
          {
            "name": "マノオール",
            "percent": 9.4,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 4.62,
            "source": 0
          },
          {
            "name": "δ-カジネン",
            "percent": 4.21,
            "source": 0
          },
          {
            "name": "サンテン",
            "percent": 3.83,
            "source": 0
          },
          {
            "name": "α-カジノール",
            "percent": 3.78,
            "source": 0
          },
          {
            "name": "ボルネオール",
            "percent": 0.78,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Visan D. et al. (2021) Pharmaceuticals 14(11):1159, Table 1（Picea abies 若芽）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8617773/"
          }
        ],
        "note": "ヨーロッパトウヒ（Picea abies）の若芽を乾燥して蒸留した値で、生の新芽は水分が多く生重量あたりの精油量はこれよりかなり低い。日本のトウヒ（Picea jezoensis var. hondoensis）の葉油含量は乾葉100 gあたり1.1 mL（林野庁 2018 表3）。針葉・枝の精油は季節差が大きく、マノオールは4月1.5%〜6月18.7%と変わる（Plants 2023, 12:188）。"
      }
    },
    {
      "name": "八朔",
      "reading": "はっさく",
      "latin": "Citrus hassaku",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "八朔、ほろ苦い果皮、和柑橘、爽やかな酸",
      "role": "グレープフルーツより和らいだ苦味の柑橘感を出す。",
      "components": [
        "リモネン",
        "ヌートカトン",
        "デカナール",
        "γ-テルピネン",
        "β-ミルセン",
        "α-ピネン",
        "β-ピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.2,
          "basis": "八朔2個の果皮の色の濃い部分だけをおろし金ですりおろし、水蒸気蒸留2時間（約0.4 gの精油、収率約0.2%。収率の基準〔果皮重か〕は論文に明記なし）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 85.95,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 8.59,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 2.23,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 1.01,
            "source": 1
          },
          {
            "name": "ヌートカトン",
            "percent": 0.4,
            "source": 2
          },
          {
            "name": "β-ピネン",
            "percent": 0.4,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "村山・山本 (2006) 化学と教育 54(12):664-667（ハッサク果皮の水蒸気蒸留）",
            "url": "https://www.jstage.jst.go.jp/article/kakyoshi/54/12/54_KJ00007744894/_article/-char/ja/"
          },
          {
            "title": "金子・長谷川・矢野 (1996) 日本食品低温保蔵学会誌 22(4):235-240, Table 1（ハッサク3試料〔No.37〜39〕の果皮磨砕物のヘッドスペース揮発成分、ピーク面積%。3試料の平均を計算）",
            "url": "https://www.jstage.jst.go.jp/article/jafps1987/22/4/22_4_235/_article/-char/ja/"
          },
          {
            "title": "Sawamura, Kuwahara, Shichiri & Aoki (1990) Agric Biol Chem 54(3):803-805（高知県果樹試験場産、1988年12月収穫のハッサクの冷圧油、w/w%）",
            "url": "https://www.jstage.jst.go.jp/article/bbb1961/54/3/54_3_803/_article/-char/ja/"
          }
        ],
        "note": "日本産ハッサクの精油の組成表は見つからず、組成は果樹試験場興津支場・愛媛県・佐賀県果樹試験場産の3試料（No.37〜39）の果皮磨砕物のヘッドスペース揮発成分（面積%の平均。ミルセン・α-ピネン・β-ピネンも同じ）で代用し、ヌートカトンだけ高知産の冷圧油の値を補った（同じ研究室の2001年の分析では0.03%で、熟度・貯蔵で大きく変わる）。デカナールはこのヘッドスペース分析では同定されていない。フランス・コルシカ島の保存園の'Hassaku'の果皮油（Luro et al. 2025：リモネン94.88%、γ-テルピネン不検出、ヌートカトン0.27%、デカナール0.29%、おろし皮の冷抽出収率2.85%）はグレープフルーツと同じ組成で、論文で独自の遺伝子型とされたグレープフルーツ群の6品種にも入っておらず（グレープフルーツと同じ遺伝子型の群に含まれるとみられる）、本来の八朔ではない可能性が高いため使わなかった。精油量は小学校教材向けの簡易な水蒸気蒸留（2時間）の値で、基準も明記がなく実際より低い可能性がある（参考：第2弾の甘夏は生果皮で約0.4%）。"
      }
    },
    {
      "name": "ライチ",
      "reading": "らいち",
      "latin": "Litchi chinensis",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "ライチ、バラ、白い果実、みずみずしい甘さ",
      "role": "白い果実とローズ様の華やかさを足す。",
      "components": [
        "ローズオキサイド",
        "ゲラニオール",
        "リナロール",
        "酢酸エチル"
      ]
    },
    {
      "name": "ビーツ",
      "reading": "びーつ",
      "latin": "Beta vulgaris",
      "group": "果実・野菜",
      "part": "根",
      "aroma": "土、赤い根菜、甘み、軽い青さ",
      "role": "土っぽさと根菜の甘みでボディを補う。",
      "components": [
        "ヘキサナール",
        "フィトール",
        "グルタミン酸",
        "リンゴ酸"
      ]
    },
    {
      "name": "ヘーゼルナッツ",
      "reading": "へーぜるなっつ",
      "latin": "Corylus avellana",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "ヘーゼルナッツ、焙煎、甘い香ばしさ、油脂",
      "role": "丸いナッツ香と焙煎の厚みを加える。",
      "components": [
        "ピラジン類",
        "フルフラール",
        "マルトール",
        "バニリン",
        "ヘキサナール",
        "3-ペンテン-2-オン",
        "ヒドロキシアセトン",
        "ペンタナール",
        "1-ヘキサノール",
        "フィルベルトン"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "ヘキサナール",
            "percent": 23.08,
            "source": 0
          },
          {
            "name": "3-ペンテン-2-オン",
            "percent": 6.18,
            "source": 0
          },
          {
            "name": "ヒドロキシアセトン",
            "percent": 4.56,
            "source": 0
          },
          {
            "name": "ピラジン類",
            "percent": 3.71,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 1.76,
            "source": 0
          },
          {
            "name": "ペンタナール",
            "percent": 1.57,
            "source": 0
          },
          {
            "name": "1-ヘキサノール",
            "percent": 1.37,
            "source": 0
          },
          {
            "name": "フィルベルトン",
            "percent": 1.29,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Şahin S. et al. (2025) J Food Sci 90(7):e70384, Table 5（焙煎法（155 °C・15分）で皮むきした RH の保存0か月。各成分の面積を全成分の面積の合計7003（×10³）で割って計算。2,5-ジメチルピラジン183＋2-メチルピラジン77の合計）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12226203/"
          }
        ],
        "note": "トルコ産を伝統的な焙煎法（155 °C・15分）で皮むきした直後のSPMEの面積%（内部標準なし）で、絶対量は分からない。定量した研究（Alasalvar et al. 2003、Burdack-Freitag & Schieberle 2010、Kiefl & Schieberle 2013）は全文を開けず、要旨では最適な焙煎でフィルベルトンと3-メチル-4-ヘプタノンがそれぞれ450 µg/kg超、2-アシル-1-ピロリン2種とピラジン2種の合計は400 µg/kg以下とされ、総説（Appl Sci 2025, 15:1258）は焙煎品のピラジン類を最大4608 µg/kgと紹介している。皮むき程度の焙煎なのでピラジン類は本格的な焙煎品より少ないと考えられ、酢酸（14.4%）・ヘキサン酸（6.8%）・2-エチルヘキサノール（4.3%）・グリコール類は香りの成分から外した。"
      }
    },
    {
      "name": "パチュリ",
      "reading": "ぱちゅり",
      "latin": "Pogostemon cablin",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "土、乾いた葉、ウッディ、甘い重さ",
      "role": "香りの低い位置に土っぽい持続感を作る。",
      "components": [
        "β-カリオフィレン",
        "α-フムレン",
        "ゲルマクレンD",
        "ネロリドール",
        "パチュリアルコール",
        "α-ブルネセン",
        "α-グアイエン",
        "セイシェレン",
        "α-パチュレン",
        "β-パチュレン"
      ],
      "literature": {
        "oil": {
          "percent": 2.6,
          "min": 0.54,
          "max": 5.2,
          "basis": "乾燥葉の精油の割合の72文献の平均（幅0.54〜5.2%）",
          "source": 0
        },
        "composition": [
          {
            "name": "パチュリアルコール",
            "percent": 39,
            "source": 0
          },
          {
            "name": "α-ブルネセン",
            "percent": 14,
            "source": 0
          },
          {
            "name": "α-グアイエン",
            "percent": 11,
            "source": 0
          },
          {
            "name": "セイシェレン",
            "percent": 6.6,
            "source": 0
          },
          {
            "name": "α-パチュレン",
            "percent": 4.5,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 3.1,
            "source": 0
          },
          {
            "name": "β-パチュレン",
            "percent": 3,
            "source": 0
          },
          {
            "name": "α-フムレン",
            "percent": 0.69,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 0.12,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "van Beek T.A., Joulain D. (2018) Flavour Fragr. J. 33(1):6-51（総説）, 2.1節・Table 4",
            "url": "https://onlinelibrary.wiley.com/doi/full/10.1002/ffj.3418"
          }
        ],
        "note": "成分はパチュリ油100以上の分析の平均（総説のTable 4）。ネロリドールは表になく null。ポゴストン（平均8.9%、24分析のみ）は中国産など一部の油に多いだけなので other_major に入れなかった。精油はふつう乾燥・軽く発酵させた葉を長時間蒸留してとる（生葉では約0.3%）。"
      }
    },
    {
      "name": "ダミアナ",
      "reading": "だみあな",
      "latin": "Turnera diffusa",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "乾いたハーブ、蜂蜜、軽いスパイス、茶葉",
      "role": "ドライなハーブ感と甘い余韻を静かに足す。",
      "components": [
        "リナロール",
        "1,8-シネオール",
        "β-カリオフィレン",
        "フラボノイド類",
        "δ-カジネン",
        "カリオフィレンオキシド",
        "β-エレメン",
        "α-クベベン",
        "β-ピネン",
        "ミルテナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.29000000000000004,
          "min": 0.14,
          "max": 0.44,
          "basis": "最小はブラジル産の乾燥葉を水蒸留4時間（0.14%）、最大はインドの生薬規格試験の精油含量（0.44%、要旨のみ）。計算には中央値を使う",
          "source": 0
        },
        "composition": [
          {
            "name": "δ-カジネン",
            "percent": 7.73,
            "source": 1
          },
          {
            "name": "カリオフィレンオキシド",
            "percent": 5.3,
            "source": 1
          },
          {
            "name": "1,8-シネオール",
            "percent": 2.79,
            "source": 1
          },
          {
            "name": "β-エレメン",
            "percent": 2.66,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 2.37,
            "source": 1
          },
          {
            "name": "α-クベベン",
            "percent": 2.27,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 1.97,
            "source": 1
          },
          {
            "name": "ミルテナール",
            "percent": 1.82,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Bicchi C. et al. (2003) Flavour Fragr. J. 18(1):59-61（本文はAcademia.eduの公開PDFで確認）／Kumar S., Taneja R., Sharma A. (2006) J. Med. Food 9(2):254-260, Abstract",
            "url": "https://www.academia.edu/122047070/Components_ofTurnera_diffusa_Willd_var_afrodisiaca_Ward_Urb_Essential_Oil"
          },
          {
            "title": "Alcaraz-Meléndez L., Delgado-Rodríguez J., Real-Cosío S. (2004) Fitoterapia 75(7-8):696-701, Table 1（野生株・乾燥材料の列。本文はAcademia.eduの公開PDFで確認）（最小は同じ野生株の生の材料、最大は Bicchi et al. 2003 のブラジル産乾燥品）",
            "url": "https://www.academia.edu/86372979/Analysis_of_essential_oils_from_wild_and_micropropagated_plants_of_damiana_Turnera_diffusa_"
          }
        ],
        "note": "市販ダミアナの産地メキシコ（バハ・カリフォルニア・スル）の野生株6株の乾燥材料（葉・茎・花）の精油で、同定できたピークは全体の4割ほど。リナロールは野生株で不検出（ブラジル産は0.3%）、フラボノイド類は揮発しないので null。精油の量は資料ごとの差が大きく（メキシコの生葉で約1%の報告もある）、ブラジル産の分析は1,8-シネオール11.4%・β-オプロペノン10.3%・カダレン5.1%と型が違う。"
      }
    },
    {
      "name": "ハリエニシダ",
      "reading": "はりえにしだ",
      "latin": "Ulex europaeus",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "黄色い花、ココナッツ、甘い草、軽い蜂蜜",
      "role": "明るい花と南国的な甘さを軽く加える。",
      "components": [
        "2-フェニルエタノール",
        "リナロール",
        "クマリン",
        "フラネオール",
        "フィトール",
        "1-オクテン-3-オール",
        "ヘキサヒドロファルネシルアセトン",
        "ネロリドール"
      ],
      "literature": {
        "oil": {
          "percent": 0.06,
          "basis": "A（精油相当）。スペイン北西部のハリエニシダとエニシダの生の花つきの枝・花を、リケンス・ニッカーソン装置で4時間の連続水蒸気蒸留抽出（ペンタン）した揮発性抽出物の平均収率（生重量あたり、両種・両部位の平均）",
          "source": 0
        },
        "composition": [
          {
            "name": "フィトール",
            "percent": 0.92,
            "source": null
          },
          {
            "name": "1-オクテン-3-オール",
            "percent": 0.91,
            "source": null
          },
          {
            "name": "ヘキサヒドロファルネシルアセトン",
            "percent": 0.74,
            "source": null
          },
          {
            "name": "ネロリドール",
            "percent": 0.7,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Pardo-Muras M. et al. (2018) PLoS ONE 13(10):e0205997",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6205617/"
          }
        ],
        "note": "ハリエニシダの花の精油量・香気成分の定量は見つからず、両種・枝と花をまとめた抽出物の平均収率を使った。花の抽出物（Table 1 の Flowers の列）はトリコサン30%などのアルカンとパルミチン酸・ミリスチン酸が大半で、香りの成分は上の4つ（計3.3%、すべて1%未満）だけ。表の成分（2-フェニルエタノール・リナロール・クマリン・フラネオール）は検出されていない（リナロールはエニシダの花つきの枝で3.08%）。ココナッツ様の香りのもとになる成分を定量した資料は見つからなかった（López-Hortas et al. 2016 C R Chim 19:718 は花の抽出液の官能評価のみ）。"
      }
    },
    {
      "name": "ベチバー",
      "reading": "べちばー",
      "latin": "Chrysopogon zizanioides",
      "group": "根・土台",
      "part": "根",
      "aroma": "土、根、乾いた木、スモーキーな深み",
      "role": "ベースに土っぽい重心と持続する木質感を作る。",
      "components": [
        "セドロール",
        "β-カリオフィレン",
        "α-フムレン",
        "フルフラール",
        "イソバレンセノール",
        "α-ベチボール",
        "クシモール",
        "ベチセリネノール",
        "α-ベチボン",
        "β-ベチボン"
      ],
      "literature": {
        "oil": {
          "percent": 0.54,
          "min": 0.3,
          "max": 0.88,
          "basis": "畑で育てた根を風乾（ケニア・セネガル・レユニオン産）し、クレベンジャー装置で水蒸留3時間、精油を溶媒で回収して秤量した乾燥重量あたりの値。最大値はトルコ産の乾燥根を24時間水蒸留した値",
          "source": 0
        },
        "composition": [
          {
            "name": "イソバレンセノール",
            "percent": 12.05,
            "source": null
          },
          {
            "name": "α-ベチボール",
            "percent": 11.13,
            "source": null
          },
          {
            "name": "クシモール",
            "percent": 10.52,
            "source": null
          },
          {
            "name": "ベチセリネノール",
            "percent": 4.01,
            "source": null
          },
          {
            "name": "α-ベチボン",
            "percent": 3.35,
            "source": null
          },
          {
            "name": "β-ベチボン",
            "percent": 3.13,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Gavira C. et al. (2022) Molecules 27(6):1942（3産地 0.70・0.63・0.30% DW の平均を計算。最大値は Efe D. et al. 2021 Turk J Chem 45(5):1543-1550 の 0.88% v/w）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8954624/"
          }
        ],
        "note": "精油の量は乾燥根を3時間水蒸留した値で、24時間蒸留したトルコ産は0.88%（v/w）。成分の割合はカタール産の根を水蒸気蒸留した精油（Karousa M.M. et al. 2026, Plants 15(5):784, Table 1、GC-MSの面積%）で、イソバレンセノール・クシモール・ベチボン類が主体の典型的な組成（ハイチ産の市販精油もイソバレンセノール14.6%・クシモール11.6%・α-ベチボン6.3%、Barcellos-Silva 2025 総説の表2）。表の成分（セドロール・β-カリオフィレン・α-フムレン・フルフラール）はこの表にも、ブラジル産（Oliveira 2022）・トルコ産（Efe 2021）の表にも出てこないため null。"
      }
    },
    {
      "name": "イチジク",
      "reading": "いちじく",
      "latin": "Ficus carica",
      "group": "果実・ベリー",
      "part": "果実・葉",
      "aroma": "いちじく、青い葉、乳白感、柔らかな甘さ",
      "role": "青い葉と熟した果実の丸みを同時に加える。",
      "components": [
        "フィトール",
        "ヘキサナール",
        "フラネオール",
        "リナロール"
      ]
    },
    {
      "name": "オレガノ",
      "reading": "おれがの",
      "latin": "Origanum vulgare",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "オレガノ、ドライハーブ、温かい薬草、軽い辛味",
      "role": "地中海系のハーブ感と温かい輪郭を加える。",
      "components": [
        "カルバクロール",
        "チモール",
        "p-シメン",
        "γ-テルピネン",
        "β-ミルセン",
        "α-テルピネン",
        "β-カリオフィレン"
      ],
      "literature": {
        "oil": {
          "percent": 5.49,
          "min": 2.75,
          "max": 5.49,
          "basis": "ギリシャ・エピロスで栽培したギリシャオレガノ（subsp. hirtum）の乾燥した葉と花を水蒸留2時間。最小はポーランド栽培のギリシャオレガノ乾燥全草（3時期で2.75〜3.36 g/100 g）",
          "source": 0
        },
        "composition": [
          {
            "name": "カルバクロール",
            "percent": 67.95,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 10.59,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 8.9,
            "source": 0
          },
          {
            "name": "チモール",
            "percent": 3.69,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.03,
            "source": 0
          },
          {
            "name": "α-テルピネン",
            "percent": 1.84,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 1.01,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Sidiropoulou E. et al. (2022) Life 12(11):1783, Table 1／Węglarz Z., Kosakowska O. et al. (2020) Foods 9(11):1671, Table 5（ギリシャオレガノ3時期）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9693314/"
          }
        ],
        "note": "市販の乾燥オレガノで標準のカルバクロール型ギリシャオレガノ（O. vulgare subsp. hirtum）。ギリシャ産の値はカルバクロールが多く（68%）、同じ亜種でも中欧で栽培するとカルバクロール約30%・γ-テルピネン20〜28%と変わる。ふつうのオレガノ（subsp. vulgare）はサビネン・カリオフィレンオキシド型で精油も0.3〜0.5%と少ない（Węglarz et al. の同じ表）。"
      }
    },
    {
      "name": "ボグマートル",
      "reading": "ぼぐまーとる",
      "latin": "Myrica gale",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "湿地のハーブ、樹脂、苦味、青いスパイス",
      "role": "スコットランド系の湿地植物らしい苦味と樹脂感を出す。",
      "components": [
        "α-ピネン",
        "β-ミルセン",
        "リモネン",
        "β-カリオフィレン",
        "ネロリドール",
        "δ-カジネン",
        "1,8-シネオール",
        "ゲルマクロン",
        "γ-カジネン",
        "τ-ムウロロール"
      ],
      "literature": {
        "oil": {
          "percent": 0.24,
          "min": 0.09,
          "max": 0.5,
          "basis": "リトアニアの3つの湿地の雌株25株（8月採取）の乾燥葉を水蒸留2時間（欧州薬局方の方法）。代表値は3生育地の平均を株数で重みづけ、範囲は個体の最小〜最大",
          "source": 0
        },
        "composition": [
          {
            "name": "ネロリドール",
            "percent": 10.92,
            "source": 0
          },
          {
            "name": "δ-カジネン",
            "percent": 9.52,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 8.83,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 7.67,
            "source": 0
          },
          {
            "name": "ゲルマクロン",
            "percent": 6.12,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 6,
            "source": 0
          },
          {
            "name": "γ-カジネン",
            "percent": 3.36,
            "source": 0
          },
          {
            "name": "τ-ムウロロール",
            "percent": 3.07,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 2.98,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.01,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Ložienė K. et al. (2023) Plants 12(5):1050, Table 1（3生育地の平均を株数10・10・5で重みづけして計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10005319/"
          }
        ],
        "note": "リトアニアの3生育地・25株の乾燥葉。成分は3生育地の平均を株数で重みづけした値（表の平均値は検出された個体だけの平均とみられ、ミルセンなどは個体差が大きい）。個体差・生育地差が大きくケモタイプがあるとされる。ジンでよく使われる英国などの葉は型が違う可能性があり、スコットランド・フィンランド・オランダ産はα-ピネンと1,8-シネオールが主（Nakata et al. 2013 の考察）、スコットランド産の葉はα-ピネンが最大32.2%（この論文の考察）。葉の精油量は文献でスコットランド・フィンランド0.11〜0.13%、ポーランド0.13〜0.16%、フランス0.38%（この論文の考察）。果実は精油4.03%（1.57〜9.11%）で葉の約19倍。τ-ムウロロールは論文表記の T-ムウロロール＋α-ムウロロールの合計。"
      }
    },
    {
      "name": "クローバー",
      "reading": "くろーばー",
      "latin": "Trifolium spp.",
      "group": "花・フローラル",
      "part": "花・葉",
      "aroma": "草花、干し草、蜂蜜、青い葉",
      "role": "野原の草花感と柔らかな甘みを足す。",
      "components": [
        "クマリン",
        "フィトール",
        "ヘキサナール",
        "リナロール",
        "マルトール",
        "1-フェニルエタノール",
        "フェノール",
        "酢酸2-フェニルエチル",
        "アセトフェノン",
        "酢酸cis-3-ヘキセニル"
      ],
      "literature": {
        "oil": {
          "percent": 0.018,
          "min": 0.006,
          "max": 0.021,
          "basis": "A（精油）。イタリア北東部の高地牧草地のアカツメクサ（赤クローバー）の生の地上部（花と葉）を水蒸気蒸留（生重量あたり）。最大は同じ研究のシロツメクサ 0.021%、最小は南西アルプスの亜種 nivale の生の地上部 0.006〜0.011%（生育の3段階）",
          "source": 0
        },
        "composition": [
          {
            "name": "マルトール",
            "percent": 8.2,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 4.2,
            "source": 1
          },
          {
            "name": "1-フェニルエタノール",
            "percent": 3.2,
            "source": 1
          },
          {
            "name": "フェノール",
            "percent": 2.9,
            "source": 1
          },
          {
            "name": "酢酸2-フェニルエチル",
            "percent": 2.7,
            "source": 1
          },
          {
            "name": "アセトフェノン",
            "percent": 2.4,
            "source": 1
          },
          {
            "name": "酢酸cis-3-ヘキセニル",
            "percent": 2.2,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Tava A. et al. (2009) Nat Prod Commun 4(6):835-838（要旨。最小は Cecotti R. et al. (2013) Nat Prod Commun 8(11):1625-1628 の要旨）",
            "url": "https://pubmed.ncbi.nlm.nih.gov/19634332/"
          },
          {
            "title": "Buchbauer G., Jirovetz L., Nikiforov A. (1996) J Agric Food Chem 44(7):1825-1828（要旨）。オーストリアの赤クローバーの花の精油 4.2%、最小は白クローバーの花の精油 3.8%",
            "url": "https://doi.org/10.1021/jf9506850"
          }
        ],
        "note": "量は生の地上部（花と葉）の水蒸気蒸留の値で、乾燥した花の精油量は見つからなかった（乾燥すると重さあたりは数倍になりうる）。成分はオーストリアの赤クローバーの花の精油（要旨にある2%以上の成分だけ、other_major も同じ要旨の赤クローバーの値）で、クマリン・フィトール・ヘキサナールは要旨になく、本文（ACS）と Tava 2009 の成分表（SAGE）は開けなかったため null。赤クローバーのクマリン類は0.03%未満とする総説（Książkiewicz et al. 2025 Molecules 30:677）があるが、精油中の割合ではない。"
      }
    },
    {
      "name": "タンポポの花",
      "reading": "たんぽぽのはな",
      "latin": "Taraxacum officinale",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "黄色い花、軽い蜜、草、柔らかな苦味",
      "role": "ダンデライオンルートより明るい花の印象を足す。",
      "components": [
        "リナロール",
        "フラボノイド類",
        "ヘキサナール",
        "フィトール",
        "カルボン",
        "ベンズアルデヒド",
        "ディルエーテル",
        "リモネン",
        "3,5-オクタジエン-2-オン",
        "オクタナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.08,
          "basis": "A（精油）。タンポポの生花を水蒸留（Bylka et al. 2010 の値を Kamal et al. 2022 が引用）",
          "source": 0
        },
        "composition": [
          {
            "name": "カルボン",
            "percent": 16.46,
            "source": 1
          },
          {
            "name": "ベンズアルデヒド",
            "percent": 8.44,
            "source": 1
          },
          {
            "name": "ディルエーテル",
            "percent": 5.83,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 3.78,
            "source": 1
          },
          {
            "name": "3,5-オクタジエン-2-オン",
            "percent": 3.78,
            "source": 1
          },
          {
            "name": "オクタナール",
            "percent": 3.68,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.35,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Kamal F.Z. et al. (2022) Molecules 27(19):6477（本文で Bylka W. et al. (2010) Acta Physiol Plant 32:231-234 の値を引用。原典は開けず）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9572089/"
          },
          {
            "title": "Sutkaitienė J. et al. (2025) Plants 15(1):99, Table 3（リトアニアの市販の乾燥花のHS-SPME、GCの面積%）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12787708/"
          }
        ],
        "note": "精油量は生花の水蒸留の値（原典は開けず、その精油はキシレン類・ヘンエイコサン・トリコサンが主とされる）で、同じ論文のモロッコの陰干しした植物（部位の記載なし）の水蒸留は0.071%。成分はリトアニアの市販の乾燥花のHS-SPME（面積%、other_major も同じ表の Flowers の列、オクタン酸などの酸は除いた）で、カルボン16.5%・ディルエーテル5.8%・エストラゴール2.2%などタンポポの他の報告にない成分が多く、他のハーブの混入の可能性がある。ヘキサナール・フィトールは検出されず、フラボノイド類は揮発しない。"
      }
    },
    {
      "name": "サンザシ",
      "reading": "さんざし",
      "latin": "Crataegus spp.",
      "group": "果実・ベリー",
      "part": "果実・花",
      "aroma": "赤い果実、酸、花、軽い渋み",
      "role": "果実の酸と花の柔らかさをあわせて加える。",
      "components": [
        "ベンズアルデヒド",
        "フラボノイド類",
        "タンニン",
        "リンゴ酸"
      ]
    },
    {
      "name": "スイートウッドラフ",
      "reading": "すいーとうっどらふ",
      "latin": "Galium odoratum",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "干し草、バニラ、甘い草、軽い花",
      "role": "クマリン由来の甘い干し草感を作る。",
      "components": [
        "クマリン",
        "フィトール",
        "ヘキサナール",
        "リナロール",
        "ゲルマクレンD",
        "ボルネオール"
      ],
      "literature": {
        "oil": {
          "percent": 0.0424,
          "min": 0.035,
          "max": 0.069,
          "basis": "ラトビアの野生・栽培4系統の乾燥地上部（50℃乾燥、2019〜2021年5〜6月採取）を水蒸留3時間。代表値は18試料の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "クマリン",
            "percent": 51.13,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 9.45,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 7.54,
            "source": 0
          },
          {
            "name": "ボルネオール",
            "percent": 7.46,
            "source": 0
          },
          {
            "name": "フィトール",
            "percent": 7.08,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Razzivina V. et al. (2024) Antioxidants 13(12):1447, Table 2（18試料の平均 0.42 mL/kg を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11672921/"
          }
        ],
        "note": "ラトビアの4系統（野生・日なた栽培・日陰栽培）の乾燥地上部。組成は範囲しか示されていないため、範囲の中間値を代表値にした（nd は0として計算）。クマリンが24.8〜77.5%と主で、GAL01・GAL05は70%超、GAL03は少ない。同じ研究の70%エタノール抽出物（Table S3）ではクマリンは乾燥重量あたり1339〜10359 µg/g（2019年の野生4系統の平均6493 µg/g、約0.65%）あり、水蒸留で精油として出てくる量（精油0.04%×約半分＝約0.02%）の約30倍。トルコ産（Başer et al. 2004, J Essent Oil Res 16:305）は精油0.05%でチモール・イソチモールが主、クマリンを含まない（Herre et al. 2026, Molecules 31:2920 の総説とこの論文の考察による）。テトラコサン（2.6〜18.2%）などのアルカンは除いた。ヘキサナールは報告なし。"
      }
    },
    {
      "name": "辺塚橙",
      "reading": "へつかだいだい",
      "latin": "Citrus spp.",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "和柑橘、青い果皮、爽やかな酸、軽い苦味",
      "role": "柚子や橙とは違う、青い和柑橘の輪郭を足す。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "デカナール",
        "リナロール",
        "β-ミルセン",
        "α-ピネン",
        "β-ピネン",
        "β-オシメン",
        "テルピノレン",
        "α-ツジェン"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 69.31,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 15.71,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.49,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 1.92,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 1.49,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 1.33,
            "source": 0
          },
          {
            "name": "β-オシメン",
            "percent": 0.96,
            "source": 0
          },
          {
            "name": "テルピノレン",
            "percent": 0.86,
            "source": 0
          },
          {
            "name": "α-ツジェン",
            "percent": 0.62,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Hamada, Harano, Niihara et al. (2020) J Oleo Sci 69(6):643-648, Table 1（鹿児島県肝付町岸良産の辺塚だいだいの生果皮の水蒸気蒸留油、10月の値。範囲は9〜12月の4回）",
            "url": "https://www.jstage.jst.go.jp/article/jos/69/6/69_ess19296/_article/-char/ja/"
          }
        ],
        "note": "組成は鹿児島大学の分析（2018年9〜12月、毎月の未熟〜成熟果）で、月ごとの差は小さい。アルデヒドはほとんど含まれず、デカナールは4か月とも検出されなかった（同じ分析のかぼすは0.76%）ためnull。同じ大学の別分析（山本ら 2024 熱帯農業研究、フラベドのエタノール抽出液をTwisterで捕集）でもリモネン81.2%、γ-テルピネン9.8%、βミルセン2.6%のリモネン・γ-テルピネン型。精油量（収率）の報告は見つからずnull。"
      }
    },
    {
      "name": "マリーゴールド",
      "reading": "まりーごーるど",
      "latin": "Tagetes spp. / Calendula officinalis",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "黄色い花、草、軽い柑橘、ドライな花弁",
      "role": "明るい花弁の色味と乾いた草花感を加える。",
      "components": [
        "リナロール",
        "β-カリオフィレン",
        "フラボノイド類",
        "ヘキサナール",
        "δ-カジネン",
        "α-カジノール",
        "τ-ムウロロール",
        "γ-カジネン",
        "α-ムウロレン",
        "イオノン類"
      ],
      "literature": {
        "oil": {
          "percent": 0.25,
          "min": 0.2,
          "max": 0.3,
          "basis": "欧州薬局方のカレンデュラ花（八重咲きの栽培品種の、花托から外した乾燥花）の成分の要約。EMA評価報告書の記載",
          "source": 0
        },
        "composition": [
          {
            "name": "δ-カジネン",
            "percent": 22.5,
            "source": null
          },
          {
            "name": "α-カジノール",
            "percent": 20.4,
            "source": null
          },
          {
            "name": "τ-ムウロロール",
            "percent": 12.9,
            "source": null
          },
          {
            "name": "γ-カジネン",
            "percent": 8.9,
            "source": null
          },
          {
            "name": "α-ムウロレン",
            "percent": 5.6,
            "source": null
          },
          {
            "name": "イオノン類",
            "percent": 4.7,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "EMA/HMPC/603409/2017 Assessment report on Calendula officinalis L., flos, Rev. 1（2018年3月27日）",
            "url": "https://www.ema.europa.eu/en/documents/herbal-report/final-assessment-report-calendula-officinalis-l-flos-revision-1_en.pdf"
          }
        ],
        "note": "表の学名が「Tagetes spp. / Calendula officinalis」なので、表の香り（ドライな花弁、草）と代表成分、食品・ハーブとして流通する乾燥花（EMAのCalendulae flos）に合うカレンデュラを選んだ（タゲテスは精油の性格がまったく違う）。成分はブラジル・パラナ州の陰干しした花を水蒸留した1分析（Gazim et al. 2008 Rev Bras Cienc Farm 44(3):391-395, Table I を画像から読み取り。収率0.1% w/w・乾燥重量あたり）で、リナロール・β-カリオフィレン・ヘキサナールは検出されず（α-フムレン1.8%・カリオフィレンオキシド0.5%）。エストニアの8品種の花は0.10〜0.43%・α-カジノール18.4〜32.0%（Raal et al. 2016 の要旨）。フラボノイド類は揮発しない。"
      }
    },
    {
      "name": "ピスタチオ",
      "reading": "ぴすたちお",
      "latin": "Pistacia vera",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "ピスタチオ、ナッツ、油脂、軽い青さ",
      "role": "ナッツの甘さに青いニュアンスを少し加える。",
      "components": [
        "ピラジン類",
        "フルフラール",
        "マルトール",
        "リモネン",
        "α-ピネン",
        "β-ミルセン",
        "1-ヘキサノール",
        "1-メチルピロール",
        "trans-2-ノネン-1-オール",
        "1-ノナノール"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 36.9,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 12.19,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 8.39,
            "source": 0
          },
          {
            "name": "1-ヘキサノール",
            "percent": 4.39,
            "source": 0
          },
          {
            "name": "1-メチルピロール",
            "percent": 3.52,
            "source": 0
          },
          {
            "name": "trans-2-ノネン-1-オール",
            "percent": 1.7,
            "source": 0
          },
          {
            "name": "1-ノナノール",
            "percent": 1.54,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Noguera-Artiaga L. et al. (2020) Foods 9(2):158, Table 1（スペイン産の生のピスタチオ Kerman。代表値は十分に灌水した対照区 T0、幅は灌水3区×台木3種の9通り）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7074072/"
          }
        ],
        "note": "焙煎したピスタチオ（Pistacia vera）の成分表は全文を開ける資料がなく、スペイン産の生のピスタチオのSPME面積%で代用した（アルカン類 約20%を含む表）。イラン式の焙煎品（135 °C）でもアルデヒド・テルペン・アルコールが主でピラジンは2種・フランは1種だけとされ（Hojjati et al. 2013 の要旨）、量は生の種子でピネン約200 mg/kg（乾燥重量、Noguera-Artiaga et al. 2019 の要旨）、α-ピネン105〜2464 mg/kg（Polari et al. 2019 の要旨）という値があるが、揮発成分の合計がないため oil は null とした。1981年のイラク産「ピスタチオ」（現地名 habbat khadra）の焙煎品の分析は Pistacia vera ではない可能性が高いので使わなかった。"
      }
    },
    {
      "name": "キウイ",
      "reading": "きうい",
      "latin": "Actinidia deliciosa",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "キウイ、青い果実、酸、軽いトロピカル感",
      "role": "青い果実感とシャープな酸を加える。",
      "components": [
        "酢酸エチル",
        "ヘキサナール",
        "リンゴ酸",
        "アスコルビン酸"
      ]
    },
    {
      "name": "ハニーサックル",
      "reading": "はにーさっくる",
      "latin": "Lonicera japonica",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "甘い白い花、蜜、柔らかなグリーン、清潔感",
      "role": "蜂蜜を思わせる白い花の甘さを足す。",
      "components": [
        "リナロール",
        "ゲラニオール",
        "2-フェニルエタノール",
        "ネロリドール",
        "カリオフィレンオキシド",
        "オイゲノール",
        "ファルネソール",
        "1,8-シネオール",
        "イオノン類",
        "エピグロブロール",
        "スパツレノール"
      ],
      "literature": {
        "oil": {
          "percent": 1.34,
          "basis": "乾燥したスイカズラの蕾（生薬の金銀花、中国・鄭州の業者）10 kgを粉砕し、1 kgずつ水2.5 Lで120℃・6時間水蒸留して油133.6 g",
          "source": 0
        },
        "composition": [
          {
            "name": "カリオフィレンオキシド",
            "percent": 16.23,
            "source": 0
          },
          {
            "name": "オイゲノール",
            "percent": 9.48,
            "source": 0
          },
          {
            "name": "ファルネソール",
            "percent": 6.87,
            "source": 0
          },
          {
            "name": "2-フェニルエタノール",
            "percent": 6.37,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 5.42,
            "source": 0
          },
          {
            "name": "イオノン類",
            "percent": 4.79,
            "source": 0
          },
          {
            "name": "エピグロブロール",
            "percent": 4.74,
            "source": 0
          },
          {
            "name": "スパツレノール",
            "percent": 4.41,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 1.97,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 1.73,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Qu M., Liu Y., Wang D. (2024) J Oleo Sci 73(8):1113-1124, 3.1節",
            "url": "https://www.jstage.jst.go.jp/article/jos/73/8/73_ess23242/_article"
          }
        ],
        "note": "ジンでは乾燥品を使うとして乾燥した蕾（金銀花）の値にした。工業規模の水蒸留（120℃・6時間）の1例で、油には脂肪酸（ペンタデカン酸5.76%など計8%余り）も入っており、収率は高めの可能性がある。甘い白い花の香りは生花のもので、総説では生花の精油はリナロール14%超、乾燥花では0.4%未満に減るとされ（Shang et al. 2011 J Ethnopharmacol 138:1-21）、乾燥した金銀花の SAFE 抽出物でもリナロールは見つかっていない（Su et al. 2020 PLoS One 15:e0237881）。ネロリドールはこの分析になく、別の花の精油の要旨では(Z,Z)-ファルネソール16.2%・リナロール11.0%（Vukovic et al. 2012）。生花を使うなら値は大きく変わる。"
      }
    },
    {
      "name": "ヴァインフラワー",
      "reading": "ゔぁいんふらわー",
      "latin": "Vitis vinifera",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "ぶどうの花、白い花、軽い果実、爽やかさ",
      "role": "ぶどう由来の繊細な花と果実の気配を加える。",
      "components": [
        "リナロール",
        "ゲラニオール",
        "ネロール",
        "2-フェニルエタノール"
      ]
    },
    {
      "name": "陳皮",
      "reading": "ちんぴ",
      "latin": "Citrus reticulata",
      "group": "シトラス",
      "part": "乾燥果皮",
      "aroma": "乾いたみかん皮、漢方、甘い柑橘、ほろ苦さ",
      "role": "フレッシュな柑橘より落ち着いた乾燥果皮感を出す。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "デカナール",
        "ヌートカトン",
        "β-ミルセン",
        "α-ピネン",
        "N-メチルアントラニル酸メチル",
        "β-ピネン",
        "m-シメン",
        "テルピノレン"
      ],
      "literature": {
        "oil": {
          "percent": 3.43,
          "min": 2.92,
          "max": 6.03,
          "basis": "広東省江門市新会産の茶枝柑（'Chachi'）の果皮（2019年12月採取）を天日で乾燥（水分13%未満）。約30 gを水300 mLに12時間浸し、5時間水蒸気蒸留（中国薬局方の方法）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 70.58,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 17.38,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.39,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 2.08,
            "source": 0
          },
          {
            "name": "N-メチルアントラニル酸メチル",
            "percent": 1.59,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 1.56,
            "source": 0
          },
          {
            "name": "m-シメン",
            "percent": 1.44,
            "source": 0
          },
          {
            "name": "テルピノレン",
            "percent": 0.99,
            "source": 0
          },
          {
            "name": "デカナール",
            "percent": 0.05,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Peng, Deng, Xu et al. (2025) Food Sci Nutr 13:e70393, Table 5（0か月の値。min/max は同じロットを8条件で2〜12か月保存したときの範囲）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12144604/"
          }
        ],
        "note": "広陳皮（新会産の茶枝柑、長期熟成前の乾燥果皮）の値で、組成は同じ論文の0か月の値。中国各地の陳皮25試料（Luo et al. 2018）では精油量が乾物あたり0.315〜89.91 g/kg（0.03〜9.0%）と非常に幅があり、2005年産の新会陳皮は1.80〜17.98 g/kg と低めだった（熟成・品種・産地で大きく変わる）。ヌートカトンはマンダリンの果皮にはほとんどなく、この分析でも検出されていない。m-シメンは論文の同定（3-isopropylmethylbenzene, CAS 535-77-3）のままで、p-シメンの可能性もある。"
      }
    },
    {
      "name": "フランキンセンス",
      "reading": "ふらんきんせんす",
      "latin": "Boswellia spp.",
      "group": "骨格・樹脂",
      "part": "樹脂",
      "aroma": "乳香、樹脂、レモン様、神聖な煙",
      "role": "樹脂の透明感と静かな香煙の余韻を作る。",
      "components": [
        "α-ピネン",
        "リモネン",
        "β-カリオフィレン",
        "p-シメン",
        "α-ツジェン",
        "サビネン",
        "β-ミルセン",
        "β-ピネン",
        "α-フェランドレン",
        "酢酸オクチル"
      ],
      "literature": {
        "oil": {
          "percent": 5.5,
          "basis": "オマーン産の植物学的に確認された B. sacra の乳香（樹脂）を細かく粉砕し、500 gを精油が出なくなるまで水蒸留（クレベンジャー）",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 32.55,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 10.1,
            "source": 1
          },
          {
            "name": "α-ツジェン",
            "percent": 9.15,
            "source": 1
          },
          {
            "name": "p-シメン",
            "percent": 5.55,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 3.35,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 3.3,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 2.25,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 1.85,
            "source": 1
          },
          {
            "name": "α-フェランドレン",
            "percent": 1.5,
            "source": 1
          },
          {
            "name": "酢酸オクチル",
            "percent": 0.95,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Al-Harrasi A. & Al-Saidi S. (2008) Molecules 13(9):2181-2189, Results",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6245470/"
          },
          {
            "title": "Ojha P.K. et al. (2022) Plants 11(16):2134, Table 1（ソマリランド産 B. carteri 樹脂を研究室で蒸留した F22・F23 の平均を計算。quote の最後の2列が F22・F23）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9415502/"
          }
        ],
        "note": "ジンでよく使う乳香はオマーン・ソマリア産の Boswellia sacra／B. carteri（同一種とされることも多い）なので、量は B. sacra（オマーン産）の水蒸留収率、成分はソマリランド産 B. carteri を研究室で蒸留した2点の平均（論文の表は選択成分のみ、全成分は補足表）。量の出典の2008年の B. sacra 精油はリモネン33.5%・(E)-β-オシメン32.3%・α-ピネン5.3%と異例で、同じグループの市販4等級ではα-ピネンが全試料の主成分（Al-Saidi ら 2012 Chem Biodivers 9:615 の要旨）。市販品には B. serrata（α-ツジェン39〜53%）や合成リモネン・酢酸オクチルの混入が多い（Ojha ら 2022）。"
      }
    },
    {
      "name": "マカダミアナッツ",
      "reading": "まかだみあなっつ",
      "latin": "Macadamia integrifolia",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "マカダミア、甘い油脂、ロースト、柔らかなナッツ",
      "role": "丸い油脂感と穏やかなナッツ香を加える。",
      "components": [
        "ピラジン類",
        "フルフラール",
        "マルトール",
        "バニリン"
      ]
    },
    {
      "name": "ポメロ",
      "reading": "ぽめろ",
      "latin": "Citrus maxima",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "文旦、グレープフルーツ、厚い果皮、爽やかな苦味",
      "role": "厚みのあるシトラスピールと穏やかな苦味を加える。",
      "components": [
        "リモネン",
        "ヌートカトン",
        "デカナール",
        "リナロール",
        "β-ミルセン",
        "β-ピネン",
        "α-ピネン",
        "ゲルマクレンD",
        "β-フェランドレン",
        "サビネン"
      ],
      "literature": {
        "oil": {
          "percent": 1.03,
          "min": 0.96,
          "max": 1.09,
          "basis": "バングラデシュ産の白肉・赤肉ポメロの生果皮（アルベド込み、果実の約20%）を粉砕して水蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 92.9,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 1.7,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 0.8,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 0.5,
            "source": 1
          },
          {
            "name": "ヌートカトン",
            "percent": 0.3,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.2,
            "source": 1
          },
          {
            "name": "ゲルマクレンD",
            "percent": 0.2,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 0.2,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 0.2,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Chandra Das et al. (2022) Heliyon 8(12):e11843（白肉1.09%と赤肉0.96%の平均を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9720520/"
          },
          {
            "title": "Luro et al. (2025) Plants 14(12):1824, 補足資料 Sup File 6 PEO composition（ポメロ17品種の中央値を計算。おろし皮から遠心分離した油）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12196667/"
          }
        ],
        "note": "組成はフランス・コルシカ島の保存園で育てた、DNAで確認したポメロ17品種（Chandler、Kao Pan など）の中央値（おろした果皮から遠心分離した油、加熱なし）。品種差が大きく、Timor と Pubescent はミルセン22.6〜25.3%、Pubescent・Reinking・Tahiti はγ-テルピネン7.5〜8.4%。デカナールはポメロでは検出されなかった（同じ論文のグレープフルーツでは約0.25%）。収率はバングラデシュ産の生果皮（アルベド込み）の水蒸留値で、組成とは別の分析。日本の文旦（土佐文旦など）の値ではない。"
      }
    },
    {
      "name": "ホロピト",
      "reading": "ほろぴと",
      "latin": "Pseudowintera colorata",
      "group": "シード・スパイス",
      "part": "葉",
      "aroma": "ペッパー、樹皮、乾いた葉、じんわりした辛味",
      "role": "ニュージーランド系の野性味あるスパイス感を足す。",
      "components": [
        "β-カリオフィレン",
        "α-ピネン",
        "リナロール",
        "ピペリン",
        "リモネン",
        "p-シメン",
        "カラメネン",
        "α-クベベン",
        "α-コパエン",
        "サビネン",
        "β-ピネン",
        "テルピネン-4-オール"
      ],
      "literature": {
        "oil": {
          "percent": 0.417,
          "basis": "生の葉と枝先（秋採取）を110 kgずつ水蒸気蒸留（Corbett & Grant 1958 の値をRead 1995が引用）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 6.9,
            "source": 1
          },
          {
            "name": "p-シメン",
            "percent": 5.98,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 4.85,
            "source": 1
          },
          {
            "name": "カラメネン",
            "percent": 4.84,
            "source": 1
          },
          {
            "name": "α-クベベン",
            "percent": 4.39,
            "source": 1
          },
          {
            "name": "α-コパエン",
            "percent": 4.29,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 4.07,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 4.06,
            "source": 1
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 3.84,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 3.48,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Read C. (1995) Aspects of leaf and extract production from Tasmannia lanceolata. PhD thesis, University of Tasmania, 2.3.1節 p.14（Corbett & Grant 1958 の引用）",
            "url": "https://figshare.utas.edu.au/articles/thesis/Aspects_of_leaf_and_extract_production_from_Tasmannia_lanceolata/23246216"
          },
          {
            "title": "Ham E.E. et al. (2026) J Food Sci 91(8):e71380, Table 2（生葉のSPME、全同定成分に対する%）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13498666/"
          }
        ],
        "note": "精油の収率は1958年の原著が開けずRead (1995) の引用値で、生の葉と枝先あたり（生葉の水分は64%：Ham et al. 2026）。組成は精油の分析が見つからず、生葉のSPME（ヘッドスペース）の上位21成分の相対%を使い、リナロールはこの表になかった（1.96%未満）。同論文では乾燥（35〜55℃、凍結乾燥）でリモネンなど主なテルペンが約4〜5割減り、p-シメンは検出されなくなった。"
      }
    },
    {
      "name": "キタコブシ",
      "reading": "きたこぶし",
      "latin": "Magnolia kobus var. borealis",
      "group": "花・フローラル",
      "part": "花・蕾",
      "aroma": "木蓮、白い花、スパイス、清涼感",
      "role": "白い花にスパイスと木質の輪郭を加える。",
      "components": [
        "リナロール",
        "1,8-シネオール",
        "α-ピネン",
        "ゲラニオール",
        "リモネン",
        "カンファー",
        "α-テルピネオール",
        "p-シメン",
        "β-ピネン",
        "テルピネン-4-オール"
      ],
      "literature": {
        "oil": {
          "percent": 0.2,
          "basis": "北海道札幌市の自生のキタコブシの枝葉（小枝と葉）を半乾燥して水蒸気蒸留。試料ICは半乾燥品1.9 kg（生3.0 kg）から油6.0 gで、半乾燥品あたり0.31%・生換算0.20%。論文のまとめは生植物あたり約0.2%",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 22,
            "source": 0
          },
          {
            "name": "カンファー",
            "percent": 18.35,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 17.05,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 9.35,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 6.95,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 5.15,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 4.55,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 1.55,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 1.25,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 0.45,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "藤田安二・菊池光子・藤田眞一 (1975) 薬学雑誌 95(2):241-242「各地産植物精油に関する研究（第37報）キタコブシの精油成分 その1」, 実験の部・結果（スキャン画像を読み取り）",
            "url": "https://www.jstage.jst.go.jp/article/yakushi1947/95/2/95_2_241/_article"
          }
        ],
        "note": "キタコブシ・コブシの花や蕾の精油の収率を報告した資料は見つからず、同じ変種（札幌産）の枝葉油の値で代用した。成分も枝葉の2試料（IA・IC）の平均で、試料間の差が大きい（リモネン39.3%と4.7%、1,8-シネオール不検出と34.1%）。蕾の精油（長沢ら1969 薬学雑誌 89(4):454-459、東北のキタコブシ2試料）はリモネンが主成分（定量なし）で、1,8-シネオール10%の型とカンファー29%の型があり、リナロール1.0〜1.3%、ピネンは痕跡、ゲラニオールは報告なし。数値はすべてスキャン画像のPDFから読み取った。"
      }
    },
    {
      "name": "グラスワート",
      "reading": "ぐらすわーと",
      "latin": "Salicornia europaea",
      "group": "海・ミネラル",
      "part": "茎・葉",
      "aroma": "塩生植物、海風、青い茎、ミネラル感",
      "role": "海辺の塩気と青い植物感を加える。",
      "components": [
        "ジメチルスルフィド",
        "グルタミン酸",
        "ヨード様成分",
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "1-ヘキサノール",
        "チグリン酸エチル"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "cis-3-ヘキセノール",
            "percent": 47.95,
            "source": 0
          },
          {
            "name": "1-ヘキサノール",
            "percent": 47.82,
            "source": 0
          },
          {
            "name": "チグリン酸エチル",
            "percent": 1.51,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 0.26,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Oliveira-Alves S.C. et al. (2021) Antioxidants 10(8):1312, Table A1（Area% Fresh の列）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8389250/"
          }
        ],
        "note": "Salicornia europaea の資料は見つからず、同属の S. ramosissima（ポルトガル・アヴェイロの塩性湿地で2019年7〜10月に採取）の生の茎葉をすりつぶしてHS-SPME（40℃・40分）で分析した面積%で代用した。香気成分の量を示した資料はなく oil は null。表の3-hexen-1-olは異性体の記載がないが、香りの記述（green, marine, seaweed）から cis-3-ヘキセノールとした。70℃で乾燥した試料ではヘキサナール34.16%、リモネン10.18%、2-メチル酪酸エチル7.84%、ヘプタナール5.14%と組成が大きく変わる（ジンで乾燥品を使うならこちら）。"
      }
    },
    {
      "name": "温州みかん",
      "reading": "うんしゅうみかん",
      "latin": "Citrus unshiu",
      "group": "シトラス",
      "part": "果皮・果実",
      "aroma": "みかん、甘い柑橘、柔らかな果皮、軽い酸",
      "role": "オレンジより丸い和柑橘の甘さを出す。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "デカナール",
        "リナロール",
        "β-ミルセン",
        "α-ピネン",
        "β-エレメン",
        "α-テルピネオール",
        "テルピノレン",
        "β-ピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.7,
          "basis": "熊本県産の温州みかん15個の生果皮497 gをペンタンで30分抽出し、SAFE（高真空蒸留、40℃）で香気成分を分けた油",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 90.59,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 4.57,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 1.21,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 0.61,
            "source": 1
          },
          {
            "name": "β-エレメン",
            "percent": 0.49,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.42,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 0.37,
            "source": 1
          },
          {
            "name": "テルピノレン",
            "percent": 0.26,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 0.25,
            "source": 1
          },
          {
            "name": "デカナール",
            "percent": 0.07,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Miyazawa, Fujita & Kubota (2010) Biosci Biotechnol Biochem 74(4):835-842, Table 1",
            "url": "https://www.jstage.jst.go.jp/article/bbb/74/4/74_90937/_article"
          },
          {
            "title": "Yang et al. (2023) Pharmaceutics 15(6):1595, Table 3（MW＝C. unshiu 'Miyagawa-wase'、済州島産の果皮の水蒸留油）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10301132/"
          }
        ],
        "note": "組成は済州島産「宮川早生」の果皮の水蒸留油（同論文の収率は乾物基準3.59 mL/100 g）。同じ論文の別の温州（SM）はリモネン89.32%、γ-テルピネン5.49%、デカナール0.01%、リナロール0.12%。愛媛県産宮川早生の凍結粉砕コールドプレス油（愛媛県産業技術研究所研究報告 No.51, 2013）はリモネン83.68%、γ-テルピネン8.97%、リナロール0.68%とγ-テルピネンが多め。収率は熊本県産の生果皮を溶媒抽出＋SAFEで得た油の量で、組成とは別の分析。"
      }
    },
    {
      "name": "シュガーケルプ",
      "reading": "しゅがーけるぷ",
      "latin": "Saccharina latissima",
      "group": "海・ミネラル",
      "part": "葉状体",
      "aroma": "昆布、潮、旨み、柔らかな甘さ",
      "role": "海藻由来の旨みとマリンな骨格を加える。",
      "components": [
        "ジメチルスルフィド",
        "ヨード様成分",
        "グルタミン酸",
        "フルフラール",
        "trans-2-ノネン-1-オール",
        "1-オクテン-3-オール",
        "trans-2-ノネナール",
        "trans-2-デセナール",
        "trans-2-オクテン-1-オール",
        "3-オクタノン"
      ],
      "literature": {
        "oil": {
          "percent": 0.002635,
          "min": 0.000848,
          "max": 0.002635,
          "label": "香気成分",
          "basis": "シュガーケルプの資料がなく、同属の昆布の値で代用。北海道産の天日乾燥した天然昆布（1999年産、約1年倉庫保管）。マコンブを水とともに減圧連続蒸留抽出（65℃・2時間）し、GC-MSで定量（内部標準シクロヘキサノール、感度補正なし）した53成分の合計。範囲はミツイシコンブ（8482.1 µg/kg）〜マコンブ（26352.0 µg/kg）",
          "source": 0
        },
        "composition": [
          {
            "name": "trans-2-ノネン-1-オール",
            "percent": 21.45,
            "source": 0
          },
          {
            "name": "1-オクテン-3-オール",
            "percent": 14.91,
            "source": 0
          },
          {
            "name": "trans-2-ノネナール",
            "percent": 12.5,
            "source": 0
          },
          {
            "name": "trans-2-デセナール",
            "percent": 3.56,
            "source": 0
          },
          {
            "name": "trans-2-オクテン-1-オール",
            "percent": 2.35,
            "source": 0
          },
          {
            "name": "3-オクタノン",
            "percent": 1.67,
            "source": 0
          },
          {
            "name": "ヨード様成分",
            "percent": 0.36,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "高橋英史・隅谷栄伸・稲田有美子・森大蔵 (2002) 日本食品科学工学会誌 49(4):228-237, Table 2（シュガーケルプの資料がなく、同属のマコンブ Saccharina japonica の値で代用。Total 行の µg/kg を％に換算）",
            "url": "https://www.jstage.jst.go.jp/article/nskkk1995/49/4/49_4_228/_article/-char/ja/"
          }
        ],
        "note": "シュガーケルプ（Saccharina latissima）の香気成分の量・組成は見つからず、同属の昆布（マコンブ Saccharina japonica の天日乾燥品）の値で代用した。S. latissima と Ascophyllum nodosum の水抽出液（50〜90℃）のHS-SPMEでも、アルデヒド類、β-イオノン、1-ヨードペンタン・1-ヨードヘプタン・1-ヨードオクタンなどが検出されている（Adams et al. 2025 Foods 14(15):2565、有無のみで、どちらの海藻かの内訳は表の色分けで示され確認できなかった）。フルフラールはどちらの資料にも出てこず、ジメチルスルフィドも昆布の分析で報告がなく、グルタミン酸は揮発しない。"
      }
    },
    {
      "name": "舞茸",
      "reading": "まいたけ",
      "latin": "Grifola frondosa",
      "group": "果実・野菜",
      "part": "子実体",
      "aroma": "きのこ、土、出汁、穏やかなロースト感",
      "role": "森の湿度と旨みのあるアーシーさを加える。",
      "components": [
        "グルタミン酸",
        "フルフラール",
        "ピラジン類",
        "ヘキサナール"
      ]
    },
    {
      "name": "落花生",
      "reading": "らっかせい",
      "latin": "Arachis hypogaea",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "ピーナッツ、ロースト、甘い油脂、豆の香ばしさ",
      "role": "ナッティで香ばしい余韻を作る。",
      "components": [
        "ピラジン類",
        "フルフラール",
        "マルトール",
        "ミリスチン酸",
        "フェニルアセトアルデヒド",
        "フラネオール",
        "4-ビニルグアイアコール"
      ],
      "literature": {
        "oil": {
          "percent": 0.002397,
          "label": "香気成分",
          "basis": "千葉県産の殻付き煎り落花生（千葉半立、2011年産、購入直後）の豆。ジエチルエーテル抽出・SAFE、標準添加法（内部標準2-オクタノール）で香りの強い17成分を定量（µg/kg）した合計",
          "source": 0
        },
        "composition": [
          {
            "name": "フェニルアセトアルデヒド",
            "percent": 68.43,
            "source": 0
          },
          {
            "name": "フラネオール",
            "percent": 15.27,
            "source": 0
          },
          {
            "name": "ピラジン類",
            "percent": 11.47,
            "source": 0
          },
          {
            "name": "4-ビニルグアイアコール",
            "percent": 4.34,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Kaneko S. et al. (2013) Biosci Biotechnol Biochem 77(7):1467-1473, Table 3（Fresh 列の17成分の合計 23966.9 µg/kg を計算）",
            "url": "https://www.jstage.jst.go.jp/article/bbb/77/7/77_130112/_pdf"
          }
        ],
        "note": "香りの強い17成分だけの合計で、量の多い2,5-ジメチルピラジン・メチルピラジン・ヘキサナールなどは定量対象外のため総量は下限に近い（PDFの文字データでは単位のµが落ちるが、ページ上の表の単位は µg/kg）。中国の30品種を160℃30分焙煎したHS-SPME（内部標準）の分析（Zhang et al. 2024 Food Sci Nutr 12:1888, Table 2）では揮発成分の合計が0.51〜2.96 mg/kgとさらに少なく、フルフラールが約1.5%、マルトール（3-ヒドロキシ-2-メチル-4-ピロン）が約0.5%あったが、定量法が違うので割合は補わずnullにした。ミリスチン酸は脂肪酸で香気成分として測られていないためnull。"
      }
    },
    {
      "name": "リンドウ",
      "reading": "りんどう",
      "latin": "Gentiana spp.",
      "group": "根・土台",
      "part": "根",
      "aroma": "薬草、根、乾いた苦味、土っぽさ",
      "role": "ビターズ的な苦味と薬草の芯を足す。",
      "components": [
        "タンニン",
        "フラボノイド類",
        "キナ酸",
        "安息香酸"
      ]
    },
    {
      "name": "ブラッドライム",
      "reading": "ぶらっどらいむ",
      "latin": "Citrus australasica hybrid",
      "group": "シトラス",
      "part": "果皮・果実",
      "aroma": "赤いライム、酸、柑橘ピール、軽いベリー感",
      "role": "ライムの鋭さに赤い果実の印象を重ねる。",
      "components": [
        "リモネン",
        "シトラール",
        "デカナール",
        "リナロール",
        "ビシクロゲルマクレン",
        "β-ビサボレン",
        "グロブロール",
        "シトロネラール",
        "ビリジフロロール",
        "β-オシメン"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 73.6,
            "source": 0
          },
          {
            "name": "ビシクロゲルマクレン",
            "percent": 6.9,
            "source": 0
          },
          {
            "name": "β-ビサボレン",
            "percent": 2,
            "source": 0
          },
          {
            "name": "グロブロール",
            "percent": 1.8,
            "source": 0
          },
          {
            "name": "シトロネラール",
            "percent": 1.7,
            "source": 0
          },
          {
            "name": "ビリジフロロール",
            "percent": 1.7,
            "source": 0
          },
          {
            "name": "β-オシメン",
            "percent": 1.2,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Cioni, Migone, Ascrizzi et al. (2022) Antioxidants 11(10):2047, Table 4（赤い果皮のフィンガーライム 'Red' の果皮の水蒸留油、面積%。ブラッドライムの代用）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9598366/"
          }
        ],
        "note": "ブラッドライム（フィンガーライムの交配種）そのものの分析は見つからず、赤い果皮のフィンガーライム'Red'（イタリアの鉢植え、2019年10月）の果皮の水蒸留油で代用した；交配相手の影響は反映されていない。赤系（var. sanguinea）の分析は報告ごとに型が大きく違い、ビシクロゲルマクレン25.9%型、リモネン65.7%・γ-テルピネン8.8%型、リモネン48.2%・サビネン37.2%型がある（Johnson et al. 2025の総説 Table 15）。'Red'ではシトラール・デカナール・リナロールは検出されなかった。精油量は試料が少なく測られておらず（Cioni et al. 2022）、ほかにも見つからずnull。"
      }
    },
    {
      "name": "デザートライム",
      "reading": "でざーとらいむ",
      "latin": "Citrus glauca",
      "group": "シトラス",
      "part": "果皮・果実",
      "aroma": "ドライなライム、青い柑橘、シャープな酸、乾いた果皮",
      "role": "乾いた印象のライム香と酸の輪郭を加える。",
      "components": [
        "リモネン",
        "シトラール",
        "γ-テルピネン",
        "ヘキサナール"
      ]
    },
    {
      "name": "アニスマートル",
      "reading": "あにすまーとる",
      "latin": "Syzygium anisatum",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "アニス、甘草、甘い葉、清涼感",
      "role": "スターアニスより柔らかい甘いハーブ感を出す。",
      "components": [
        "アネトール",
        "メチルオイゲノール",
        "リナロール",
        "1,8-シネオール",
        "エストラゴール"
      ],
      "literature": {
        "oil": {
          "percent": 1.65,
          "min": 1.3,
          "max": 2,
          "basis": "生葉の精油の収率1.3〜2.0%（Brophy & Boland 1991、総説の要約）。計算には中央値を使う",
          "source": 0
        },
        "composition": [
          {
            "name": "アネトール",
            "percent": 95,
            "source": 0
          },
          {
            "name": "エストラゴール",
            "percent": 4.43,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 0.02,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Bowden B.F., Brophy J.J., Jackes B.R. (2022) Plants 11(9):1231（総説）, 2.14節・Table 14",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9103502/"
          }
        ],
        "note": "市販で主のE-アネトール型（木の約8割）。メチルカビコール（エストラゴール）型の木もあり、その精油はエストラゴール約77%・E-アネトール約20%。メチルオイゲノール・リナロールは検出されず null。収率は生葉の値で、乾燥葉（市販のスパイスの形）では水分が抜けるぶん高くなる。"
      }
    },
    {
      "name": "クアンドン",
      "reading": "くあんどん",
      "latin": "Santalum acuminatum",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "赤い果実、酸、アプリコット、乾いた果皮",
      "role": "オーストラリア在来果実らしい酸と赤い果実感を加える。",
      "components": [
        "ヘキサナール",
        "酢酸ヘキシル",
        "フラネオール",
        "アスコルビン酸"
      ]
    },
    {
      "name": "ワトルシード",
      "reading": "わとるしーど",
      "latin": "Acacia spp.",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "焙煎、コーヒー、ナッツ、軽いチョコレート",
      "role": "ローストした穀物とナッツの厚みを加える。",
      "components": [
        "ピラジン類",
        "フルフラール",
        "マルトール",
        "バニリン"
      ]
    },
    {
      "name": "スイートレモン",
      "reading": "すいーとれもん",
      "latin": "Citrus limetta",
      "group": "シトラス",
      "part": "果皮・果実",
      "aroma": "甘いレモン、淡い酸、白い果皮、柔らかな柑橘",
      "role": "酸の角が丸いレモン香を加える。",
      "components": [
        "リモネン",
        "シトラール",
        "デカナール",
        "リナロール",
        "β-ミルセン",
        "リナリルアセテート",
        "δ-3-カレン",
        "α-ピネン",
        "α-テルピネオール",
        "テルピネン-4-オール"
      ],
      "literature": {
        "oil": {
          "percent": 0.63,
          "basis": "インド・ケララ州のジュース店から出た Citrus limetta の生果皮を洗って4〜5時間水蒸留。生果皮あたりの収率",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 85.71,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 4.85,
            "source": 0
          },
          {
            "name": "リナリルアセテート",
            "percent": 1.64,
            "source": 0
          },
          {
            "name": "δ-3-カレン",
            "percent": 1.2,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 1.17,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 0.44,
            "source": 0
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 0.36,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Narayanankutty, Visakh, Sasidharan et al. (2022) Molecules 27(23):8329",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9735939/"
          }
        ],
        "note": "このインド産の分析は10成分しか同定しておらず、シトラール・デカナール・リナロールは報告がないためnull（リナリルアセテートは1.64%）。「Citrus limetta」の名はインドのモサンビ（甘いライム）、イラン・メキシコのスイートレモン、イタリアのリメッタで中身が違い、イタリア産（Costa et al. 2018、要旨）はリナリルアセテート13.06 g/100 g、β-ピネン6.79 g/100 gとベルガモットに近い。メキシコ産 lima dulce の論文（Colecio-Juárez et al. 2012, Chilean J Agric Res 72:276）はサイトのボット確認画面で読めなかった。エジプトの「Sweet Lime」は C. limettioides で別種のため使っていない。"
      }
    },
    {
      "name": "エキナセア",
      "reading": "えきなせあ",
      "latin": "Echinacea purpurea",
      "group": "花・フローラル",
      "part": "花・根",
      "aroma": "乾いた花、薬草、土、穏やかな苦味",
      "role": "ハーブティーのような乾いた薬草感を加える。",
      "components": [
        "β-カリオフィレン",
        "α-フムレン",
        "カフェ酸",
        "フラボノイド類",
        "ゲルマクレンD",
        "α-フェランドレン",
        "γ-クルクメン",
        "δ-カジネン",
        "p-シメン",
        "α-ピネン",
        "β-ピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.030000000000000002,
          "min": 0.01,
          "max": 0.05,
          "basis": "セルビアのハーブ業者2社の乾燥した刻み全草（花を含む地上部）40 gを粉砕し、欧州薬局方の方法で水蒸留2時間",
          "source": 0
        },
        "composition": [
          {
            "name": "ゲルマクレンD",
            "percent": 41.81,
            "source": 1
          },
          {
            "name": "α-フェランドレン",
            "percent": 10.04,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 6.45,
            "source": 1
          },
          {
            "name": "γ-クルクメン",
            "percent": 5.03,
            "source": 1
          },
          {
            "name": "δ-カジネン",
            "percent": 3.48,
            "source": 1
          },
          {
            "name": "p-シメン",
            "percent": 2.2,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 2.09,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 2.09,
            "source": 1
          },
          {
            "name": "α-フムレン",
            "percent": 1.87,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Gladikostić N. et al. (2023) Plants 12(4):745, 本文・Figure 1b",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9968228/"
          },
          {
            "title": "Dosoky N.S. et al. (2023) Molecules 28(21):7330, Table 1（ブルガリア栽培の生花の精油5試料の平均。精油量とは別の資料）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10647913/"
          }
        ],
        "note": "ジンでは乾燥品を使うとして市販の乾燥全草の値にしたが、2時間の水蒸留で0.01〜0.05%と非常に少なく（セスキテルペンの多い油は取り切れていない可能性）、ブルガリアの生花は平均0.13±0.06%、南アフリカの乾燥した根は0.29%・葉は0.24%（w/w、Nyalambisa et al. 2017 Saudi Pharm J 25:381-386）。組成は生花の精油の値で代用し、根の精油はゲルマクレンD 20.3%・カリオフィレンオキシド12.2%・セドロール10.5%と違う。カフェ酸・フラボノイド類は揮発しない。"
      }
    },
    {
      "name": "蕗の花",
      "reading": "ふきのはな",
      "latin": "Petasites japonicus",
      "group": "和ボタニカル",
      "part": "花",
      "aroma": "春の青さ、ほろ苦さ、山菜、湿った土",
      "role": "山菜らしいほろ苦い青さを添える。",
      "components": [
        "β-カリオフィレン",
        "α-フムレン",
        "cis-3-ヘキセノール",
        "タンニン",
        "1-ノネン",
        "β-ビサボレン",
        "β-エレメン",
        "1-トリデセン",
        "1-ウンデセン",
        "ヘプタナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.07,
          "min": 0.061,
          "max": 0.07,
          "basis": "生のフキノトウをエーテルで冷浸し、抽出物を水蒸気蒸留した精油（1970年4月仙台郊外の18 kgから10.9 g）",
          "source": 0
        },
        "composition": [
          {
            "name": "1-ノネン",
            "percent": 77.43,
            "source": 0
          },
          {
            "name": "β-ビサボレン",
            "percent": 3.88,
            "source": 0
          },
          {
            "name": "β-エレメン",
            "percent": 3.05,
            "source": 0
          },
          {
            "name": "1-トリデセン",
            "percent": 2.04,
            "source": 0
          },
          {
            "name": "1-ウンデセン",
            "percent": 1.69,
            "source": 0
          },
          {
            "name": "ヘプタナール",
            "percent": 0.64,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 0.41,
            "source": 0
          },
          {
            "name": "cis-3-ヘキセノール",
            "percent": 0.1,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "菊地正雄 (1973) 薬学雑誌 93(1):123-126「フキのとうの成分研究（第7報）精油成分について その4」, Table I の本文（とう 0.07%）。下限は 栗原藤三郎・菊地正雄 (1971) 薬学雑誌 91(7):775-777「フキノトウの成分研究（第4報）精油成分について」",
            "url": "https://www.jstage.jst.go.jp/article/yakushi1947/93/1/93_1_123/_article/-char/ja/"
          }
        ],
        "note": "宮城・福島・山形のフキノトウ3試料の精油（中性油が95%、残りはアンゲリカ酸が9割以上の酸性油で、酸は other_major から外した）。表の値は中性油中の%なので、中性油の割合を掛けて精油全体に対する%にした（1-ノネンは各 80.8/80.3/82.4%）。1-ノネンなどの直鎖アルケンは系統の一覧にないため「脂肪族炭化水素（アルケン）」とした。α-フムレンは報告がなく、タンニンは揮発しないため null。フキ特有のフキノン（0.5〜0.8%）・バッケノリドAも含まれ、アキタブキ（var. giganteus）もほぼ同じ組成。"
      }
    },
    {
      "name": "不知火",
      "reading": "しらぬい",
      "latin": "Citrus reticulata x sinensis",
      "group": "シトラス",
      "part": "果皮・果実",
      "aroma": "濃いみかん、甘い柑橘、ジューシーな果皮",
      "role": "温州みかんより濃い甘い柑橘感を足す。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "デカナール",
        "リナロール",
        "β-ミルセン",
        "サビネン",
        "α-ファルネセン",
        "α-ピネン",
        "β-フェランドレン",
        "β-オシメン"
      ],
      "literature": {
        "oil": {
          "percent": 0.33,
          "basis": "韓国・光州で買った'Shiranui'（漢拏峰）の生果皮40 gを連続水蒸気蒸留抽出（SDE）3時間。内部標準で定量した揮発成分の総量3,286.38 mg/kgを%に換算（A：果皮の精油の量に相当する値として採用）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 91.82,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 2.55,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 1.65,
            "source": 1
          },
          {
            "name": "α-ファルネセン",
            "percent": 0.74,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 0.7,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 0.56,
            "source": 1
          },
          {
            "name": "β-オシメン",
            "percent": 0.35,
            "source": 1
          },
          {
            "name": "デカナール",
            "percent": 0.33,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 0.24,
            "source": 2
          },
          {
            "name": "リナロール",
            "percent": 0.14,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Hong & Kim (2016) Korean J Food Preserv 23(7):977-988（Hallabong＝C. hybrid 'Shiranui'、3,286.38 mg/kg＝0.33%を計算）",
            "url": "https://www.ekosfop.or.kr/archive/view_article?pid=kjfp-23-7-977"
          },
          {
            "title": "Song, Lan Phi, Park & Sawamura (2006) Biosci Biotechnol Biochem 70(3):737-739, Table 1（Japanese Shiranui 列：高知県果樹試験場産デコポン〔2003年12月収穫〕の冷圧油、w/w%）",
            "url": "https://www.jstage.jst.go.jp/article/bbb/70/3/70_3_737/_article/-char/ja/"
          },
          {
            "title": "中村・新谷 (2013) 愛媛県産業技術研究所研究報告 No.51, 表2（愛媛県産不知火の凍結粉砕コールドプレス油、%）",
            "url": "https://www.pref.ehime.jp/uploaded/attachment/51235.pdf"
          }
        ],
        "note": "組成は高知県産デコポンの冷圧油で、同じ論文の韓国済州島産（漢拏峰）はリナロール1.16%、アルデヒド計1.63%と含酸素成分が多い。この冷圧油の表にγ-テルピネンがないため愛媛県産の凍結粉砕コールドプレス油の値で補った（韓国産冷圧油はChoi 2003の要旨で0.88%）。精油量は韓国産の生果皮をSDEで定量した揮発成分の総量で採用した；同じ韓国の水蒸留（Shin et al. 2022）は0.109%（果皮6.4 kgから7 mL、同時に測った温州みかんも0.073%と低い）、済州島産果皮の水蒸留（Yang et al. 2023の'SH'）は乾物基準6.47 mL/100 gで、果皮の水分を約80%とすると生重量で約1.3%になり、実際の量はこの幅のどこかと考えられる。"
      }
    },
    {
      "name": "銀木犀",
      "reading": "ぎんもくせい",
      "latin": "Osmanthus fragrans var. fragrans",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "白い木犀、淡い花、アプリコット、清楚な甘さ",
      "role": "金木犀より控えめな白い花の甘さを加える。",
      "components": [
        "イオノン類",
        "リナロール",
        "ジャスモン",
        "2-フェニルエタノール",
        "β-オシメン",
        "リナロールオキシド類",
        "ジヒドロ-β-イオノン",
        "アロオシメン類"
      ],
      "literature": {
        "oil": {
          "percent": 0.15,
          "basis": "乾燥した木犀の花（中国湖北省咸寧産の市販品、品種群の記載なし）を中国薬局方の方法で水蒸留5時間。銀木犀の値がないので木犀の花の値で代用",
          "source": 0
        },
        "composition": [
          {
            "name": "β-オシメン",
            "percent": 55.2,
            "source": 1
          },
          {
            "name": "イオノン類",
            "percent": 12.92,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 11.3,
            "source": 1
          },
          {
            "name": "リナロールオキシド類",
            "percent": 5.53,
            "source": 1
          },
          {
            "name": "ジヒドロ-β-イオノン",
            "percent": 4.57,
            "source": 1
          },
          {
            "name": "アロオシメン類",
            "percent": 4.3,
            "source": 1
          },
          {
            "name": "ジャスモン",
            "percent": 0.04,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Hu C.D. et al. (2010) Molecules 15(5):3683-3693, 実験の部（木犀の花 OF の値で代用）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6263257/"
          },
          {
            "title": "Cai X. et al. (2014) J Zhejiang Univ Sci B 15(7):638-648, Table 1（銀桂 'Houban Yingui' の生花のSPME分析。内部標準に対する相対量を全揮発成分の合計758.96で割って計算）（α-イオノン＋trans-β-イオノン）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4097373/"
          }
        ],
        "note": "銀木犀（中国の銀桂＝Albus群に当たるとした）の香気成分は生花のヘッドスペース（SPME）分析しか見つからず、割合は内部標準に対する相対量の合計から計算した（絶対量には換算できない）。精油の量は銀木犀の値がなく、乾燥した木犀の花（品種群不明）の値で代用。乾燥花の精油ではβ-オシメンはcis・trans合わせて0.17%しか残らず、1,2-エポキシリナロール15.32%やリナロールオキシド類が主になる（Hu 2010 Table 1）ので、乾燥花を使うなら組成は前回の金木犀のデータに近い。同じ銀桂群でも'Baijie'の花の香りはβ-イオノン35.59%・α-イオノン7.7%・ジヒドロ-β-イオノン5.97%（Han et al. 2019 Hortic Res 6:106）と品種差が大きい。2-フェニルエタノールは検出されていない。"
      }
    },
    {
      "name": "米",
      "reading": "こめ",
      "latin": "Oryza sativa",
      "group": "和ボタニカル",
      "part": "米・米麹",
      "aroma": "炊いた米、麹、ほのかな甘み、穀物",
      "role": "ベース由来の丸みや穀物の余韻を支える。",
      "components": [
        "2-アセチル-1-ピロリン",
        "乳酸",
        "酢酸エチル",
        "フルフラール",
        "イソブチルアルデヒド",
        "イソブタノール",
        "イソバレルアルデヒド",
        "イソアミルアルコール",
        "2-メチルブタナール",
        "フェニルアセトアルデヒド"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "イソブチルアルデヒド",
            "percent": 38.08,
            "source": 0
          },
          {
            "name": "イソブタノール",
            "percent": 16.15,
            "source": 0
          },
          {
            "name": "イソバレルアルデヒド",
            "percent": 15.53,
            "source": 0
          },
          {
            "name": "イソアミルアルコール",
            "percent": 10.41,
            "source": 0
          },
          {
            "name": "2-メチルブタナール",
            "percent": 7.44,
            "source": 0
          },
          {
            "name": "フェニルアセトアルデヒド",
            "percent": 1.09,
            "source": 0
          },
          {
            "name": "酢酸エチル",
            "percent": 0.07,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 0.01,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "McCarthy C. et al. (2026) Front Fungal Biol 6:1666687, Table 1（A. oryzae RIB40 で48時間発酵させた蒸し米、R1・R2）（R1・R2の平均を、エタノールと酸を除いた揮発成分の合計の平均 1626.3 ppm で割って計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12886354/"
          }
        ],
        "note": "米麹として、清酒・醤油用の標準株 A. oryzae RIB40 で蒸した寿司米を48時間発酵させた試料のダイナミックヘッドスペースGC-MS（内部標準1つの半定量）の割合を使い、エタノール（2799〜4450 ppm）と酸は除いた。この論文の ppm は水を加えたスラリー全体あたりで（エタノールと酸を除いた合計 1620〜1632 ppm、麹あたりに直すと約0.5%）、密閉したシャーレでの発酵のためか実際の清酒麹の定量値（イソブチルアルデヒド約10 mg/kg・麹：高橋ほか 2007, 醸協 102:403）よりけた違いに多く、oil は null にした。清酒麹の香りの鍵は1-オクテン-3-オン・メチオナール・フェニルアセトアルデヒドで量は μg/kg 程度（高橋ほか 2006, 醸協 101:957）。2-アセチル-1-ピロリン（炊いた米の香り）はこの分析で出ず、乳酸は揮発しないため null。酒粕の値は調べていない。"
      }
    },
    {
      "name": "ヤブニッケイ",
      "reading": "やぶにっけい",
      "latin": "Cinnamomum yabunikkei",
      "group": "和ボタニカル",
      "part": "葉・樹皮",
      "aroma": "ニッキ、樟脳、葉、甘い木質",
      "role": "和のシナモン様の甘い木質感を加える。",
      "components": [
        "1,8-シネオール",
        "リナロール",
        "シンナムアルデヒド",
        "オイゲノール",
        "リモネン",
        "カンファー",
        "α-ピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.39,
          "basis": "千葉県富浦で1961年9月中旬に採ったヤブニッケイの葉を水蒸気蒸留（小枝は0.10%）",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 13,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 8,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 4,
            "source": 0
          },
          {
            "name": "カンファー",
            "percent": 4,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 2,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "萩庭丈寿・原田正敏・中島基之・境一成 (1962) 薬学雑誌 82(10):1441-1446「生薬の薬物学的研究（第6報）」, Table I",
            "url": "https://www.jstage.jst.go.jp/article/yakushi1947/82/10/82_10_1441/_article/-char/ja/"
          }
        ],
        "note": "1962年の充填カラムGCの概算で、最も多い成分（39%）は標準物質と一致せず未同定（本文「ヤブニクケイ葉および小枝油には使用標準物質と異なる成分が最多量を占める」）、ほかにも未同定のピークが計約23%ある。シンナムアルデヒドは検出されず、オイゲノールは標準物質に含まれず null。小笠原産の葉油はサフロール60%・オイゲノール3%で樟脳を多く含む系統もあり（藤田 1967, 植物学雑誌 80:261）、系統・産地で大きく違う。樹皮の精油量は見つからなかった。"
      }
    },
    {
      "name": "マヌカ",
      "reading": "まぬか",
      "latin": "Leptospermum scoparium",
      "group": "ハーブ・グリーン",
      "part": "葉・花",
      "aroma": "ハーブ、蜂蜜、ティーツリー様、乾いた葉",
      "role": "ニュージーランド系の薬草感と甘い余韻を加える。",
      "components": [
        "β-カリオフィレン",
        "α-ピネン",
        "リナロール",
        "サビネン",
        "β-トリケトン類",
        "カラメネン",
        "α-セリネン",
        "δ-カジネン",
        "α-クベベン",
        "β-コパエン"
      ],
      "literature": {
        "oil": {
          "percent": 0.6,
          "min": 0.2,
          "max": 1,
          "basis": "葉と若い枝の水蒸気蒸留の収率の範囲（総説、季節と産地で0.2〜1%）。乾燥・生の別の記載なし",
          "source": 0
        },
        "composition": [
          {
            "name": "β-トリケトン類",
            "percent": 20.8,
            "source": 1
          },
          {
            "name": "カラメネン",
            "percent": 17.78,
            "source": 1
          },
          {
            "name": "α-セリネン",
            "percent": 7.17,
            "source": 1
          },
          {
            "name": "δ-カジネン",
            "percent": 6.4,
            "source": 1
          },
          {
            "name": "α-クベベン",
            "percent": 6.06,
            "source": 1
          },
          {
            "name": "β-コパエン",
            "percent": 5.88,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 3.1,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 1.98,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Mathew C. et al. (2020) Pharmaceuticals 13(11):343（総説）, 2.1節",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7694078/"
          },
          {
            "title": "Muturi E.J. et al. (2020) PLoS ONE 15(2):e0229076, Table 1（市販マヌカ精油 LP 列）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7032722/"
          }
        ],
        "note": "市販のマヌカ精油（ニュージーランド・イーストケープのトリケトン型、Sigma-Aldrich品）の1分析。リナロール・サビネンは検出されず null（北島北部のα-ピネン型、ネルソンのリナロール型など別のケモタイプがある）。β-トリケトン（レプトスペルモンなど）は表の系統に当てはまらないので新しい系統名「β-トリケトン」にした。収率は生の枝葉の蒸留と思われ、乾燥葉ならもっと高くなるはず。"
      }
    },
    {
      "name": "河内晩柑",
      "reading": "かわちばんかん",
      "latin": "Citrus kawachiensis",
      "group": "シトラス",
      "part": "果皮・果実",
      "aroma": "和製グレープフルーツ、淡い苦味、厚い果皮、爽やかさ",
      "role": "軽い苦味を伴う和柑橘の厚みを加える。",
      "components": [
        "リモネン",
        "ヌートカトン",
        "デカナール",
        "リナロール",
        "γ-テルピネン",
        "β-ミルセン",
        "α-ピネン",
        "β-ピネン",
        "オクタナール",
        "テルピノレン"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 87.07,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 6.04,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 1.81,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 1.13,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 0.5,
            "source": 0
          },
          {
            "name": "デカナール",
            "percent": 0.26,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.26,
            "source": 0
          },
          {
            "name": "オクタナール",
            "percent": 0.26,
            "source": 0
          },
          {
            "name": "テルピノレン",
            "percent": 0.26,
            "source": 0
          },
          {
            "name": "ヌートカトン",
            "percent": 0.12,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Sawamura, Song, Choi, Sagawa & Ukeda (2001) Food Sci Technol Res 7(1):45-49, Table 1（土佐文旦〔高知県果樹試験場産〕のフラベドの手搾り冷圧油、面積%。河内晩柑の代用）",
            "url": "https://www.jstage.jst.go.jp/article/fstr/7/1/7_1_45/_article/-char/ja/"
          }
        ],
        "note": "河内晩柑（美生柑・宇和ゴールド）そのものの果皮精油の分析は見つからなかった（松山大学の果皮成分の報告〔Amakura et al. 2013〕はフラボノイド・クマリン、金子ら1996の50品種のヘッドスペース分析にも含まれない）。河内晩柑はブンタン由来の品種とされ（Amakura et al. 2013）、冷圧油の含酸素成分のクラスター分析でも土佐文旦と同じ群（C-1）に入るため（Sawamura et al. 1991）、組成は土佐文旦の値で代用した。精油量も見つからずnull（参考：第2弾のポメロはバングラデシュ産の生果皮の水蒸留で0.96〜1.09%）。"
      }
    },
    {
      "name": "パロサント",
      "reading": "ぱろさんと",
      "latin": "Bursera graveolens",
      "group": "樹皮・ウッディ",
      "part": "木部",
      "aroma": "聖木、樹脂、甘い煙、柑橘を帯びた木質",
      "role": "香木のような甘いウッディさと樹脂感を作る。",
      "components": [
        "リモネン",
        "α-ピネン",
        "β-ミルセン",
        "p-シメン",
        "α-テルピネオール",
        "カルベオール",
        "7-epi-α-オイデスモール",
        "メントフラン",
        "ミントラクトン",
        "カルボン"
      ],
      "literature": {
        "oil": {
          "percent": 1.35,
          "basis": "エクアドル・インバブーラ県の森林農業地のパロサントの茎を風乾・粉砕し、100 gを水蒸留2時間（クレベンジャー）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 46.2,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 17.8,
            "source": 1
          },
          {
            "name": "カルベオール",
            "percent": 7.1,
            "source": 1
          },
          {
            "name": "7-epi-α-オイデスモール",
            "percent": 5,
            "source": 1
          },
          {
            "name": "メントフラン",
            "percent": 3.4,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 3,
            "source": 1
          },
          {
            "name": "ミントラクトン",
            "percent": 1.3,
            "source": 1
          },
          {
            "name": "カルボン",
            "percent": 1.3,
            "source": 1
          },
          {
            "name": "p-シメン",
            "percent": 1.1,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Parichanon P. et al. (2025) Insects 16(2):202, Results（収率）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11857052/"
          },
          {
            "title": "Farina P. et al. (2021) Insects 12(10):894, Table 1（B. graveolens の茎の精油の列）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8540604/"
          }
        ],
        "note": "商品のパロサントは倒木の心材（木部）の香りが中心だが、見つかった収率と組成はエクアドルの栽培木の茎（枝）の値で、収率（Parichanon ら 2025）と組成（Farina ら 2021、水蒸気蒸留3時間）は同じ研究グループの同じ材料の精油。α-ピネンは検出されなかった。ペルーの幹材の精油はリモネン77%、リモネン14%・α-テルピネオール13%、α-テルピネン32%など報告により大きく違い（Muñoz-Acevedo ら 2024 Molecules 29:1753 の考察）、果実の精油はリモネン主体で収率も高い。"
      }
    },
    {
      "name": "金箔",
      "reading": "きんぱく",
      "latin": "Gold leaf",
      "group": "海・ミネラル",
      "part": "金箔",
      "aroma": "香りはほぼなく、視覚的な華やかさを担う",
      "role": "香味というより特別感や祝いの印象を加える補助素材。",
      "components": []
    },
    {
      "name": "スイバ",
      "reading": "すいば",
      "latin": "Rumex acetosa",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "酸味のある葉、青い茎、野草、軽い渋み",
      "role": "ソレル系の酸と青い野草感を加える。",
      "components": [
        "シュウ酸",
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "フラボノイド類"
      ]
    },
    {
      "name": "ツガサルノコシカケ",
      "reading": "つがさるのこしかけ",
      "latin": "Fomitopsis pinicola",
      "group": "樹皮・ウッディ",
      "part": "子実体",
      "aroma": "乾いた木、きのこ、土、ほのかなロースト感",
      "role": "森の木質と乾いたアーシーさを足す。",
      "components": [
        "フルフラール",
        "ピラジン類",
        "グルタミン酸",
        "タンニン"
      ]
    },
    {
      "name": "ウッドソレル",
      "reading": "うっどそれる",
      "latin": "Oxalis acetosella",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "酸味のある葉、森の下草、青い茎、軽い渋み",
      "role": "森の青さときゅっとした酸を加える。",
      "components": [
        "シュウ酸",
        "cis-3-ヘキセノール",
        "ヘキサナール",
        "フラボノイド類",
        "酢酸cis-3-ヘキセニル",
        "酢酸ペンチル",
        "イソバレルアルデヒド",
        "酢酸ヘキシル",
        "プロピオン酸イソアミル",
        "酢酸4-ペンテニル"
      ],
      "literature": {
        "oil": {
          "percent": 0.00494,
          "label": "香気成分",
          "basis": "スペインの野生 Oxalis pes-caprae の凍結乾燥した葉をSPME-GC-MSで分析し、内部標準（酢酸イソアミル）で半定量した揮発成分の合計（49.44 µg/g）",
          "source": 0
        },
        "composition": [
          {
            "name": "酢酸cis-3-ヘキセニル",
            "percent": 32.36,
            "source": null
          },
          {
            "name": "酢酸ペンチル",
            "percent": 12.68,
            "source": null
          },
          {
            "name": "イソバレルアルデヒド",
            "percent": 5.97,
            "source": null
          },
          {
            "name": "酢酸ヘキシル",
            "percent": 5.34,
            "source": null
          },
          {
            "name": "プロピオン酸イソアミル",
            "percent": 4.35,
            "source": null
          },
          {
            "name": "酢酸4-ペンテニル",
            "percent": 2.81,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Clemente-Villalba J. et al. (2024) Foods 13(6):858, Table 6（同属の O. pes-caprae の葉の値で代用。49.44 µg/g を%に換算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10969124/"
          }
        ],
        "note": "ウッドソレル（Oxalis acetosella）の精油・香気成分の資料は見つからず、同属で同じく酸味の葉をもつ Oxalis pes-caprae（スペインの野生品、凍結乾燥した葉）のSPME半定量値で代用（別種）。表の成分では cis-3-ヘキセノールは茎だけに0.57 µg/g で葉にはなく、ヘキサナールも検出されない。シュウ酸・フラボノイド類は揮発しない。内部標準の酢酸イソアミルと構造の近いイソアミル系の成分が含まれる点に注意。1-ドデカノール・1-テトラデカノール（計14.3%）とアルカン類は香りへの寄与が小さいため other_major から外した。"
      }
    },
    {
      "name": "せとか",
      "reading": "せとか",
      "latin": "Citrus setoka",
      "group": "シトラス",
      "part": "果皮・果実",
      "aroma": "濃いオレンジ、みかん、ジューシーな甘さ、柔らかな酸",
      "role": "華やかで甘い和柑橘の印象を加える。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "デカナール",
        "リナロール",
        "β-ミルセン",
        "オクタナール",
        "サビネン",
        "カルベオール",
        "テルピネン-4-オール",
        "ノナナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.49,
          "basis": "韓国・光州で買った'Setoka'（天恵香）の生果皮40 gを連続水蒸気蒸留抽出（SDE）3時間。内部標準で定量した揮発成分の総量4,939.77 mg/kgを%に換算（A：果皮の精油の量に相当する値として採用）",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 82.05,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 4.39,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 1.5,
            "source": 1
          },
          {
            "name": "オクタナール",
            "percent": 1.27,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 0.93,
            "source": 1
          },
          {
            "name": "デカナール",
            "percent": 0.86,
            "source": 1
          },
          {
            "name": "カルベオール",
            "percent": 0.82,
            "source": 1
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 0.5,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 0.37,
            "source": 1
          },
          {
            "name": "ノナナール",
            "percent": 0.31,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Hong & Kim (2016) Korean J Food Preserv 23(7):977-988（Cheonhyehyang＝Citrus hybrid 'Setoka'、4,939.77 mg/kg＝0.49%を計算）",
            "url": "https://www.ekosfop.or.kr/archive/view_article?pid=kjfp-23-7-977"
          },
          {
            "title": "Shin, Kim & Lee (2022) Food Sci Technol (Campinas) 42:e95921, Table 2（Cheonhyehyang 列：韓国で市販果〔2018年3月〕の生果皮を水蒸留8時間した油、面積%）",
            "url": "https://www.scielo.br/j/cta/a/QjgbptFDgJdXC5xNxXPkpFg/?lang=en"
          }
        ],
        "note": "天恵香（Cheonhyehyang）は'Setoka'の韓国名（Hong & Kim 2016に明記。Shin et al. 2022の系統式〔(温州×オレンジ)×マンダリン〕×(マンダリン×オレンジ)も一致）。組成は韓国の市販果の生果皮の水蒸留油で、リナロール4.39%、オクタナール1.27%と含酸素成分が多い；済州島産果皮の水蒸留油（Yang et al. 2023の'ST'、品種名はなく系統式からせとかと判断）はリモネン91.11%、リナロール0.95%、γ-テルピネン0.84%、デカナール0.20%と少なく、産地・熟度で差が大きい。精油量は生果皮のSDEで定量した揮発成分の総量で採用した；Shin et al. 2022の水蒸留は0.231%（果皮3.9 kgから9 mL）、Yang et al. 2023は乾物基準6.96 mL/100 g（果皮の水分を約80%とすると生重量で約1.4%）。"
      }
    },
    {
      "name": "夏みかん",
      "reading": "なつみかん",
      "latin": "Citrus natsudaidai",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "和柑橘、甘夏より強い酸と苦味、明るい皮",
      "role": "甘夏の元になった夏橙。酸と苦味がはっきりし、和の柑橘の輪郭を出す。",
      "components": [
        "リモネン",
        "γ-テルピネン",
        "β-ミルセン",
        "α-ピネン",
        "オクタナール",
        "β-ピネン",
        "β-フェランドレン",
        "デカナール",
        "リナロール",
        "ヌートカトン"
      ],
      "literature": {
        "oil": {
          "percent": 0.4,
          "basis": "夏みかん（韓国・済州島産）の成熟果皮を水蒸留30時間。乾物基準2.06%を果皮の水分80.06〜81.37%で生重量基準に換算",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 80.68,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 5.3,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 2.25,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 1.3,
            "source": 1
          },
          {
            "name": "オクタナール",
            "percent": 0.89,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 0.49,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 0.46,
            "source": 1
          },
          {
            "name": "デカナール",
            "percent": 0.28,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 0.11,
            "source": 1
          },
          {
            "name": "ヌートカトン",
            "percent": 0.03,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Yang, Choi, Lee, Kim & Park (2022) J Korean Wood Sci Technol 50(4):272-282（乾物基準2.06%×(1−0.8006〜0.8137)＝0.38〜0.41%を計算）",
            "url": "https://www.woodj.org/archive/view_article?pid=wood-50-4-272"
          },
          {
            "title": "Lan Phi, Nishiyama, Choi & Sawamura (2006) Biosci Biotechnol Biochem 70(8):1832-1838, Table 1（高知産の手搾り冷圧油、% w/w）",
            "url": "https://www.jstage.jst.go.jp/article/bbb/70/8/70_50705/_article"
          }
        ],
        "note": "夏みかん（夏橙、C. natsudaidai）の値。組成は高知県果樹試験場産の手搾り冷圧油1試料（同定60成分で94.08%）。収率は韓国・済州島産の成熟果皮を30時間水蒸留した値（乾物基準2.06%）を生重量基準に換算したもので、水分は熟度3段階をまとめた範囲。同じ研究グループの別分析（Yang et al. 2023）も乾物基準2.03 mL/100 gと近い。甘夏（川野夏橙）も、この値を使っている。"
      }
    },
    {
      "name": "たんかん",
      "reading": "たんかん",
      "latin": "Citrus tankan",
      "group": "シトラス",
      "part": "果皮",
      "aroma": "甘く濃い南国の柑橘、オレンジに近い皮",
      "role": "奄美・沖縄の柑橘。オレンジとみかんの間の、甘く濃い皮の香りを足す。",
      "components": [
        "リモネン",
        "β-ミルセン",
        "リナロール",
        "α-ピネン",
        "β-オシメン",
        "γ-テルピネン",
        "サビネン",
        "デカナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.332,
          "basis": "中国・広東省饒平産たんかんの生果皮0.5 kgを刻み、水2 Lで3時間水蒸気蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 94.47,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 2.63,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 1.22,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 0.5,
            "source": 1
          },
          {
            "name": "β-オシメン",
            "percent": 0.16,
            "source": 1
          },
          {
            "name": "γ-テルピネン",
            "percent": 0.13,
            "source": 1
          },
          {
            "name": "サビネン",
            "percent": 0.1,
            "source": 1
          },
          {
            "name": "デカナール",
            "percent": 0.01,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Peng, Chen, Guo et al. (2024) Foods 13(23):3841",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11640327/"
          },
          {
            "title": "Inafuku-Teramoto, Suwa, Fukuzawa & Kawamitsu (2011) J Jpn Soc Hortic Sci 80(2):214-224, Table 3（'T-132'＝C. tankan：沖縄本島北部産の成熟果皮〔生〕のヘキサン抽出物、GC-MS面積%）",
            "url": "https://www.jstage.jst.go.jp/article/jjshs1/80/2/80_2_214/_article/-char/ja/"
          }
        ],
        "note": "表に新しく足す素材。組成は沖縄本島北部の'T-132'（Citrus tankan）の成熟果皮のヘキサン抽出物（生果皮、面積%）で、リモネン94.47%のオレンジに近い型；オクタナールは痕跡（0.01%未満）のためnull、α-ピネンはα-ツジェンとの合算値。台湾産の乾燥果皮の超臨界抽出物（Chen & Huang 2016）はリモネン86.13%、β-ミルセン5.81%、リナロール1.40%、γ-テルピネン0.17%、デカナール0.07%。精油量は中国産の生果皮の水蒸気蒸留の値（この論文は6成分しか同定しておらず組成には使わなかった）で、コルシカ島の保存園の'Tankan'のおろし皮の冷抽出は6.24 g/100 g（外皮あたり）と高く、果皮まるごとの値は0.332%より高い可能性がある。"
      }
    },
    {
      "name": "ザクロ",
      "reading": "ざくろ",
      "latin": "Punica granatum",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "赤い果実、酸、渋み、透明感",
      "role": "赤い果実の酸と渋みを加える。",
      "components": [
        "アントシアニン",
        "タンニン",
        "フラネオール",
        "リンゴ酸"
      ]
    },
    {
      "name": "ミルクアザミ",
      "reading": "みるくあざみ",
      "latin": "Silybum marianum",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "乾いた種子、ナッツ、薬草、穏やかな苦味",
      "role": "種子由来のドライな薬草感を加える。",
      "components": [
        "フラボノイド類",
        "カフェ酸",
        "タンニン",
        "安息香酸",
        "γ-カジネン",
        "α-ピネン",
        "カンフェン",
        "α-フムレン",
        "リナロール",
        "テルピネン-4-オール",
        "γ-テルピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.12,
          "basis": "チュニジア北西部アムドゥン産の野生株の完熟種子（2010年6月採取、室温で2週間乾燥）100 gを水蒸留90分、留出液をジエチルエーテルで抽出",
          "source": 0
        },
        "composition": [
          {
            "name": "γ-カジネン",
            "percent": 49.6,
            "source": null
          },
          {
            "name": "α-ピネン",
            "percent": 24.5,
            "source": null
          },
          {
            "name": "カンフェン",
            "percent": 6.6,
            "source": null
          },
          {
            "name": "α-フムレン",
            "percent": 4.7,
            "source": null
          },
          {
            "name": "リナロール",
            "percent": 3.22,
            "source": null
          },
          {
            "name": "テルピネン-4-オール",
            "percent": 1.42,
            "source": null
          },
          {
            "name": "γ-テルピネン",
            "percent": 1.13,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Mhamdi B. et al. (2016) Pak J Pharm Sci 29(3):951–959",
            "url": "https://pjps.pk/uploads/pdfs/29/3/Paper-26.pdf"
          }
        ],
        "note": "チュニジアの野生株の種子1試料の値で、組成はTable 1（HP-Innowaxの面積%）から取った（γ-カジネンは要旨で49.8%、表で49.6%のため表の値）。表の代表成分（フラボノイド類＝シリマリン、カフェ酸、タンニン、安息香酸）は精油から検出されず、どれも揮発しにくい。"
      }
    },
    {
      "name": "カワカワ",
      "reading": "かわかわ",
      "latin": "Piper excelsum",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "ペッパー、青い葉、乾いたハーブ、軽い樹脂",
      "role": "ニュージーランド系の葉のスパイス感を加える。",
      "components": [
        "β-カリオフィレン",
        "ミリスチシン",
        "α-ピネン",
        "サビネン",
        "α-ムウロレン",
        "酢酸2-ヘプチル",
        "7-epi-セスキツジェン",
        "γ-カジネン",
        "1,8-シネオール",
        "テルピニルアセテート",
        "エレミシン"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "ミリスチシン",
            "percent": 20.5,
            "source": 0
          },
          {
            "name": "α-ムウロレン",
            "percent": 10.28,
            "source": 0
          },
          {
            "name": "酢酸2-ヘプチル",
            "percent": 6.57,
            "source": 0
          },
          {
            "name": "7-epi-セスキツジェン",
            "percent": 5.29,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 5.11,
            "source": 0
          },
          {
            "name": "γ-カジネン",
            "percent": 4.8,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 4.07,
            "source": 0
          },
          {
            "name": "テルピニルアセテート",
            "percent": 3.63,
            "source": 0
          },
          {
            "name": "エレミシン",
            "percent": 3.06,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 0.41,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Ham E. et al. (2026) J. Food Sci. 91(8):e71380, Table 4・Table 5（生葉のHS-SPME）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13498666/"
          }
        ],
        "note": "精油の収率・香気成分の定量値は見つからず oil は null（Briggs 1941 の精油の論文は有料で要旨もない）。成分はニュージーランド産の生葉のヘッドスペース（HS-SPME）の相対%。同じ論文で、乾燥（35℃・55℃・凍結乾燥）するとテルペン類が7〜9割減り（例：ムウロレン 1243→237〜266 a.u.）、乾燥葉ではミリスチシンなどの比率が上がると考えられる。α-ピネンは主要成分の表になく null。"
      }
    },
    {
      "name": "オークモス",
      "reading": "おーくもす",
      "latin": "Evernia prunastri",
      "group": "樹皮・ウッディ",
      "part": "地衣類",
      "aroma": "苔、湿った森、土、ほのかな甘さ",
      "role": "香水的な森の湿度とアーシーな余韻を作る。",
      "components": [
        "安息香酸",
        "サリチルアルデヒド",
        "クマリン",
        "タンニン",
        "アトラル酸メチル",
        "チグリン酸シトロネリル",
        "α-ピネン",
        "β-ピネン",
        "α-フェランドレン",
        "カンフェン"
      ],
      "literature": {
        "oil": {
          "percent": 0.32,
          "basis": "トルコ（アルダハン県ポソフ）の Evernia prunastri の地衣体を水蒸留した精油の収率（Kahriman ら 2011 の値を総説から引用）",
          "source": 0
        },
        "composition": [
          {
            "name": "アトラル酸メチル",
            "percent": 11.5,
            "source": null
          },
          {
            "name": "チグリン酸シトロネリル",
            "percent": 7.8,
            "source": null
          },
          {
            "name": "α-ピネン",
            "percent": 6.6,
            "source": null
          },
          {
            "name": "β-ピネン",
            "percent": 6.3,
            "source": null
          },
          {
            "name": "α-フェランドレン",
            "percent": 3.3,
            "source": null
          },
          {
            "name": "カンフェン",
            "percent": 3,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Essadki Y. et al. (2026) Microorganisms 14(4):924, Discussion と Table 3（Kahriman N. et al. (2011) Asian J Chem 23:1937-1939 の値の引用）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13118312/"
          }
        ],
        "note": "オークモスは精油ではなく溶剤抽出のアブソリュート（抽出率はおよそ2〜10%）が一般的だが、揮発成分として水蒸留の精油（トルコ産、収率0.32%）を採用し、other_major は同じ精油の組成（総説 Essadki ら 2026 の表3の文献[97]の列、一次資料は開けず）。この精油は長鎖アルケン・アルカン（1-トリコセン10.1%など）とフタル酸ジイソブチル6.5%（混入物）を含み、モノテルペン類は着生した樹木に由来する可能性もある。オークモスらしい香りの主成分はアトラル酸メチルで、セルビア産のアセトン画分では30.1%（オルシノール25.0%、オルセリン酸メチル10.2%、オルシノールモノメチルエーテル5.7%、アトラノール2.1%、同じ表の文献[99]）、市販アブソリュート（モロッコ産）の GC-MS では1%以上の成分がアトラル酸メチルだけ（Kokalj Ladan ら 2026 Molecules 31:207）。表の成分（安息香酸・サリチルアルデヒド・クマリン・タンニン）はどの分析にも見当たらなかった。"
      }
    },
    {
      "name": "サンダルウッド",
      "reading": "さんだるうっど",
      "latin": "Santalum album",
      "group": "樹皮・ウッディ",
      "part": "木部",
      "aroma": "白檀、クリーミーな木、甘い樹脂、静かな余韻",
      "role": "柔らかな香木感と落ち着いたウッディさを加える。",
      "components": [
        "セドロール",
        "β-カリオフィレン",
        "α-ピネン",
        "クマリン",
        "α-サンタロール",
        "β-サンタロール",
        "α-ベルガモトール",
        "epi-β-サンタロール",
        "α-サンタラール",
        "ランセオール"
      ],
      "literature": {
        "oil": {
          "percent": 5.5,
          "min": 3,
          "max": 8,
          "basis": "インドビャクダンの心材を水蒸留したときの精油収率の一般的な範囲（Jones & Plummer 2007 を引用した記述）",
          "source": 0
        },
        "composition": [
          {
            "name": "α-サンタロール",
            "percent": 48.66,
            "source": null
          },
          {
            "name": "β-サンタロール",
            "percent": 21.26,
            "source": null
          },
          {
            "name": "α-ベルガモトール",
            "percent": 5.64,
            "source": null
          },
          {
            "name": "epi-β-サンタロール",
            "percent": 3.59,
            "source": null
          },
          {
            "name": "α-サンタラール",
            "percent": 2,
            "source": null
          },
          {
            "name": "ランセオール",
            "percent": 1.79,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Liu X. et al. (2022) Front Plant Sci 13:961391, Discussion（Jones & Plummer 2007 の引用）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9366514/"
          }
        ],
        "note": "量はインドビャクダン心材の水蒸留収率の一般的な範囲（3〜8%）で、インド南部177本の心材の含油率（UV法）は0〜5.96%・平均2.71%（Fatima ら 2019 3 Biotech 9:252 の要旨）と、若い木や心材の少ない木では低い。other_major は市販の S. album 精油7点（インド・インドネシア・豪州産）の平均（Abd Algaffar ら 2024 Molecules 29:1846 の表4、WAX カラムの面積%）で、ISO 3518 の規格は α-サンタロール41〜55%・β-サンタロール16〜24%。表の成分（セドロール・β-カリオフィレン・α-ピネン・クマリン）は本物のビャクダン油の主要成分になく、カリオフィレンやセドロールが多い市販品は他の木の油の混入が疑われる（Kucharska ら 2021 Molecules 26:2249）。"
      }
    },
    {
      "name": "ヒソップ",
      "reading": "ひそっぷ",
      "latin": "Hyssopus officinalis",
      "group": "ハーブ・グリーン",
      "part": "葉・花",
      "aroma": "薬草、ミント、カンファー、乾いた花",
      "role": "クラシックなハーブの清涼感を足す。",
      "components": [
        "カンファー",
        "1,8-シネオール",
        "β-ピネン",
        "リナロール",
        "イソピノカンフォン",
        "ピノカンフォン",
        "ゲルマクレンD",
        "β-フェランドレン",
        "γ-エレメン",
        "β-カリオフィレン"
      ],
      "literature": {
        "oil": {
          "percent": 0.7,
          "min": 0.41,
          "max": 1.29,
          "basis": "ルーマニアの6集団の地上部（花穂と葉）を40℃で乾燥し水蒸留4時間。代表値は6集団の平均。最大はポーランドで買った薬局方品質のヒソップ草の1.29%",
          "source": 0
        },
        "composition": [
          {
            "name": "イソピノカンフォン",
            "percent": 36.94,
            "source": 0
          },
          {
            "name": "ピノカンフォン",
            "percent": 25.61,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 11.17,
            "source": 0
          },
          {
            "name": "ゲルマクレンD",
            "percent": 3.64,
            "source": 0
          },
          {
            "name": "β-フェランドレン",
            "percent": 3.01,
            "source": 0
          },
          {
            "name": "γ-エレメン",
            "percent": 2.68,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 2.2,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 0.77,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 0.19,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Imbrea I.M. et al. (2024) Plants 13(22):3259, Table 2 と 4.2節（6集団の平均を計算）／Aebisher D. et al. (2021) Molecules 26(13):3793, Table 1",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11598396/"
          }
        ],
        "note": "市販・薬用で標準のピノカンフォン／イソピノカンフォン型（ISO 9841 の型）で、ルーマニアの6集団（白花・桃花・青花の品種）の平均。この型ではカンファーは検出されず null（カンファーや1,8-シネオール・リナロールが多い型〈var. decumbens など〉もある）。精油の量は産地・収穫時期で0.3〜1.8%ほどの幅がある。"
      }
    },
    {
      "name": "ボリジ",
      "reading": "ぼりじ",
      "latin": "Borago officinalis",
      "group": "花・フローラル",
      "part": "花・葉",
      "aroma": "青い葉、きゅうり、淡い花、瑞々しさ",
      "role": "軽い青さと瑞々しいグリーン感を加える。",
      "components": [
        "cis-3-ヘキセノール",
        "ヘキサナール",
        "ノナジエナール",
        "フラボノイド類",
        "1,8-シネオール",
        "1-ヘキサノール",
        "1-オクテン-3-オール",
        "trans-4-ヘキセノール",
        "酢酸cis-3-ヘキセニル",
        "1-ペンテン-3-オン",
        "ジメチルスルフィド"
      ],
      "literature": {
        "oil": {
          "percent": 0.16,
          "min": 0.14,
          "max": 0.18,
          "basis": "A（精油）。チュニジア3産地（チュニス・ビゼルト・ザグアン）のボリジの地上部を水蒸留（要旨に乾燥・生の記載なし）",
          "source": 0
        },
        "composition": [
          {
            "name": "cis-3-ヘキセノール",
            "percent": 34.3,
            "source": 1
          },
          {
            "name": "1,8-シネオール",
            "percent": 20.07,
            "source": 1
          },
          {
            "name": "1-ヘキサノール",
            "percent": 15.56,
            "source": 1
          },
          {
            "name": "1-オクテン-3-オール",
            "percent": 6.75,
            "source": 1
          },
          {
            "name": "trans-4-ヘキセノール",
            "percent": 4.63,
            "source": 1
          },
          {
            "name": "酢酸cis-3-ヘキセニル",
            "percent": 4.12,
            "source": 1
          },
          {
            "name": "ヘキサナール",
            "percent": 3.37,
            "source": 1
          },
          {
            "name": "1-ペンテン-3-オン",
            "percent": 2.15,
            "source": 1
          },
          {
            "name": "ジメチルスルフィド",
            "percent": 2.02,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Zribi I. et al. (2019) Ind Crops Prod 129:290-298（要旨）",
            "url": "https://doi.org/10.1016/j.indcrop.2018.12.021"
          },
          {
            "title": "Fernández-Pintor B. et al. (2025) Molecules 30(8):1799, Table 1（ポルトガル・マデイラ島の市販の生花のHS-SPME。3-オクタノールに対する相対面積 59.38 を、ボリジの20成分の合計 173.12 で割って計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12029428/"
          }
        ],
        "note": "量はチュニジアの地上部（花と葉）の水蒸留の値（要旨）で、花だけの精油量は見つからなかった（ロゼット葉は0.01〜0.13%、Mhamdi et al. 2007 Ital J Biochem 56:176）。成分はマデイラの市販の生花のHS-SPME（相対面積をボリジの20成分の合計 173.12 で割って%にした）で、同じチュニジアの研究の花のSPMEはオクタナール13.3〜16.4%が主、ポルトガル北部の花（Fernandes et al. 2019 Eur Food Res Technol 245:593）はエステル類（オクタン酸エチル）と1-ヘキサノールが主と、産地・方法で大きく違う。ノナジエナールは検出されず、フラボノイド類は揮発しない。"
      }
    },
    {
      "name": "ヘリクリサム",
      "reading": "へりくりさむ",
      "latin": "Helichrysum italicum",
      "group": "花・フローラル",
      "part": "花",
      "aroma": "乾いた花、蜂蜜、ハーブ、少しカレー様",
      "role": "ドライフラワーの甘さとハーブ感を重ねる。",
      "components": [
        "ネロール",
        "リナロール",
        "β-カリオフィレン",
        "カンフェン",
        "酢酸ネリル",
        "イタリセン",
        "ロシフォリオール",
        "ゲラニオール",
        "α-セリネン",
        "β-セリネン",
        "α-ピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.31,
          "min": 0.1,
          "max": 0.31,
          "basis": "ポーランドで栽培した株の花序を風乾し、100 gを水蒸留3時間（クレベンジャー）。最小は同じ論文が引く文献値（花序0.10〜0.18%）の下限",
          "source": 0
        },
        "composition": [
          {
            "name": "酢酸ネリル",
            "percent": 16.38,
            "source": 0
          },
          {
            "name": "ネロール",
            "percent": 15.73,
            "source": 0
          },
          {
            "name": "イタリセン",
            "percent": 7.25,
            "source": 0
          },
          {
            "name": "ロシフォリオール",
            "percent": 6.4,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 6.32,
            "source": 0
          },
          {
            "name": "α-セリネン",
            "percent": 5.27,
            "source": 0
          },
          {
            "name": "β-セリネン",
            "percent": 4.63,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 4.5,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 4.05,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 2.25,
            "source": 0
          },
          {
            "name": "カンフェン",
            "percent": 0.06,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Węglarz Z. et al. (2022) Pharmaceuticals 15(6):735, 要旨・Table 2・考察",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9227552/"
          }
        ],
        "note": "ポーランドで栽培した1試料（ネロールとそのエステルが多いケモタイプ）の値。ヘリクリサムは産地・ケモタイプで組成が大きく違い、クロアチアの自生群落の種から育てた株も北部・中部・南部で3つのケモタイプに分かれる（Ninčević Runjić et al. 2025 Front Plant Sci 16:1467421）。アルジェリア産の風乾した地上部は0.44% v/wで、α-セドレン13.61%・α-クルクメン11.41%が多い（Djihane et al. 2017 Saudi Pharm J 25:780-787）。カンフェンは0.06%とごく少ない。"
      }
    },
    {
      "name": "ソルトブッシュ",
      "reading": "そるとぶっしゅ",
      "latin": "Atriplex nummularia",
      "group": "海・ミネラル",
      "part": "葉",
      "aroma": "塩気、乾いた葉、青い草、ミネラル感",
      "role": "塩生植物のドライな青さと塩気を加える。",
      "components": [
        "グルタミン酸",
        "ヨード様成分",
        "cis-3-ヘキセノール",
        "ヘキサナール"
      ]
    },
    {
      "name": "キナ",
      "reading": "きな",
      "latin": "Cinchona spp.",
      "group": "樹皮・ウッディ",
      "part": "樹皮",
      "aroma": "乾いた樹皮、苦味、薬草、トニック様",
      "role": "トニックを思わせるビターな骨格を加える。",
      "components": [
        "キナ酸",
        "タンニン",
        "安息香酸",
        "フラボノイド類"
      ]
    },
    {
      "name": "キャットニップ",
      "reading": "きゃっとにっぷ",
      "latin": "Nepeta cataria",
      "group": "ハーブ・グリーン",
      "part": "葉・花",
      "aroma": "ミント、乾いたハーブ、青い葉、軽いレモン感",
      "role": "ミントに近い穏やかなハーブ感を足す。",
      "components": [
        "シトロネロール",
        "ゲラニオール",
        "リナロール",
        "β-カリオフィレン",
        "ネペタラクトン類",
        "カリオフィレンオキシド"
      ],
      "literature": {
        "oil": {
          "percent": 0.74,
          "min": 0.69,
          "max": 0.79,
          "basis": "ニュージャージーで栽培した3品種の地上部（茎・葉・花穂）を37℃で乾燥し水蒸留2時間。2018年の精油の量（g/株）を乾物量（g/株）で割り、3品種を平均",
          "source": 0
        },
        "composition": [
          {
            "name": "ネペタラクトン類",
            "percent": 83.5,
            "source": 0
          },
          {
            "name": "カリオフィレンオキシド",
            "percent": 7.47,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 4.9,
            "source": 0
          },
          {
            "name": "シトロネロール",
            "percent": 1.43,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Gomes E.N. et al. (2023) Front. Plant Sci. 14:1121582, Table 3・Table 4（2018年の精油量÷乾物量を計算し3品種を平均）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9971627/"
          }
        ],
        "note": "一般的なネペタラクトン型（市販の乾燥キャットニップの型）で、2018年（定着した2年目）の2回の収穫×3品種の平均。ネペタラクトン類は(Z,E)体と(E,Z)体の合計（品種で比率が大きく違う）。ゲラニオール・リナロールは痕跡のみで null。レモンキャットニップ（var. citriodora 型）は全く違い、ブルガリア栽培の N. cataria ではシトロネロール26.3%・ゲラニオール15.9%・ゲラニアール11.6%・ネラール11.5%・ネロール9.6%（Mollova et al. 2023 ACS Omega 8:15441）。改良品種なので精油はやや多めで、文献の幅は0.11〜1.50%（Yang et al. 2020 Saudi Pharm J 28:560 が引用）。"
      }
    },
    {
      "name": "ケール",
      "reading": "けーる",
      "latin": "Brassica oleracea var. acephala",
      "group": "果実・野菜",
      "part": "葉",
      "aroma": "青菜、葉、軽い硫黄感、土っぽさ",
      "role": "ベジタルな青さと野菜の厚みを加える。",
      "components": [
        "ジメチルスルフィド",
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "グルタミン酸"
      ]
    },
    {
      "name": "ケッパー",
      "reading": "けっぱー",
      "latin": "Capparis spinosa",
      "group": "果実・野菜",
      "part": "蕾",
      "aroma": "塩漬け、青い蕾、軽い辛味、酸",
      "role": "塩気と青い酸味のあるアクセントを加える。",
      "components": [
        "カプサイシン",
        "グルタミン酸",
        "酢酸",
        "ヘキサナール"
      ]
    },
    {
      "name": "ガラナ",
      "reading": "がらな",
      "latin": "Paullinia cupana",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "ビター、コーラ様、乾いた種子、軽い甘さ",
      "role": "ビターでエナジードリンク的な余韻を作る。",
      "components": [
        "カフェイン",
        "テオブロミン",
        "タンニン",
        "ピラジン類"
      ]
    },
    {
      "name": "カヤの実",
      "reading": "かやのみ",
      "latin": "Torreya nucifera",
      "group": "ナッツ・焙煎",
      "part": "種子",
      "aroma": "ナッツ、針葉樹、油脂、ほのかな樹脂",
      "role": "和のナッティさと針葉樹の余韻を加える。",
      "components": [
        "α-ピネン",
        "β-ピネン",
        "ピラジン類",
        "ミリスチン酸",
        "リモネン",
        "ヘキサナール",
        "2-オクタノン",
        "δ-3-カレン",
        "β-ミルセン",
        "安息香酸メチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.002506,
          "min": 0.000941,
          "max": 0.005252,
          "label": "香気成分",
          "basis": "中国浙江省の榧（Torreya grandis）2品種の生の種子（殻を除く）を収穫後の追熟0〜20日にSPME-GC-MS（内部標準2-オクタノール、ng/g）で分析した28成分の合計。10試料の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "リモネン",
            "percent": 46.74,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 32.42,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 4.2,
            "source": 0
          },
          {
            "name": "2-オクタノン",
            "percent": 3.28,
            "source": 0
          },
          {
            "name": "δ-3-カレン",
            "percent": 2.83,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 2.31,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 1.38,
            "source": 0
          },
          {
            "name": "安息香酸メチル",
            "percent": 1.05,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Zhang Z. et al. (2024) Int J Mol Sci 25(11):5581, Supplementary Table S3（試料ごとの28成分の合計を計算：平均 25.06 µg/g、範囲 9.41〜52.52 µg/g）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11171539/"
          }
        ],
        "note": "カヤ（T. nucifera）・榧（T. grandis）とも種子の精油の収率と成分は見つからず（精油の資料は葉 0.9〜1.6%乾燥重量や榧の仮種皮だけで、カヤの実では仮種皮を除く）、A. 精油ではなく近縁の榧の生の種子のSPME定量値（B. 香気成分の総量）で代用した。別の研究では香榧の種子のテルペン合計が追熟12日目に最大96.53 µg/gとさらに多い。乾燥・焙煎（炒りカヤ）の値はなく焙煎で生じるピラジン類は分からず、ミリスチン酸は脂肪酸で揮発成分の分析の対象外。"
      }
    },
    {
      "name": "キハダの実",
      "reading": "きはだのみ",
      "latin": "Phellodendron amurense",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "柑橘樹、苦味、乾いた果皮、薬草",
      "role": "山椒に近いミカン科のビターな輪郭を加える。",
      "components": [
        "リモネン",
        "β-カリオフィレン",
        "タンニン",
        "フラボノイド類"
      ]
    },
    {
      "name": "ヴィチペリフェリペッパー",
      "reading": "ゔぃちぺりふぇりぺっぱー",
      "latin": "Piper borbonense",
      "group": "シード・スパイス",
      "part": "果実",
      "aroma": "黒胡椒、柑橘、木質、温かな辛味",
      "role": "胡椒の辛味に柑橘的な明るさを加える。",
      "components": [
        "ピペリン",
        "β-カリオフィレン",
        "リモネン",
        "α-ピネン",
        "α-フェランドレン",
        "δ-3-カレン",
        "β-ピネン",
        "エレミシン",
        "p-シメン",
        "ミリスチシン",
        "ディルアピオール",
        "メチルオイゲノール"
      ],
      "literature": {
        "oil": {
          "percent": 6.09,
          "min": 3.04,
          "max": 11.3,
          "basis": "スパイス店で買ったマダガスカル産の果実を粉砕・水蒸留2時間（クレベンジャー）。範囲は同論文Table 1の文献値（Weil et al.）",
          "source": 0
        },
        "composition": [
          {
            "name": "α-フェランドレン",
            "percent": 14.77,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 9.88,
            "source": 0
          },
          {
            "name": "δ-3-カレン",
            "percent": 6.43,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 6.39,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 5.03,
            "source": 0
          },
          {
            "name": "エレミシン",
            "percent": 4.37,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 3.98,
            "source": 0
          },
          {
            "name": "ミリスチシン",
            "percent": 3.74,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 3.52,
            "source": 0
          },
          {
            "name": "ディルアピオール",
            "percent": 3.22,
            "source": 0
          },
          {
            "name": "メチルオイゲノール",
            "percent": 3.01,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Sander A. et al. (2025) Molecules 30(20):4140, Table 1（6.09%は本研究、3.04–11.30%は文献の最小・最大）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12566369/"
          }
        ],
        "note": "マダガスカル産の市販品1試料の値。先行研究（Weil et al.、収率3.04%）ではリモネン27.3%、α-フェランドレン14.5%、アサリシン13.5%が主成分で、本試料ではアサリシンは検出されず、組成の振れ幅が大きい。ピペリンは揮発しない辛味成分で精油には入らない（エタノール抽出物中0.86%）。"
      }
    },
    {
      "name": "アンブレットシード",
      "reading": "あんぶれっとしーど",
      "latin": "Abelmoschus moschatus",
      "group": "シード・スパイス",
      "part": "種子",
      "aroma": "ムスク、洋梨、甘い花",
      "role": "植物性のムスク。花とスパイスの余韻をまるくする。",
      "components": [
        "酢酸ファルネシル",
        "ファルネセン",
        "アンブレットリド",
        "酢酸デシル",
        "酢酸ドデシル",
        "(Z)-5-テトラデセノリド"
      ],
      "literature": {
        "oil": {
          "percent": 0.33,
          "basis": "インド産の種子（未粉砕）をメタノールで選択抽出し、液液抽出で脂肪酸を除いた揮発性濃縮物の収率（水蒸気蒸留ではない）",
          "source": 0
        },
        "composition": [
          {
            "name": "酢酸ファルネシル",
            "percent": 54.3,
            "source": null
          },
          {
            "name": "ファルネセン",
            "percent": 17.1,
            "source": null
          },
          {
            "name": "アンブレットリド",
            "percent": 9.3,
            "source": null
          },
          {
            "name": "酢酸デシル",
            "percent": 6,
            "source": null
          },
          {
            "name": "酢酸ドデシル",
            "percent": 4.8,
            "source": null
          },
          {
            "name": "(Z)-5-テトラデセノリド",
            "percent": 1.3,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "Rout P.K., Rao Y.R., Jena K.S., Sahoo D., Mishra B.C. (2004) J Essent Oil Res 16(1):35-37「Extraction and composition of the essential oil of Ambrette (Abelmoschus moschatus) seeds」（要旨）",
            "url": "https://europepmc.org/article/AGR/IND43697380"
          }
        ],
        "note": "収率と組成は同じ文献の要旨の値（本文は開けず）。酢酸ファルネシルは(E,E)体50.5%＋(Z,E)体3.8%、ファルネセンは(E)-β体9.8%＋(E,E)-α体7.3%を合計。ベトナム産の水蒸気蒸留油5試料は(E)-2,3-ジヒドロファルネシルアセテート32.9〜67.3%、(E,E)-酢酸ファルネシル14.9〜35.5%、アンブレットリド3.0〜5.5%と組成がかなり違う（Dung et al. 1999, J Essent Oil Res 11:447 の要旨）。市販のアンブレットシード油の分析でも酢酸ファルネシル51.45%・アンブレットリド12.96%（Arokiyaraj et al. 2014, Molecules 20:384, Table 1）。"
      }
    },
    {
      "name": "ドーナツ生地",
      "reading": "どーなつきじ",
      "latin": "Doughnut dough",
      "group": "甘味・樽香",
      "part": "生地",
      "aroma": "小麦、揚げ菓子、バニラ、甘いロースト",
      "role": "菓子らしい穀物感と甘いロースト香を加える補助素材。",
      "components": [
        "フルフラール",
        "マルトール",
        "バニリン",
        "ピラジン類",
        "ヘキサナール",
        "trans-2-ヘキセナール",
        "cis-2-ヘプテナール",
        "1-ヘキサノール",
        "1-ペンタノール",
        "フルフリルアルコール"
      ],
      "literature": {
        "oil": {
          "percent": 0.0000889,
          "label": "香気成分",
          "basis": "植物油で揚げた生地（フィリングなし）のSPME半定量値の合計888.7。論文の表の単位は µg/g だが、内部標準の量（1 µg/mL を2 µL、試料2 g）に合う ng/g と判断して計算",
          "source": 0
        },
        "composition": [
          {
            "name": "ヘキサナール",
            "percent": 14.74,
            "source": 0
          },
          {
            "name": "trans-2-ヘキセナール",
            "percent": 9.02,
            "source": 0
          },
          {
            "name": "cis-2-ヘプテナール",
            "percent": 4.06,
            "source": 0
          },
          {
            "name": "ピラジン類",
            "percent": 3.44,
            "source": 0
          },
          {
            "name": "1-ヘキサノール",
            "percent": 2.96,
            "source": 0
          },
          {
            "name": "1-ペンタノール",
            "percent": 2.19,
            "source": 0
          },
          {
            "name": "フルフリルアルコール",
            "percent": 1.11,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Tzompa-Sosa D.A., Provijn P., Gellynck X., Schouteten J.J. (2023) J Food Sci 88(S1):130-146（表3の値の合計を計算。単位は内部標準の量から ng/g と判断）",
            "url": "https://biblio.ugent.be/publication/01HJ0NSCRVGGVFRWVG4H8Y28PM"
          }
        ],
        "note": "ベルギーの研究で、小麦粉・砂糖・イースト・卵・バターの生地を植物油（ひまわり油・菜種油の配合油）で180℃で揚げたもの（中にヘーゼルナッツスプレッド、分析は生地のみ）のSPME半定量の割合。表の単位は「µg 4-methylpyridine equivalents/g」だが、内部標準の添加量（1 µg/mL を2 µL、試料2 g）からは ng/g になるはずで量が1000倍食い違う。内部標準の量に合う ng/g と判断し、合計888.7 ng/g＝0.0000889%とした（表の単位のままなら0.089%）。合計の約54%は酢酸・酪酸・ヘキサン酸で、グリコールエーテル類なども含む。フルフラール・マルトール・バニリンは検出されていない（バニラは配合なし）。"
      }
    },
    {
      "name": "グレーズ",
      "reading": "ぐれーず",
      "latin": "Sugar glaze",
      "group": "甘味・樽香",
      "part": "糖衣",
      "aroma": "砂糖衣、バニラ、軽いミルキー感、甘さ",
      "role": "甘い菓子のトップノートを補う補助素材。",
      "components": [
        "バニリン",
        "マルトール",
        "フルフラール",
        "酢酸エチル"
      ]
    },
    {
      "name": "オーク",
      "reading": "おーく",
      "latin": "Quercus spp.",
      "group": "甘味・樽香",
      "part": "木部",
      "aroma": "樽、ココナッツ様のウイスキーラクトン、バニラ、スパイス",
      "role": "樽のような甘い木の香り。熟成感や余韻を足す。",
      "components": [
        "イソオイゲノール",
        "ウイスキーラクトン",
        "バニリン",
        "trans-4-プロペニルシリンゴール",
        "オイゲノール",
        "フルフラール",
        "フルフリルアルコール",
        "4-ビニルグアイアコール",
        "アセトバニロン"
      ],
      "literature": {
        "oil": {
          "percent": 0.0709,
          "min": 0.0363,
          "max": 0.1058,
          "label": "香気成分",
          "basis": "樽用の未焼成オーク材（中国産モンゴリナラ・米国産・フランス産）の粉末を50%エタノールに40℃で24時間浸し、抽出液の28成分を定量した合計。3産地の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "イソオイゲノール",
            "percent": 27.94,
            "source": 0
          },
          {
            "name": "ウイスキーラクトン",
            "percent": 24.31,
            "source": 0
          },
          {
            "name": "バニリン",
            "percent": 5.44,
            "source": 0
          },
          {
            "name": "trans-4-プロペニルシリンゴール",
            "percent": 3.74,
            "source": 0
          },
          {
            "name": "オイゲノール",
            "percent": 2.27,
            "source": 0
          },
          {
            "name": "フルフラール",
            "percent": 1.97,
            "source": 0
          },
          {
            "name": "フルフリルアルコール",
            "percent": 1.62,
            "source": 0
          },
          {
            "name": "4-ビニルグアイアコール",
            "percent": 1.06,
            "source": 0
          },
          {
            "name": "アセトバニロン",
            "percent": 1.03,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Luo M. et al. (2023) Foods 12(23):4266, Supplementary Table S1（CK 列の28成分を産地ごとに合計: 中国 363.4・米国 705.3・フランス 1058.2 μg/g、その平均）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10706723/"
          }
        ],
        "note": "ジンの「オーク」は生の材・樹皮が多いので未焼成材の値を選んだ（中国産モンゴリナラはミズナラの近縁で、3産地で最も少ない）。香りの弱いコニフェリルアルデヒド（15.0%）・シリングアルデヒド（11.1%）・5-HMF（2.1%）は合計には入るが other_major から除いた。樽のように中程度に焼くと合計は4522〜10762 μg/gに増え、フルフラール（21〜38%）が主になる（同 Table S1）。樹皮の値は見つからなかった。"
      }
    },
    {
      "name": "エゾヤマモモ",
      "reading": "えぞやまもも",
      "latin": "Myrica gale",
      "group": "ハーブ・グリーン",
      "part": "葉・果実",
      "aroma": "樹脂、ベリー、湿った葉、軽い苦味",
      "role": "北方系の樹脂感と野生のベリー感を加える。",
      "components": [
        "α-ピネン",
        "β-ミルセン",
        "β-カリオフィレン",
        "タンニン",
        "β-エレメノン",
        "セリナ-3,7(11)-ジエン",
        "p-シメン",
        "リモネン",
        "1,8-シネオール",
        "β-ピネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.24,
          "min": 0.09,
          "max": 0.5,
          "basis": "リトアニアの3つの湿地の雌株25株（8月採取）の乾燥葉を水蒸留2時間（欧州薬局方の方法）。代表値は3生育地の平均を株数で重みづけ、範囲は個体の最小〜最大",
          "source": 0
        },
        "composition": [
          {
            "name": "β-エレメノン",
            "percent": 13.27,
            "source": 1
          },
          {
            "name": "セリナ-3,7(11)-ジエン",
            "percent": 11,
            "source": 1
          },
          {
            "name": "p-シメン",
            "percent": 10.6,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 9.81,
            "source": 1
          },
          {
            "name": "1,8-シネオール",
            "percent": 7.73,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 4.97,
            "source": 1
          },
          {
            "name": "α-ピネン",
            "percent": 1.92,
            "source": 1
          },
          {
            "name": "β-カリオフィレン",
            "percent": 0.42,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Ložienė K. et al. (2023) Plants 12(5):1050, Table 1（ヨーロッパのヤチヤナギ〈基準変種〉の乾燥葉の値で代用。3生育地の平均を株数で重みづけして計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10005319/"
          },
          {
            "title": "Nakata M. et al. (2013) J Oleo Sci 62(9):755-762, Table 1（野生株の列）",
            "url": "https://www.jstage.jst.go.jp/article/jos/62/9/62_755/_article/-char/ja/"
          }
        ],
        "note": "組成は北海道（網走）の野生ヤチヤナギ（Myrica gale var. tomentosa）の葉を40℃で3日乾燥し水蒸留1時間した精油（GC面積%、未同定20.2%）。この論文に精油量の記載がないため、精油量はヨーロッパの基準変種（リトアニア）の乾燥葉の値で代用。日本の変種はβ-エレメノン・セリナジエン・シメンが多く、α-ピネンと1,8-シネオールが主のヨーロッパ産と組成が違う（論文の考察）。要旨はミルセンを挙げるが表に値がないためnull。栽培株では1,8-シネオールが約2倍（15.94%）。PDFの表は列ごとに並ぶため行に組み直して読んだ（野生株の値の和は101.9%で、合計欄の99.73%とわずかに合わない）。仕様の「果実」を含む場合、果実の精油は葉よりずっと多い（リトアニアの乾燥果実で4.03%、1.57〜9.11%、α-ピネン21.3%・1,8-シネオール16.4%が主）。タンニンは揮発しない。"
      }
    },
    {
      "name": "マートル",
      "reading": "まーとる",
      "latin": "Myrtus communis",
      "group": "ハーブ・グリーン",
      "part": "葉・果実",
      "aroma": "ユーカリ、月桂樹、青い葉、軽い花",
      "role": "地中海系の青い葉と清涼感を加える。",
      "components": [
        "α-ピネン",
        "リモネン",
        "1,8-シネオール",
        "リナロール",
        "α-テルピネオール",
        "酢酸ゲラニル",
        "メチルオイゲノール",
        "酢酸ミルテニル"
      ],
      "literature": {
        "oil": {
          "percent": 1.02,
          "min": 0.96,
          "max": 1.08,
          "basis": "ミラノ大学植物園の1株の葉を風乾し水蒸留2時間。3回（2018年7月・2019年3月・10月）の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 30.07,
            "source": 1
          },
          {
            "name": "1,8-シネオール",
            "percent": 15.68,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 11.16,
            "source": 1
          },
          {
            "name": "リナロール",
            "percent": 7,
            "source": 1
          },
          {
            "name": "α-テルピネオール",
            "percent": 6.25,
            "source": 1
          },
          {
            "name": "酢酸ゲラニル",
            "percent": 3.48,
            "source": 1
          },
          {
            "name": "メチルオイゲノール",
            "percent": 2.27,
            "source": 1
          },
          {
            "name": "酢酸ミルテニル",
            "percent": 1.31,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "Giuliani C. et al. (2022) Plants 11(6):754, Table 1・Table 2（乾燥葉DL）（3回の平均を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8949965/"
          },
          {
            "title": "Usai M. et al. (2020) Plants 9(10):1288, Table 2〜6（サルデーニャの52系統の平均を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7650784/"
          }
        ],
        "note": "葉の値。成分はサルデーニャの52系統（地中海のα-ピネン／1,8-シネオール型）の生葉の精油の平均を計算（表の「-」は0、「2I.86」は21.86と読んだ）、精油の量はミラノの植物園1株の乾燥葉の値で、別の資料を組み合わせた。スペイン・モロッコなどには酢酸ミルテニルが多い型があり（この52系統でも2系統で27〜28%）、ミラノの株はリナロールが18〜36%と多い。果実の精油は組成が違う（α-ピネン12〜21%、1,8-シネオール6〜12%など）。"
      }
    },
    {
      "name": "ジンセンベリー",
      "reading": "じんせんべりー",
      "latin": "Panax ginseng",
      "group": "根・土台",
      "part": "果実・根・葉",
      "aroma": "高麗人参、薬草、土、赤い果実の渋み",
      "role": "滋味のある薬草感と乾いた苦味を加える。",
      "components": [
        "サポニン類",
        "フラボノイド類",
        "ヘキサナール",
        "酢酸エチル",
        "α-フムレン",
        "ビシクロゲルマクレン",
        "β-カリオフィレン",
        "α-ネオクロベン",
        "β-パナシンセン",
        "α-パナシンセン"
      ],
      "literature": {
        "oil": {
          "percent": 0.05,
          "basis": "高麗人参の根（生薬）の精油量の文献値（EMA評価報告書）。果実の値が得られないため根で代用",
          "source": 0
        },
        "composition": [
          {
            "name": "α-フムレン",
            "percent": 13.91,
            "source": null
          },
          {
            "name": "ビシクロゲルマクレン",
            "percent": 13.59,
            "source": null
          },
          {
            "name": "β-カリオフィレン",
            "percent": 8.24,
            "source": null
          },
          {
            "name": "α-ネオクロベン",
            "percent": 7.78,
            "source": null
          },
          {
            "name": "β-パナシンセン",
            "percent": 7.53,
            "source": null
          },
          {
            "name": "α-パナシンセン",
            "percent": 5.14,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "EMA HMPC (2014) Assessment report on Panax ginseng C.A. Meyer, radix (EMA/HMPC/321232/2012)（2024年の改訂版で置き換え済みの版）",
            "url": "https://www.ema.europa.eu/documents/herbal-report/final-assessment-report-panax-ginseng-ca-meyer-radix_en.pdf"
          }
        ],
        "note": "果実の揮発成分には Qu W.-T. et al. 2023（Chinese J Anal Chem 51(1):100208）があるが、出版社サイトのロボット確認で開けず数値を取れなかったため、根の値で代用した（量はEMAの根の文献値、割合は韓国産6年根の生の根を水蒸気蒸留した精油：Kim D.W. et al. 2023, Korean J Food Preserv 30(6):944-959, Table 1、面積%）。この精油の主成分のセスキテルペンは香りへの寄与が小さく、人参らしい土の香りはメトキシピラジン類（塩基性画分、精油の0.55%）によるとされる。ヘキサナールはアルデヒド画分（精油の0.66%）の3.23%にとどまり、酢酸エチル・サポニン類・フラボノイド類は精油に出てこないため null。"
      }
    },
    {
      "name": "セリ",
      "reading": "せり",
      "latin": "Oenanthe javanica",
      "group": "和ボタニカル",
      "part": "葉・茎",
      "aroma": "青い葉、和ハーブ、軽い柑橘、土",
      "role": "和の青い葉物の清涼感を加える。",
      "components": [
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "リモネン",
        "β-カリオフィレン",
        "δ-カジネン",
        "β-ビサボレン",
        "テルピノレン",
        "γ-テルピネン",
        "ファルネセン",
        "α-アモルフェン"
      ],
      "literature": {
        "oil": {
          "percent": 0.2,
          "basis": "韓国全羅南道順天の有機栽培のセリ（ミナリ、2016年8月）を1週間陰干しし、100 gを8時間水蒸気蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "β-カリオフィレン",
            "percent": 20.46,
            "source": 0
          },
          {
            "name": "δ-カジネン",
            "percent": 14.46,
            "source": 0
          },
          {
            "name": "β-ビサボレン",
            "percent": 11.77,
            "source": 0
          },
          {
            "name": "テルピノレン",
            "percent": 7.05,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 6.85,
            "source": 0
          },
          {
            "name": "ファルネセン",
            "percent": 6.21,
            "source": 0
          },
          {
            "name": "α-アモルフェン",
            "percent": 5.38,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 2.79,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Lee E.K., Shin M.C., Jung S.H. (2017) Asian J Beauty Cosmetol 15(3):355-366, Table 2",
            "url": "https://doi.org/10.20402/ajbc.2016.0142"
          }
        ],
        "note": "韓国産の乾燥したセリ1試料の精油。表の Methanol 10.77% は精油を溶かした溶媒なので除いた。生のセリの揮発成分（同時蒸留抽出、Seo & Baek 2005 を Lu et al. 2019, Evid Based Complement Alternat Med 2019:6495819 の Table 3 で確認）はγ-テルピネン21.7%・リモネン8.6%・(E)-カリオフィレン6.1%・p-シメン3.8%とモノテルペンが多く、p-シメンがセリらしい香りの主因とされ、ヘキサナールと(Z)-3-ヘキセノール（0.1%）も出ている。この精油ではヘキサナールと cis-3-ヘキセノールが出ず null。"
      }
    },
    {
      "name": "ピーマン",
      "reading": "ぴーまん",
      "latin": "Capsicum annuum",
      "group": "果実・野菜",
      "part": "果実",
      "aroma": "青いピーマン、草、軽い苦味、野菜感",
      "role": "はっきりしたベジタルな青さを加える。",
      "components": [
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "カプサイシン",
        "フラボノイド類"
      ]
    },
    {
      "name": "トリュフ",
      "reading": "とりゅふ",
      "latin": "Tuber spp.",
      "group": "果実・野菜",
      "part": "子実体",
      "aroma": "土、ニンニク様の硫黄、きのこ",
      "role": "少量で土っぽい硫黄の香りが立つ。ナッツや焙煎の香りと合わせる。",
      "components": [
        "3-オクタノン",
        "イソバレルアルデヒド",
        "1-オクテン-3-オール",
        "2-メチル-1-ブタノール",
        "ジメチルスルフィド",
        "3-オクタノール",
        "1-オクテン-3-オン",
        "オクタナール",
        "ジメチルジスルフィド",
        "ビス(メチルチオ)メタン"
      ],
      "literature": {
        "oil": {
          "percent": 0.001475,
          "min": 0.00117,
          "max": 0.001851,
          "label": "香気成分",
          "basis": "中国産の採りたての生トリュフ3種をピューレにしてSPME-GC-MS・GC-FPD（標準物質の検量線）で定量した51成分の合計。3種の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "3-オクタノン",
            "percent": 18.33,
            "source": 0
          },
          {
            "name": "イソバレルアルデヒド",
            "percent": 16.92,
            "source": 0
          },
          {
            "name": "1-オクテン-3-オール",
            "percent": 15.49,
            "source": 0
          },
          {
            "name": "2-メチル-1-ブタノール",
            "percent": 12.96,
            "source": 0
          },
          {
            "name": "ジメチルスルフィド",
            "percent": 7.92,
            "source": 0
          },
          {
            "name": "3-オクタノール",
            "percent": 6.17,
            "source": 0
          },
          {
            "name": "1-オクテン-3-オン",
            "percent": 4.15,
            "source": 0
          },
          {
            "name": "オクタナール",
            "percent": 3.06,
            "source": 0
          },
          {
            "name": "ジメチルジスルフィド",
            "percent": 2.76,
            "source": 0
          },
          {
            "name": "ビス(メチルチオ)メタン",
            "percent": 0.04,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Feng T. et al. (2019) Molecules 24(18):3305, Table 2（51成分の定量値を種ごとに合計: T1 11701・T2 18514・T3 14034 μg/kg、その平均）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6767217/"
          }
        ],
        "note": "ジンで使う欧州の黒トリュフ（T. melanosporum など）やアルバの白トリュフ（T. magnatum）の定量値は見つけられず、中国産3種の生トリュフの値で代用。白トリュフの特徴成分ビス(メチルチオ)メタンは、この中国産では3.3〜7.9 μg/kg（0.04%）とわずかだが、T. magnatum 13試料では237〜4360 μg/kg（Schlumpberger et al. 2024, J Agric Food Chem 72:10023）と桁違いに多い。3-オクタノン・1-オクテン-3-オールはT2（白系）で特に多く、種によって組成の差が大きい。"
      }
    },
    {
      "name": "椎茸",
      "reading": "しいたけ",
      "latin": "Lentinula edodes",
      "group": "果実・野菜",
      "part": "子実体（乾燥）",
      "aroma": "干し椎茸、旨み、硫黄、きのこ",
      "role": "旨みと硫黄の香り。海藻や焙煎の香りと合わせると、和の土台になる。",
      "components": [
        "二硫化炭素",
        "1,2,4-トリチオラン",
        "1-オクテン-3-オン",
        "レンチオニン",
        "リモネン",
        "1,2,4,5-テトラチアン",
        "3-オクタノン",
        "1-オクテン-3-オール"
      ],
      "literature": {
        "oil": {
          "percent": 0.02066,
          "min": 0.0041,
          "max": 0.02066,
          "label": "香気成分",
          "basis": "市販の生椎茸を50℃の熱風で水分10%未満まで乾燥して粉砕し、SPME-GC-MS（内部標準シクロヘキサノン）で定量。分類ごとの合計を足した値（乾燥品1gあたり）",
          "source": 0
        },
        "composition": [
          {
            "name": "二硫化炭素",
            "percent": 32.09,
            "source": 0
          },
          {
            "name": "1,2,4-トリチオラン",
            "percent": 15.59,
            "source": 0
          },
          {
            "name": "1-オクテン-3-オン",
            "percent": 10.24,
            "source": 0
          },
          {
            "name": "レンチオニン",
            "percent": 8.28,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 3.75,
            "source": 0
          },
          {
            "name": "1,2,4,5-テトラチアン",
            "percent": 3.5,
            "source": 0
          },
          {
            "name": "3-オクタノン",
            "percent": 3.29,
            "source": 0
          },
          {
            "name": "1-オクテン-3-オール",
            "percent": 2.77,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Zhang L. et al. (2021) Foods 10(11):2836, Table 1（HAD 列の分類合計 アルコール18.39＋アルデヒド14.70＋ケトン28.49＋硫黄化合物136.60＋炭化水素8.46 = 206.64 μg/g を計算。min は Chen D. et al. 2021 Foods 10:2991, Table 2 の熱風乾燥品 41.02 μg/g）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8622265/"
          }
        ],
        "note": "熱風乾燥品1試料の値。同じく熱風乾燥の別研究は41.0〜70.2 μg/gで（Chen et al. 2021, Foods 10:2991, Table 2。この表にレンチオニンはない）、こちらを min にした。ジメチルスルフィドは報告されず null（ジメチルジスルフィド2.58・ジメチルトリスルフィド0.26 μg/g）。生・凍結乾燥・自然乾燥では環状硫黄化合物がずっと少なく、1-オクテン-3-オールが主になる（同 Table 1）。"
      }
    },
    {
      "name": "ブナの葉",
      "reading": "ぶなのは",
      "latin": "Fagus crenata",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "森の葉、乾いた木、淡い渋み、落ち葉",
      "role": "落葉樹の森のニュアンスを加える。",
      "components": [
        "ヘキサナール",
        "cis-3-ヘキセノール",
        "タンニン",
        "フラボノイド類",
        "酢酸cis-3-ヘキセニル",
        "α-カジノール",
        "δ-カジネン",
        "γ-ムウロレン",
        "α-ムウロレン",
        "α-クベベン"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null,
          "label": "香気成分"
        },
        "composition": [
          {
            "name": "酢酸cis-3-ヘキセニル",
            "percent": 64.86,
            "source": 0
          },
          {
            "name": "cis-3-ヘキセノール",
            "percent": 14.92,
            "source": 0
          },
          {
            "name": "α-カジノール",
            "percent": 5.97,
            "source": 0
          },
          {
            "name": "δ-カジネン",
            "percent": 5.2,
            "source": 0
          },
          {
            "name": "γ-ムウロレン",
            "percent": 2.88,
            "source": 0
          },
          {
            "name": "α-ムウロレン",
            "percent": 2,
            "source": 0
          },
          {
            "name": "α-クベベン",
            "percent": 1.37,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Hagiwara T. et al. (2021) Ecol Evol 11(18):12445-12452, Table 3（切った葉の列）（10成分のピーク面積の合計に対する割合を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8462143/"
          }
        ],
        "note": "葉に含まれる香気成分の量（精油量・定量値）は見つからず、oil は null。成分は北海道苫小牧のブナ（Fagus crenata）の生きた枝を袋で覆い、葉を半分に切った直後に出た揮発成分（Tenax捕集、GC-MSのピーク面積/g）の相対値で、葉の含有量ではない。切らない葉では cis-3-ヘキセノールは検出されず、酢酸cis-3-ヘキセニル（532）・δ-カジネン（221）・α-カジノール（182）が主。ヨーロッパブナの主要モノテルペンのサビネンは日本のブナでは検出されない（論文）。乾燥葉・落ち葉の値は見つからなかった。ヘキサナールは検出されず、タンニン・フラボノイド類は揮発しない。"
      }
    },
    {
      "name": "コリアンダーリーフ",
      "reading": "こりあんだーりーふ",
      "latin": "Coriandrum sativum",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "パクチー、青く脂っぽいアルデヒド",
      "role": "種子（コリアンダーシード）とは別物の青い香り。アジアやグリーンのジンに。",
      "components": [
        "trans-2-デセナール",
        "trans-2-ドデセナール",
        "デカナール",
        "リナロール",
        "trans-2-ウンデセナール",
        "ドデカナール",
        "オクタナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.158,
          "min": 0.062,
          "max": 0.446,
          "basis": "19か国48系統を韓国の同じ圃場で育て、同じ生育段階で採った生の地上部（葉・茎）を水蒸気蒸留90分。48系統の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "trans-2-デセナール",
            "percent": 44.56,
            "source": 0
          },
          {
            "name": "trans-2-ドデセナール",
            "percent": 13.47,
            "source": 0
          },
          {
            "name": "デカナール",
            "percent": 11.75,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 8.76,
            "source": 0
          },
          {
            "name": "trans-2-ウンデセナール",
            "percent": 3.3,
            "source": 0
          },
          {
            "name": "ドデカナール",
            "percent": 1.46,
            "source": 0
          },
          {
            "name": "オクタナール",
            "percent": 0.57,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Kim M. et al. (2026) Molecules 31(11):1950, 本文 3.4節と Table 7",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13257553/"
          }
        ],
        "note": "収油率・組成とも韓国で育てた48系統の平均で、44系統が(E)-2-デセナール型、4系統がリナロール型（リナロール最大61%）。葉だけのパキスタンの4品種は生葉0.027〜0.042%（w/w）と低く、デカナール14.4〜18.8%・(E)-2-デセナール15.7〜25.1%・(E)-2-ドデセナール12.6〜13.7%・(E)-2-テトラデセナール9.1〜12.9%（Kumar et al. 2022, Front Plant Sci 13:820644, Table 2・3）。"
      }
    },
    {
      "name": "ブチュー",
      "reading": "ぶちゅー",
      "latin": "Agathosma betulina",
      "group": "ハーブ・グリーン",
      "part": "葉",
      "aroma": "カシスの芽、ミント、薬草",
      "role": "南アフリカの薬草。カシスとミントの間の、独特な青さを足す。",
      "components": [
        "イソメントン",
        "リモネン",
        "ジオスフェノール",
        "ψ-ジオスフェノール",
        "メントン",
        "プレゴン",
        "イソプレゴン",
        "8-メルカプト-p-メンタン-3-オン",
        "β-ミルセン"
      ],
      "literature": {
        "oil": {
          "percent": null,
          "basis": "量のわかる資料は見つからず、成分の割合だけ文献の値",
          "source": null
        },
        "composition": [
          {
            "name": "イソメントン",
            "percent": 24.4,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 18.6,
            "source": 0
          },
          {
            "name": "ジオスフェノール",
            "percent": 13.6,
            "source": 0
          },
          {
            "name": "ψ-ジオスフェノール",
            "percent": 11.57,
            "source": 0
          },
          {
            "name": "メントン",
            "percent": 9.26,
            "source": 0
          },
          {
            "name": "プレゴン",
            "percent": 5.03,
            "source": 0
          },
          {
            "name": "イソプレゴン",
            "percent": 3.58,
            "source": 0
          },
          {
            "name": "8-メルカプト-p-メンタン-3-オン",
            "percent": 1.9,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 1.78,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "EFSA FEEDAP Panel (2022) EFSA J 20(3):e07160「buchu leaf oil」, Table 2（市販油6ロットの平均と範囲、% GC area。列: 成分 | CAS | FLAVIS | 規格 | 平均 | 範囲）（p-menthan-3-one = メントン）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8902667/"
          }
        ],
        "note": "組成は市販のA. betulina葉油（乾燥葉の水蒸気蒸留）6ロットの平均で、他に1,8-シネオール1.68%・α-ピネン1.14%・サビネン1.13%。精油の収率は、EFSAの意見書にも総説（Brendler et al. 2022, Front Pharmacol 13:813142）にも書かれておらず、収率を載せる一次資料（Collins et al. 1996・Posthumus et al. 1996 J Essent Oil Res 8、Kaiser et al. 1975 J Agric Food Chem 23:943 など）は開けなかったため null。A. crenulata はプレゴン31.6〜73.2%で別物（Collins et al. 1996 の要旨）なので、ジンでふつう使うA. betulinaの値を選んだ。"
      }
    },
    {
      "name": "ベア大麦",
      "reading": "べあおおむぎ",
      "latin": "Hordeum vulgare",
      "group": "ナッツ・焙煎",
      "part": "穀粒",
      "aroma": "麦、ビスケット、軽いロースト、穀物の甘み",
      "role": "穀物由来の香ばしさと丸みを加える。",
      "components": [
        "ピラジン類",
        "フルフラール",
        "マルトール",
        "2-アセチル-1-ピロリン",
        "5-メチルフルフラール",
        "2-アセチルフラン",
        "DDMP（ジヒドロマルトール）",
        "フラネオール",
        "4-シクロペンテン-1,3-ジオン",
        "2-アセチルピロール"
      ],
      "literature": {
        "oil": {
          "percent": 0.001994,
          "label": "香気成分",
          "basis": "中国の市販の基本麦芽を、回転する密閉容器で加熱して0.8 MPaで急減圧した特殊麦芽（カラメル・ロースト様の香り）。HS-SPME-GC-MSでo-ジクロロベンゼンを内部標準に半定量（mg/kg）した、酸を除く全成分の合計",
          "source": 0
        },
        "composition": [
          {
            "name": "フルフラール",
            "percent": 33.93,
            "source": 0
          },
          {
            "name": "ピラジン類",
            "percent": 29.35,
            "source": 0
          },
          {
            "name": "5-メチルフルフラール",
            "percent": 11.42,
            "source": 0
          },
          {
            "name": "2-アセチルフラン",
            "percent": 7.75,
            "source": 0
          },
          {
            "name": "DDMP（ジヒドロマルトール）",
            "percent": 4.16,
            "source": 0
          },
          {
            "name": "フラネオール",
            "percent": 2.02,
            "source": 0
          },
          {
            "name": "4-シクロペンテン-1,3-ジオン",
            "percent": 1.85,
            "source": 0
          },
          {
            "name": "2-アセチルピロール",
            "percent": 1.55,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Pan Q. et al. (2026) Foods 15(6):1113, Table 2（EM列の酸以外の値の合計 19.940 mg/kg を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13026068/"
          }
        ],
        "note": "ベア大麦（オークニー諸島などの在来の六条大麦）そのもの、また一般的なドラム焙煎の大麦・麦芽の定量値は見つからず、加熱加圧で作った特殊麦芽の値で代用した。加熱前の基本麦芽は酸を除く合計1.44 mg/kg（ヘキサナール1.036 mg/kgが主）で、焙煎の程度で1桁以上変わる。マルトールと2-アセチル-1-ピロリンはこの分析で検出されず（似たピラノンのDDMPはある）null。"
      }
    },
    {
      "name": "マスティック",
      "reading": "ますてぃっく",
      "latin": "Pistacia lentiscus",
      "group": "骨格・樹脂",
      "part": "樹脂",
      "aroma": "マスティック樹脂、松脂、淡い柑橘、清涼感",
      "role": "地中海系の透明な樹脂感を加える。",
      "components": [
        "α-ピネン",
        "β-ミルセン",
        "リモネン",
        "β-カリオフィレン",
        "β-ピネン",
        "カリオフィレンオキシド",
        "ペリレン",
        "カンフェン",
        "α-フムレン"
      ],
      "literature": {
        "oil": {
          "percent": 2.14,
          "min": 2,
          "max": 2.25,
          "basis": "トルコ・イズミル県（チェシメ、モルドアン）の野生2本・栽培1本のマスティック樹脂（風乾）を粗く砕き、水蒸留3時間（クレベンジャー）。3試料の平均を計算",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 59.63,
            "source": 0
          },
          {
            "name": "β-ミルセン",
            "percent": 13.73,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 4.3,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 3.83,
            "source": 0
          },
          {
            "name": "カリオフィレンオキシド",
            "percent": 2.37,
            "source": 0
          },
          {
            "name": "リモネン",
            "percent": 2.13,
            "source": 0
          },
          {
            "name": "ペリレン",
            "percent": 1.87,
            "source": 0
          },
          {
            "name": "カンフェン",
            "percent": 0.9,
            "source": 0
          },
          {
            "name": "α-フムレン",
            "percent": 0.7,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Tabanca N. et al. (2020) Molecules 25(9):2136, Results（3試料の平均を計算）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7248992/"
          }
        ],
        "note": "マスティックの主産地はギリシャ・キオス島だが、試料は対岸のトルコ・チェシメ周辺の同じ var. chia。野生木2試料はミルセン約20%、栽培木はα-ピネン70.8%・ミルセン2.5%と差が大きく、キオス島の生産者組合（CMGGA）の精油はα-ピネン59.2〜87.1%・ミルセン4.7〜27.6%（同論文の表2の文献値）。欧州薬局方の規格は精油10 mL/kg（無水物）以上（EMA/HMPC/46756/2015）で、この値と合う。ペリレンはフラン環をもつモノテルペンで、表でメントフランと同じ「エーテル」に入れた。"
      }
    },
    {
      "name": "モミ",
      "reading": "もみ",
      "latin": "Abies spp.",
      "group": "骨格・樹脂",
      "part": "針葉・枝",
      "aroma": "モミの針葉、森、樹脂、甘い松",
      "role": "トウヒより甘く柔らかい針葉樹の香り。森や冬のジンの骨格に。",
      "components": [
        "α-ピネン",
        "カンフェン",
        "酢酸ボルニル",
        "リモネン",
        "β-ピネン",
        "β-フェランドレン",
        "β-ミルセン",
        "サンテン",
        "トリシクレン"
      ],
      "literature": {
        "oil": {
          "percent": 2.1,
          "min": 0.9,
          "max": 8,
          "basis": "日本のモミ属の夏の葉の乾葉100 gあたりの精油含量（林野庁の主な針葉樹の葉油含量の表）：モミ0.9・シラベ2.1・トドマツ8.0 mL",
          "source": 0
        },
        "composition": [
          {
            "name": "α-ピネン",
            "percent": 25.46,
            "source": 1
          },
          {
            "name": "カンフェン",
            "percent": 22.7,
            "source": 1
          },
          {
            "name": "酢酸ボルニル",
            "percent": 13.26,
            "source": 1
          },
          {
            "name": "リモネン",
            "percent": 10.44,
            "source": 1
          },
          {
            "name": "β-ピネン",
            "percent": 10.42,
            "source": 1
          },
          {
            "name": "β-フェランドレン",
            "percent": 7.71,
            "source": 1
          },
          {
            "name": "β-ミルセン",
            "percent": 3.94,
            "source": 1
          },
          {
            "name": "サンテン",
            "percent": 1.89,
            "source": 1
          },
          {
            "name": "トリシクレン",
            "percent": 1.7,
            "source": 1
          }
        ],
        "sources": [
          {
            "title": "林野庁 (2018) 平成29年度 日本の林産物を活用した香りビジネス展開に関する基礎調査業務報告書, 表3（モミ属3種の幅）（代表値はモミ属3種の中央値2.1）",
            "url": "https://nittokusin.jp/nittokusin/wp-content/uploads/2018/08/8057ab07ffd6f505f04eee94108fa9f4.pdf"
          },
          {
            "title": "Satou T. et al. (2009) Nat Prod Commun 4(6):845-848, Table 1（北海道下川町のトドマツ生葉の水蒸気蒸留精油、2004年6月〜2008年5月の8時期の平均を計算）",
            "url": "https://journals.sagepub.com/doi/10.1177/1934578X0900400621"
          }
        ],
        "note": "在庫カタログのモミはトドマツ・ウラジロモミ・欧州のモミなど種が混ざるため、量は林野庁の表のモミ属3種の幅（計算には中央値4.45 mL/100 g）とし、成分は国産モミ精油（北海道モミ）の産地である北海道下川町のトドマツ生葉の精油（8時期の平均）。実際の蒸留の収率は含量よりずっと低く、下川町の生葉50 kg・2時間では生葉あたり1% v/w（同論文）、ニセコ産の枝葉では生で5.1 g/kg・乾燥で2.4 g/kg（乾燥重量あたり、1.5時間、Kawai ら 2022 Processes 10:2534）。ニセコ産の組成は酢酸ボルニル27.65%・ボルネオール19.45%・β-フェランドレン10.56%・カンフェン9.71%・α-ピネン7.73%と下川町産と違い、下川町産でも12月は酢酸ボルニル26.6%・α-ピネン17.5%と季節差が大きい。ウラジロモミ・ヨーロッパモミの値は探したが見つからなかった。"
      }
    },
    {
      "name": "桑の実",
      "reading": "くわのみ",
      "latin": "Morus alba",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "桑の実、赤い果実、軽い酸、柔らかな甘さ",
      "role": "ベリー寄りの果実感と穏やかな酸を加える。",
      "components": [
        "アントシアニン",
        "フラネオール",
        "リンゴ酸",
        "ヘキサナール"
      ]
    },
    {
      "name": "メギ",
      "reading": "めぎ",
      "latin": "Berberis spp.",
      "group": "果実・ベリー",
      "part": "果実・樹皮",
      "aroma": "赤い酸、渋み、乾いた果皮、薬草",
      "role": "酸味とビターな渋みを加える。",
      "components": [
        "タンニン",
        "安息香酸",
        "フラボノイド類",
        "リンゴ酸"
      ]
    },
    {
      "name": "バナナ",
      "reading": "ばなな",
      "latin": "Musa spp.",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "バナナ、熟した果実、甘いエステル、柔らかさ",
      "role": "トロピカルで丸い甘い果実感を加える。",
      "components": [
        "酢酸イソアミル",
        "フラネオール",
        "ヘキサナール",
        "酢酸エチル"
      ]
    },
    {
      "name": "ぶどう",
      "reading": "ぶどう",
      "latin": "Vitis vinifera / V. labrusca",
      "group": "果実・ベリー",
      "part": "果実・果皮",
      "aroma": "ぶどうの皮、甘酸っぱい果実、青み",
      "role": "果皮や搾りかすで、ワインのような果実の香りを足す。",
      "components": [
        "2-フェニルエタノール",
        "アセトイン",
        "cis-3-ヘキセナール",
        "リナロール",
        "trans-2-ヘキセナール",
        "バニリン",
        "フラネオール",
        "(E,Z)-2,4-デカジエン酸エチル",
        "酪酸エチル",
        "ヘキサナール",
        "ゲラニオール",
        "β-ダマセノン",
        "アントラニル酸メチル"
      ],
      "literature": {
        "oil": {
          "percent": 0.000379,
          "min": 0.0000861,
          "max": 0.000625,
          "label": "香気成分",
          "basis": "農研機構で育てた生食用38品種の果実全体（2017〜2019年）をSAFEで抽出し、内部標準3-ヘプタノールで定量。マスカット系・甲州など中性・デラウェア/MBA・巨峰系のクラスター1〜5（89試料）の加重平均。米国系（コンコード等）とマスカダインは除いた",
          "source": 0
        },
        "composition": [
          {
            "name": "2-フェニルエタノール",
            "percent": 9.86,
            "source": 0
          },
          {
            "name": "アセトイン",
            "percent": 5.98,
            "source": 0
          },
          {
            "name": "cis-3-ヘキセナール",
            "percent": 3.98,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 2.93,
            "source": 0
          },
          {
            "name": "trans-2-ヘキセナール",
            "percent": 2.77,
            "source": 0
          },
          {
            "name": "バニリン",
            "percent": 1.81,
            "source": 0
          },
          {
            "name": "フラネオール",
            "percent": 1.76,
            "source": 0
          },
          {
            "name": "(E,Z)-2,4-デカジエン酸エチル",
            "percent": 1.69,
            "source": 0
          },
          {
            "name": "酪酸エチル",
            "percent": 1.38,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 0.68,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 0.23,
            "source": 0
          },
          {
            "name": "β-ダマセノン",
            "percent": 0.04,
            "source": 0
          },
          {
            "name": "アントラニル酸メチル",
            "percent": 0,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Moriyama K. et al. (2024) Hortic Res 11(4):uhae048, Table 3 と Fig. 1（クラスター1〜5の合計を試料数で加重平均 3785 μg/kg を計算。範囲はクラスター2の861〜クラスター3の6250 μg/kg）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11031413/"
          }
        ],
        "note": "日本の生食用ぶどうの果実全体の値で、系統差が大きい（マスカット系はリナロール8.6%、巨峰系は2-フェニルエタノール・アセトイン・エチルエステルが主、甲州を含む中性系は総量861 μg/kgと少ない）。合計の約28%を占めるファルネセン類・カラメネンなどのセスキテルペンは1〜数試料の極端な値（α-ファルネセン最大47,100 μg/kg）によるもので、香りも弱いため other_major から除いた（テルペンジオール・安息香酸も同様）。ジンで多い果皮や搾りかすの定量値は見つからず、果皮は果肉よりテルペンが多い（Wu et al. 2016, Sci Rep 6:31116）。"
      }
    },
    {
      "name": "アプリコット",
      "reading": "あぷりこっと",
      "latin": "Prunus armeniaca",
      "group": "果実・ベリー",
      "part": "果実",
      "aroma": "杏、甘い果実、桃に近いラクトン",
      "role": "桃より酸のある、熟した杏の甘い果実の香り。",
      "components": [
        "リナロール",
        "α-テルピネオール",
        "ゲラニオール",
        "オシメノール",
        "trans-2-ヘキセナール",
        "trans-2-ペンテナール",
        "酢酸エチル",
        "(E,E)-2,4-ヘプタジエナール",
        "イオノン類",
        "ベンズアルデヒド",
        "ヘキサナール"
      ],
      "literature": {
        "oil": {
          "percent": 0.0000716,
          "min": 0.00000544,
          "max": 0.0001164,
          "label": "香気成分",
          "basis": "中国・新疆の在来4品種の完熟生果をSPME-GC-MS/MS（内部標準2-オクタノール）で定量した63成分の合計。4品種の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 38.02,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 30.32,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 4.51,
            "source": 0
          },
          {
            "name": "オシメノール",
            "percent": 2.32,
            "source": 0
          },
          {
            "name": "trans-2-ヘキセナール",
            "percent": 2.22,
            "source": 0
          },
          {
            "name": "trans-2-ペンテナール",
            "percent": 1.98,
            "source": 0
          },
          {
            "name": "酢酸エチル",
            "percent": 1.27,
            "source": 0
          },
          {
            "name": "(E,E)-2,4-ヘプタジエナール",
            "percent": 1.21,
            "source": 0
          },
          {
            "name": "イオノン類",
            "percent": 0.78,
            "source": 0
          },
          {
            "name": "ベンズアルデヒド",
            "percent": 0.26,
            "source": 0
          },
          {
            "name": "ヘキサナール",
            "percent": 0.18,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Zhao C. et al. (2022) Foods 11(15):2297, Supplementary Table S1（63成分を品種ごとに合計: DBY 747.4・LPH 900.2・YOU 1163.7・XB 54.4 μg/kg、その平均）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9368480/"
          }
        ],
        "note": "新疆の在来品種（リナロール・α-テルピネオールが多いタイプ）の値で、XBは総量54 μg/kgと極端に少ない。γ-デカラクトンは検出されず null（δ-デカラクトンは0.4〜2.7 μg/kg）。ルーマニアの11品種ではγ-デカラクトンが揮発画分の0.29〜1.20%（相対%、Pintea et al. 2020, Antioxidants 9:562, Table 4）。欧州品種の安定同位体希釈法による定量（Greger & Schieberle 2007, J Agric Food Chem 55:5221）は開けなかった。"
      }
    },
    {
      "name": "朴葉",
      "reading": "ほおば",
      "latin": "Magnolia obovata",
      "group": "和ボタニカル",
      "part": "葉",
      "aroma": "大きな葉、木蓮、味噌を思わせる甘い葉、木質",
      "role": "和の葉物らしい大きなウッディ感を加える。",
      "components": [
        "リナロール",
        "1,8-シネオール",
        "α-ピネン",
        "ゲラニオール",
        "β-カリオフィレン",
        "α-フムレン",
        "ボルネオール",
        "グロブロール",
        "ビシクロゲルマクレン",
        "α-カジノール"
      ],
      "literature": {
        "oil": {
          "percent": 0.05,
          "basis": "京都府産のホオノキの生葉（2010年5月）100 gを刻み、リッケンス・ニッカーソン装置（ジエチルエーテル）で3時間水蒸留",
          "source": 0
        },
        "composition": [
          {
            "name": "β-カリオフィレン",
            "percent": 23.7,
            "source": 0
          },
          {
            "name": "α-フムレン",
            "percent": 11.6,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 9.1,
            "source": 0
          },
          {
            "name": "ボルネオール",
            "percent": 7,
            "source": 0
          },
          {
            "name": "グロブロール",
            "percent": 5.4,
            "source": 0
          },
          {
            "name": "ビシクロゲルマクレン",
            "percent": 4.4,
            "source": 0
          },
          {
            "name": "α-カジノール",
            "percent": 3,
            "source": 0
          },
          {
            "name": "リナロール",
            "percent": 1.3,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 1.2,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 0.1,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Miyazawa M. et al. (2015) J Oleo Sci 64(9):999-1007",
            "url": "https://www.jstage.jst.go.jp/article/jos/64/9/64_ess15114/_article/-char/ja/"
          }
        ],
        "note": "京都府産の生葉1試料（5月）の水蒸留精油。溶媒抽出（SAFE）ではβ-カリオフィレン48.9%・α-フムレン15.7%とセスキテルペンがさらに多く、ゲラニオールは1.3%に下がる（加熱でアルコールが増えた可能性）。朴葉味噌などで使う乾燥した朴葉の値は見つからなかった。香りへの寄与はリナロール・ゲラニオール（花様）、β-カリオフィレン・α-フムレン（木質）、1,8-シネオールが大きいとされる。"
      }
    },
    {
      "name": "茗荷",
      "reading": "みょうが",
      "latin": "Zingiber mioga",
      "group": "和ボタニカル",
      "part": "花穂・茎",
      "aroma": "茗荷、青い生姜、清涼感、淡い花",
      "role": "和の生姜系の青く爽やかな香りを加える。",
      "components": [
        "ジンギベレン",
        "β-カリオフィレン",
        "リナロール",
        "ヘキサナール",
        "オイデスマ-4(14),11-ジエン",
        "β-エレメン",
        "ゲルマクレンB",
        "β-オイデスモール",
        "サビネン"
      ],
      "literature": {
        "oil": {
          "percent": 0.0098,
          "basis": "9〜10月に採った生のミョウガの花穂100 kgをエーテルに6回浸し、抽出物を減圧（30 mmHg）で水蒸気蒸留して得た精油9.8 g（生の重さあたりに換算）",
          "source": 0
        },
        "composition": [
          {
            "name": "オイデスマ-4(14),11-ジエン",
            "percent": 28.8,
            "source": null
          },
          {
            "name": "β-エレメン",
            "percent": 26.5,
            "source": null
          },
          {
            "name": "ゲルマクレンB",
            "percent": 9.8,
            "source": null
          },
          {
            "name": "β-オイデスモール",
            "percent": 4,
            "source": null
          },
          {
            "name": "サビネン",
            "percent": 3.5,
            "source": null
          }
        ],
        "sources": [
          {
            "title": "楠本正一・大須賀昭夫・小竹無二雄 (1966) 日本化學雜誌 87(8):887「ミョウガの香気成分」（9.8 g ÷ 100 kg を％に換算）",
            "url": "https://www.jstage.jst.go.jp/article/nikkashi1948/87/8/87_8_887/_article/-char/ja/"
          }
        ],
        "note": "組成は高知県須崎市産の生の花穂の水蒸気蒸留精油で、論文は3%以上の成分しか載せておらず（ほかに cycloundecatriene 4.0%、同定があいまいなため外した）、表の4成分は null。1966年の分析では精油の90%以上がモノテルペン炭化水素で主成分はβ-フェランドレン（ほかにα-・β-ピネン）とされ、分析によって大きく食い違う。ミョウガ特有の香りには2-イソプロピル-3-メトキシピラジンなどのメトキシピラジン類が報告され（阿部 2019, 日本調理科学会誌 52:1）、辛味のミョウガジアールは揮発しにくい。"
      }
    },
    {
      "name": "ニッキ",
      "reading": "にっき",
      "latin": "Cinnamomum sieboldii",
      "group": "和ボタニカル",
      "part": "葉",
      "aroma": "ニッキ飴のような甘いシナモン、スパイシー",
      "role": "日本の肉桂。シナモンより柔らかく甘い、和のスパイス感を出す。",
      "components": [
        "リナロール",
        "シンナムアルデヒド",
        "シトラール",
        "1,8-シネオール",
        "リナロールオキシド類",
        "ゲラニオール",
        "α-コパエン",
        "酢酸ゲラニル",
        "オイゲノール",
        "スパツレノール"
      ],
      "literature": {
        "oil": {
          "percent": 0.56,
          "min": 0.38,
          "max": 0.66,
          "basis": "高知・山口・対馬で栽培されたニッケイの半乾燥の枝葉（葉が主、枝18〜33%）を水蒸気蒸留。3試料の平均",
          "source": 0
        },
        "composition": [
          {
            "name": "リナロール",
            "percent": 27.7,
            "source": 0
          },
          {
            "name": "シンナムアルデヒド",
            "percent": 19.62,
            "source": 0
          },
          {
            "name": "シトラール",
            "percent": 12.97,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 4.5,
            "source": 0
          },
          {
            "name": "リナロールオキシド類",
            "percent": 3.85,
            "source": 0
          },
          {
            "name": "ゲラニオール",
            "percent": 2.27,
            "source": 0
          },
          {
            "name": "α-コパエン",
            "percent": 2.22,
            "source": 0
          },
          {
            "name": "酢酸ゲラニル",
            "percent": 2.12,
            "source": 0
          },
          {
            "name": "オイゲノール",
            "percent": 1.62,
            "source": 0
          },
          {
            "name": "スパツレノール",
            "percent": 1.55,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Fujita S. (1986) Yakugaku Zasshi 106(1):17-21「各地産植物精油に関する研究（第47報）日本産ニッケイの精油成分」, Table I（スキャンPDFを画像で読んだ値。列: I Leaves | I Branchlet | I Rootlet | II Foliage | II Rootlet | III Foliage | IV Foliage | V Foliage）（試料II〜IVの収油率の平均を計算）",
            "url": "https://www.jstage.jst.go.jp/article/yakushi1947/106/1/106_1_17/_pdf"
          }
        ],
        "note": "兵庫・高知・山口・対馬の栽培木4本の葉・枝葉の精油（1986年の分析）で、葉はリナロール・シンナムアルデヒド・シトラールが主（シトラールはゲラニアール5.5〜11.9%＋ネラール2.9〜5.8%）。生葉（試料I）の収油率は0.16%、根皮（細根）はシンナムアルデヒド69.1〜81.0%で葉とは大きく違う。八丈島の試料Vはメチルオイゲノール24.2%の別系統として除き、沖縄のC. okinawense（鹿児島の「けせん」）の葉の精油の資料は見つからなかった。"
      }
    },
    {
      "name": "月桃",
      "reading": "げっとう",
      "latin": "Alpinia zerumbet",
      "group": "和ボタニカル",
      "part": "葉",
      "aroma": "爽やかでスパイシー、樟脳、ショウガ科の青さ",
      "role": "沖縄のショウガ科の葉。清涼感とスパイスで、南の和ボタニカルに。",
      "components": [
        "テルピネン-4-オール",
        "1,8-シネオール",
        "γ-テルピネン",
        "p-シメン",
        "サビネン",
        "β-ピネン",
        "α-ツジェン",
        "β-カリオフィレン",
        "α-テルピネン",
        "α-ピネン",
        "カリオフィレンオキシド",
        "α-テルピネオール"
      ],
      "literature": {
        "oil": {
          "percent": 0.4,
          "basis": "エジプト（ギザの植物園）で8月に採った生葉を水蒸留5時間（Clevenger）",
          "source": 0
        },
        "composition": [
          {
            "name": "テルピネン-4-オール",
            "percent": 24.72,
            "source": 0
          },
          {
            "name": "1,8-シネオール",
            "percent": 19.64,
            "source": 0
          },
          {
            "name": "γ-テルピネン",
            "percent": 13.98,
            "source": 0
          },
          {
            "name": "p-シメン",
            "percent": 7.8,
            "source": 0
          },
          {
            "name": "サビネン",
            "percent": 6.54,
            "source": 0
          },
          {
            "name": "β-ピネン",
            "percent": 4.05,
            "source": 0
          },
          {
            "name": "α-ツジェン",
            "percent": 3.9,
            "source": 0
          },
          {
            "name": "β-カリオフィレン",
            "percent": 2.55,
            "source": 0
          },
          {
            "name": "α-テルピネン",
            "percent": 2.44,
            "source": 0
          },
          {
            "name": "α-ピネン",
            "percent": 1.96,
            "source": 0
          },
          {
            "name": "カリオフィレンオキシド",
            "percent": 1.87,
            "source": 0
          },
          {
            "name": "α-テルピネオール",
            "percent": 1.75,
            "source": 0
          }
        ],
        "sources": [
          {
            "title": "Shahat E. et al. (2026) Sci Rep 16:15209（本文 3章）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13179332/"
          }
        ],
        "note": "エジプト栽培の生葉1試料の値。沖縄の大輪月桃（var. excelsa）の生葉の精油もγ-テルピネン14.5%、1,8-シネオール13.8%、p-シメン13.5%、サビネン12.5%、テルピネン-4-オール11.9%と近い組成（Tu P.T.B. & Tawata S. 2015, Molecules 20:16723, Table 1。同じ論文の島月桃は1,8-シネオール37.8%・リナロール17.1%で大きく違う）。カンファーは葉の精油から検出されず（根茎0.16%のみ）null。ブラジルの葉は0.30%（乾物あたり、テルピネン-4-オール55.7%、Jezler et al. 2013, Ciênc Rural 43:1811）。"
      }
    }
  ],
  "families": {
    "ジュニパーベリー": "ヒノキ科",
    "コリアンダーシード": "セリ科",
    "アンジェリカルート": "セリ科",
    "アンジェリカシード": "セリ科",
    "オリスルート": "アヤメ科",
    "リコリス": "マメ科",
    "レモンピール": "ミカン科",
    "オレンジピール": "ミカン科",
    "グレープフルーツピール": "ミカン科",
    "ライムピール": "ミカン科",
    "ベルガモットピール": "ミカン科",
    "柚子": "ミカン科",
    "すだち": "ミカン科",
    "かぼす": "ミカン科",
    "カルダモン": "ショウガ科",
    "シナモン": "クスノキ科",
    "カシア": "クスノキ科",
    "クローブ": "フトモモ科",
    "ナツメグ": "ニクズク科",
    "メース": "ニクズク科",
    "アニスシード": "セリ科",
    "スターアニス": "マツブサ科",
    "フェンネルシード": "セリ科",
    "キャラウェイシード": "セリ科",
    "クミン": "セリ科",
    "クベブペッパー": "コショウ科",
    "ブラックペッパー": "コショウ科",
    "ピンクペッパー": "ウルシ科",
    "山椒": "ミカン科",
    "花椒": "ミカン科",
    "グレインズオブパラダイス": "ショウガ科",
    "ジンジャー": "ショウガ科",
    "ターメリック": "ショウガ科",
    "ローズマリー": "シソ科",
    "タイム": "シソ科",
    "セージ": "シソ科",
    "バジル": "シソ科",
    "ミント": "シソ科",
    "レモンバーム": "シソ科",
    "レモンバーベナ": "クマツヅラ科",
    "ローレル": "クスノキ科",
    "ディルシード": "セリ科",
    "ラベンダー": "シソ科",
    "ローズ": "バラ科",
    "エルダーフラワー": "レンプクソウ科",
    "カモミール": "キク科",
    "ハイビスカス": "アオイ科",
    "桜花": "バラ科",
    "桜葉": "バラ科",
    "金木犀": "モクセイ科",
    "玉露": "ツバキ科",
    "煎茶": "ツバキ科",
    "抹茶": "ツバキ科",
    "赤紫蘇": "シソ科",
    "青紫蘇": "シソ科",
    "笹の葉": "イネ科",
    "木の芽": "ミカン科",
    "赤松": "マツ科",
    "ヒノキ": "ヒノキ科",
    "クロモジ": "クスノキ科",
    "昆布": "コンブ科",
    "海藻": "海藻類",
    "きゅうり": "ウリ科",
    "オリーブ": "モクセイ科",
    "アーモンド": "バラ科",
    "カカオニブ": "アオイ科",
    "コーヒー豆": "アカネ科",
    "バニラ": "ラン科",
    "ホップ": "アサ科",
    "ルイボス": "マメ科",
    "スローベリー": "バラ科",
    "クランベリー": "ツツジ科",
    "ブラックベリー": "バラ科",
    "ラズベリー": "バラ科",
    "りんご": "バラ科",
    "梨": "バラ科",
    "ぶどう花": "ブドウ科",
    "サルサパリラ": "サルトリイバラ科",
    "バードック": "キク科",
    "ダンデライオンルート": "キク科",
    "カラムスルート": "ショウブ科",
    "トンカ豆": "マメ科",
    "サフラン": "アヤメ科",
    "レモングラス": "イネ科",
    "ローズヒップ": "バラ科",
    "オールスパイス": "フトモモ科",
    "紅茶": "ツバキ科",
    "ブルーベリー": "ツツジ科",
    "ガランガル": "ショウガ科",
    "ビルベリー": "ツツジ科",
    "エルダーベリー": "レンプクソウ科",
    "チコリルート": "キク科",
    "リンゴンベリー": "ツツジ科",
    "カフィアライムリーフ": "ミカン科",
    "ハマナス": "バラ科",
    "ヘザー": "ツツジ科",
    "メドウスイート": "バラ科",
    "ユーカリ": "フトモモ科",
    "シーバックソーン": "グミ科",
    "ジャスミン": "モクセイ科",
    "レモンマートル": "フトモモ科",
    "ローワンベリー": "バラ科",
    "梅": "バラ科",
    "セイボリー": "シソ科",
    "バタフライピー": "マメ科",
    "大和当帰": "セリ科",
    "ニガヨモギ": "キク科",
    "パンダンリーフ": "タコノキ科",
    "ホーリーバジル": "シソ科",
    "ルバーブ": "タデ科",
    "ローズゼラニウム": "フウロソウ科",
    "大和橘": "ミカン科",
    "苺": "バラ科",
    "杉": "ヒノキ科",
    "ヒバ": "ヒノキ科",
    "ヨモギ": "キク科",
    "海苔": "ウシケノリ科",
    "金柑": "ミカン科",
    "唐辛子": "ナス科",
    "仏手柑": "ミカン科",
    "蜂蜜": "ミツバチ由来",
    "白朮": "キク科",
    "ラベージ": "セリ科",
    "根セロリ": "セリ科",
    "パセリ根": "セリ科",
    "ゲンチアナ": "リンドウ科",
    "甘夏": "ミカン科",
    "ブラッドオレンジ": "ミカン科",
    "オレンジフラワー": "ミカン科",
    "パッションフルーツ": "トケイソウ科",
    "マンゴー": "ウルシ科",
    "レーズン": "ブドウ科",
    "カカオハスク": "アオイ科",
    "ティムールペッパー": "ミカン科",
    "ネトル": "イラクサ科",
    "ヤロウ": "キク科",
    "マジョラム": "シソ科",
    "椿の実": "ツバキ科",
    "椿茶": "ツバキ科",
    "伽羅": "ジンチョウゲ科",
    "アボカドシード": "クスノキ科",
    "チェリー": "バラ科",
    "ココナッツ": "ヤシ科",
    "スミレ": "スミレ科",
    "カシス": "スグリ科",
    "プラム": "バラ科",
    "リンデン": "アオイ科",
    "ロディオラロゼア": "ベンケイソウ科",
    "桃": "バラ科",
    "白樺の葉": "カバノキ科",
    "シーソルト": "海塩",
    "トマト": "ナス科",
    "パイナップル": "パイナップル科",
    "バオバブ": "アオイ科",
    "ハスカップ": "スイカズラ科",
    "ハニーブッシュ": "マメ科",
    "ポピー": "ケシ科",
    "マーガオ": "クスノキ科",
    "わさび": "アブラナ科",
    "桑の葉": "クワ科",
    "胡麻": "ゴマ科",
    "スイートシシリー": "セリ科",
    "マックマット": "ミカン科",
    "エゾノカワラマツバ": "アカネ科",
    "桜島小みかん": "ミカン科",
    "松の芽": "マツ科",
    "ペッパーベリー": "シキミモドキ科",
    "ゴジベリー": "ナス科",
    "レッドペッパー": "ナス科",
    "マスカット": "ブドウ科",
    "クロウベリー": "ツツジ科",
    "タラゴン": "キク科",
    "芳樟": "クスノキ科",
    "ほうじ茶": "ツバキ科",
    "トウヒ": "マツ科",
    "八朔": "ミカン科",
    "ライチ": "ムクロジ科",
    "ビーツ": "ヒユ科",
    "ヘーゼルナッツ": "カバノキ科",
    "パチュリ": "シソ科",
    "ダミアナ": "トケイソウ科",
    "ハリエニシダ": "マメ科",
    "ベチバー": "イネ科",
    "イチジク": "クワ科",
    "オレガノ": "シソ科",
    "ボグマートル": "ヤマモモ科",
    "クローバー": "マメ科",
    "タンポポの花": "キク科",
    "サンザシ": "バラ科",
    "スイートウッドラフ": "アカネ科",
    "辺塚橙": "ミカン科",
    "マリーゴールド": "キク科",
    "ピスタチオ": "ウルシ科",
    "キウイ": "マタタビ科",
    "ハニーサックル": "スイカズラ科",
    "ヴァインフラワー": "ブドウ科",
    "陳皮": "ミカン科",
    "フランキンセンス": "カンラン科",
    "マカダミアナッツ": "ヤマモガシ科",
    "ポメロ": "ミカン科",
    "ホロピト": "シキミモドキ科",
    "キタコブシ": "モクレン科",
    "グラスワート": "ヒユ科",
    "温州みかん": "ミカン科",
    "シュガーケルプ": "コンブ科",
    "舞茸": "トンビマイタケ科",
    "落花生": "マメ科",
    "リンドウ": "リンドウ科",
    "ブラッドライム": "ミカン科",
    "デザートライム": "ミカン科",
    "アニスマートル": "フトモモ科",
    "クアンドン": "ビャクダン科",
    "ワトルシード": "マメ科",
    "スイートレモン": "ミカン科",
    "エキナセア": "キク科",
    "蕗の花": "キク科",
    "不知火": "ミカン科",
    "銀木犀": "モクセイ科",
    "米": "イネ科",
    "ヤブニッケイ": "クスノキ科",
    "マヌカ": "フトモモ科",
    "河内晩柑": "ミカン科",
    "パロサント": "カンラン科",
    "金箔": "装飾素材",
    "スイバ": "タデ科",
    "ツガサルノコシカケ": "ツガサルノコシカケ科",
    "ウッドソレル": "カタバミ科",
    "せとか": "ミカン科",
    "ザクロ": "ミソハギ科",
    "ミルクアザミ": "キク科",
    "カワカワ": "コショウ科",
    "オークモス": "ウメノキゴケ科",
    "サンダルウッド": "ビャクダン科",
    "ヒソップ": "シソ科",
    "ボリジ": "ムラサキ科",
    "ヘリクリサム": "キク科",
    "ソルトブッシュ": "ヒユ科",
    "キナ": "アカネ科",
    "キャットニップ": "シソ科",
    "ケール": "アブラナ科",
    "ケッパー": "フウチョウボク科",
    "ガラナ": "ムクロジ科",
    "カヤの実": "イチイ科",
    "キハダの実": "ミカン科",
    "ヴィチペリフェリペッパー": "コショウ科",
    "ドーナツ生地": "菓子素材",
    "グレーズ": "菓子素材",
    "エゾヤマモモ": "ヤマモモ科",
    "マートル": "フトモモ科",
    "ジンセンベリー": "ウコギ科",
    "セリ": "セリ科",
    "ピーマン": "ナス科",
    "ブナの葉": "ブナ科",
    "ベア大麦": "イネ科",
    "マスティック": "ウルシ科",
    "桑の実": "クワ科",
    "メギ": "メギ科",
    "バナナ": "バショウ科",
    "朴葉": "モクレン科",
    "茗荷": "ショウガ科",
    "夏みかん": "ミカン科",
    "たんかん": "ミカン科",
    "モミ": "マツ科",
    "ニッキ": "クスノキ科",
    "月桃": "ショウガ科",
    "コリアンダーリーフ": "セリ科",
    "ブチュー": "ミカン科",
    "アンブレットシード": "アオイ科",
    "トリュフ": "セイヨウショウロ科",
    "オーク": "ブナ科",
    "椎茸": "ツキヨタケ科",
    "ぶどう": "ブドウ科",
    "アプリコット": "バラ科"
  },
  "aliasMap": {
    "ジュニパー": "ジュニパーベリー",
    "コリアンダー": "コリアンダーシード",
    "リコリスルート": "リコリス",
    "オリス": "オリスルート",
    "アイリス": "オリスルート",
    "レモン": "レモンピール",
    "オレンジ": "オレンジピール",
    "グレープフルーツ": "グレープフルーツピール",
    "ライム": "ライムピール",
    "ベルガモット": "ベルガモットピール",
    "アニス": "アニスシード",
    "フェンネル": "フェンネルシード",
    "キャラウェイ": "キャラウェイシード",
    "カッシア": "カシア",
    "カシアバーク": "カシア",
    "カッシアバーク": "カシア",
    "クベブ": "クベブペッパー",
    "キュベブ": "クベブペッパー",
    "クベバ": "クベブペッパー",
    "クベバベリー": "クベブペッパー",
    "黒胡椒": "ブラックペッパー",
    "グリーンカルダモン": "カルダモン",
    "カルダモンシード": "カルダモン",
    "ベイリーフ": "ローレル",
    "ローリエ": "ローレル",
    "緑茶": "煎茶",
    "アールグレイ": "紅茶",
    "バラ": "ローズ",
    "ブルガリアンローズ": "ローズ",
    "メドウスウィート": "メドウスイート",
    "シーベリー": "シーバックソーン",
    "ストロベリー": "苺",
    "イチゴ": "苺",
    "紫蘇": "青紫蘇",
    "柚子ピール": "柚子",
    "ゆず": "柚子",
    "コースタルタイム": "タイム",
    "生姜": "ジンジャー",
    "ショウガ": "ジンジャー",
    "しょうが": "ジンジャー",
    "アンゼリカ": "アンジェリカルート",
    "アンゼリカルート": "アンジェリカルート",
    "キュベブペッパー": "クベブペッパー",
    "クベブベリー": "クベブペッパー",
    "胡椒": "ブラックペッパー",
    "檜": "ヒノキ",
    "キンカン": "金柑",
    "スイートオレンジ": "オレンジピール",
    "スウィートオレンジ": "オレンジピール",
    "ビターオレンジ": "オレンジピール",
    "バレンシアオレンジ": "オレンジピール",
    "ネーブルオレンジ": "オレンジピール",
    "シチリアレモン": "レモンピール",
    "瀬戸内レモン": "レモンピール",
    "ピンクグレープフルーツ": "グレープフルーツピール",
    "桜の葉": "桜葉",
    "桜の花": "桜花",
    "バラの花びら": "ローズ",
    "薔薇": "ローズ",
    "甘草": "リコリス",
    "コブミカンの葉": "カフィアライムリーフ",
    "アップル": "りんご",
    "パラダイスシード": "グレインズオブパラダイス",
    "オリス根": "オリスルート",
    "イリス": "オリスルート",
    "キャラエイシード": "キャラウェイシード",
    "カッシアチップ": "カシア",
    "クベバペッパー": "クベブペッパー",
    "グレインオブパラダイス": "グレインズオブパラダイス",
    "ギニアショウガ": "グレインズオブパラダイス",
    "ギニアペッパー": "グレインズオブパラダイス",
    "マニゲット": "グレインズオブパラダイス",
    "茶葉": "煎茶",
    "烏龍茶": "煎茶",
    "河越茶": "煎茶",
    "アールグレイ茶": "紅茶",
    "ブラックカラント": "カシス",
    "黒すぐり": "カシス",
    "ピーチ": "桃",
    "さくらんぼ": "チェリー",
    "サクランボ": "チェリー",
    "すもも": "プラム",
    "スモモ": "プラム",
    "薔薇（品種：さ姫）": "ローズ",
    "さ姫": "ローズ",
    "ダマスクローズ": "ローズ",
    "ローズペタル": "ローズ",
    "イエルバブエナ": "ミント",
    "キューバミント": "ミント",
    "薄荷": "ミント",
    "ハッカ": "ミント",
    "ベルベナ": "レモンバーベナ",
    "シークワーサー": "ライムピール",
    "シークヮーサー": "ライムピール",
    "シークワーサーピール": "ライムピール",
    "シークー": "ライムピール",
    "シークーピール": "ライムピール",
    "カラマンシー": "ライムピール",
    "フレッシュライム": "ライムピール",
    "ブラックレモン": "ライムピール",
    "シトロン": "仏手柑",
    "マンダリンピール": "オレンジピール",
    "マンダリン": "オレンジピール",
    "タンジェリン": "オレンジピール",
    "みかんピール": "温州みかん",
    "ライムゼスト": "ライムピール",
    "フィンガーライム": "ライムピール",
    "ジャマイカペッパー": "オールスパイス",
    "コブミカン": "カフィアライムリーフ",
    "ナナカマド": "ローワンベリー",
    "クコの実": "ゴジベリー",
    "エストラゴン": "タラゴン",
    "ホウショウ": "芳樟",
    "焙じ茶": "ほうじ茶",
    "スプルース": "トウヒ",
    "スプルースの新芽": "トウヒ",
    "スプルーストップ": "トウヒ",
    "アカエゾマツ": "トウヒ",
    "ブラックスプルース": "トウヒ",
    "はっさく": "八朔",
    "ハッサク": "八朔",
    "ビートルート": "ビーツ",
    "パチョリ": "パチュリ",
    "ゴース": "ハリエニシダ",
    "ベチバ": "ベチバー",
    "ベチベル": "ベチバー",
    "黒文字": "クロモジ",
    "無花果": "イチジク",
    "ダンデライオンフラワー": "タンポポの花",
    "サンザシの実": "サンザシ",
    "ブドウ花": "ヴァインフラワー",
    "乳香": "フランキンセンス",
    "ポメロピール": "ポメロ",
    "文旦": "ポメロ",
    "レモンセンテッドガム": "ユーカリ",
    "ラディアータ": "ユーカリ",
    "桧": "ヒノキ",
    "椿油搾り粕": "椿の実",
    "オレンジブロッサム": "オレンジフラワー",
    "青みかん": "甘夏",
    "日向夏": "甘夏",
    "橙": "オレンジピール",
    "菩提樹": "リンデン",
    "ロディオラ・ロゼア": "ロディオラロゼア",
    "ローズルート": "ロディオラロゼア",
    "白樺": "白樺の葉",
    "シラカバ": "白樺の葉",
    "海塩": "シーソルト",
    "塩": "シーソルト",
    "馬告": "マーガオ",
    "マカウ": "マーガオ",
    "ワサビ": "わさび",
    "山葵": "わさび",
    "桑葉": "桑の葉",
    "ごま": "胡麻",
    "ゴマ": "胡麻",
    "セサミ": "胡麻",
    "菫": "スミレ",
    "ヴァイオレット": "スミレ",
    "ケシ": "ポピー",
    "アボカド種子": "アボカドシード",
    "ティムットペッパー": "ティムールペッパー",
    "ティムトペッパー": "ティムールペッパー",
    "ティムト": "ティムールペッパー",
    "イラクサ": "ネトル",
    "ココア": "カカオニブ",
    "メイス": "メース",
    "ウィンターサヴォリー": "セイボリー",
    "アボカドの種": "アボカドシード",
    "タンポポルート": "ダンデライオンルート",
    "バイオレット": "スミレ",
    "赤丸薄荷": "ミント",
    "セドロン": "レモンバーベナ",
    "ショウブ": "カラムスルート",
    "ブラダーラック": "海藻",
    "にがり": "シーソルト",
    "スコッツパイン": "松の芽",
    "パイン": "松の芽",
    "松の葉": "松の芽",
    "ホーソンベリー": "サンザシ",
    "アンゲリカルート": "アンジェリカルート",
    "アンジェリカバーク": "アンジェリカルート",
    "アンジェリカ葉": "アンジェリカルート",
    "グレーンオブパラダイス": "グレインズオブパラダイス",
    "コリアンダージード": "コリアンダーシード",
    "コエンドロの実": "コリアンダーシード",
    "コエンドロの油": "コリアンダーシード",
    "キナ皮": "キナ",
    "グリーンコリアンダー": "コリアンダーシード",
    "カキドオシ": "ミント",
    "かきどおし": "ミント",
    "ロングペッパー": "ブラックペッパー",
    "ワイン粕": "レーズン",
    "へべす": "すだち",
    "ホワイトペッパー": "ブラックペッパー",
    "ワイルドフォレストペッパー": "ブラックペッパー",
    "ブルームフラワー": "ハリエニシダ",
    "マンダリンオレンジ": "オレンジピール",
    "ラプサンスーチョン": "紅茶",
    "ルビーグレープフルーツ": "グレープフルーツピール",
    "レディースベッドストロー": "エゾノカワラマツバ",
    "ローリエリーフ": "ローレル",
    "月桂樹の葉": "ローレル",
    "大葉": "青紫蘇",
    "丹波当帰葉": "大和当帰",
    "竹の葉": "笹の葉",
    "椿油絞り粕": "椿の実",
    "白樺樹液": "白樺の葉",
    "白檀": "サンダルウッド",
    "八女緑茶": "煎茶",
    "蜜蝋": "蜂蜜",
    "洋ナシ": "梨",
    "炒りゴマ": "胡麻",
    "燻製ごま": "胡麻",
    "珈琲": "コーヒー豆",
    "アンジェリカ根": "アンジェリカルート",
    "セイヨウトウキの根茎": "アンジェリカルート",
    "ドライアンジェリカ": "アンジェリカルート",
    "ワイルドアンジェリカ": "アンジェリカルート",
    "越後産アンジェリカ": "アンジェリカルート",
    "イリスルート": "オリスルート",
    "アイリスルート": "オリスルート",
    "ニオイイリス": "オリスルート",
    "ニオイイリスの根茎": "オリスルート",
    "フィレンツェアイリスルート": "オリスルート",
    "フローレンティンアイリス": "オリスルート",
    "ゴボウ根": "バードック",
    "カラマスルート": "カラムスルート",
    "高麗人参": "ジンセンベリー",
    "春ウコン": "ターメリック",
    "新生姜": "ジンジャー",
    "ジェニパーベリー": "ジュニパーベリー",
    "ネズミサシ": "ジュニパーベリー",
    "ハイネズの実": "ジュニパーベリー",
    "ハイビャクシン": "ジュニパーベリー",
    "ミヤマビャクシン": "ジュニパーベリー",
    "ヨウシュネズの油": "ジュニパーベリー",
    "ケイド": "ジュニパーベリー",
    "セビルオレンジ": "オレンジピール",
    "セビリアオレンジ": "オレンジピール",
    "グリーンセビリアオレンジ": "オレンジピール",
    "スイートセビリアオレンジ": "オレンジピール",
    "ダイダイの皮": "オレンジピール",
    "オレンジオイル": "オレンジピール",
    "オーガニックネーブル": "オレンジピール",
    "バッタンバン産オレンジ": "オレンジピール",
    "リバーランドオレンジ": "オレンジピール",
    "ラーラハゼスト": "オレンジピール",
    "クレメンタイン": "オレンジピール",
    "クレモンティーヌ": "オレンジピール",
    "タンジェロ": "オレンジピール",
    "ナールチェ": "オレンジピール",
    "ベルガモットオレンジ": "ベルガモットピール",
    "ベルガモットオレンジピール": "ベルガモットピール",
    "ソレント産ベルガモット": "ベルガモットピール",
    "ベルガモットレモン": "ベルガモットピール",
    "カプリ産レモン": "レモンピール",
    "アマルフィレモン": "レモンピール",
    "ペルーレモン": "レモンピール",
    "ポルトガル産レモン": "レモンピール",
    "ムルシアレモン": "レモンピール",
    "日南レモン": "レモンピール",
    "無農薬レモン": "レモンピール",
    "フレッシュレモン": "レモンピール",
    "乾燥レモン": "レモンピール",
    "レモンの皮": "レモンピール",
    "檸檬": "レモンピール",
    "マイヤーレモン": "レモンピール",
    "メイヤーレモン": "レモンピール",
    "シチリア産ライム": "ライムピール",
    "ライム果皮": "ライムピール",
    "ラングプルライム": "ライムピール",
    "ゴンドラージ": "ライムピール",
    "レッドグレープフルーツ": "グレープフルーツピール",
    "キンカンピール": "金柑",
    "デコポン": "不知火",
    "はるみ": "不知火",
    "はるみピール": "不知火",
    "はるか": "甘夏",
    "晩白柚": "ポメロ",
    "晩白柚ピール": "ポメロ",
    "平戸文旦": "ポメロ",
    "晩柑": "河内晩柑",
    "辺塚だいだい": "辺塚橙",
    "リメットエッセンス": "スイートレモン",
    "みかん": "温州みかん",
    "蜜柑": "温州みかん",
    "みかんの皮": "温州みかん",
    "神奈川みかん": "温州みかん",
    "神奈川産みかん": "温州みかん",
    "真穴みかんの果実": "温州みかん",
    "みかんの花": "オレンジフラワー",
    "みかんフラワー": "オレンジフラワー",
    "三ケ日みかんの花": "オレンジフラワー",
    "真穴みかんの花": "オレンジフラワー",
    "ゆずの皮": "柚子",
    "ゆずピール": "柚子",
    "国産ゆず": "柚子",
    "木頭ゆず": "柚子",
    "ピメント": "オールスパイス",
    "ピメントベリー": "オールスパイス",
    "トンカビーン": "トンカ豆",
    "トンカビーンズ": "トンカ豆",
    "桂皮": "カシア",
    "シナニッケイ": "カシア",
    "カッシアリーフ": "カシア",
    "八角": "スターアニス",
    "キニーネ": "キナ",
    "クバブペッパー": "クベブペッパー",
    "ジャワペッパー": "クベブペッパー",
    "ペッパー": "ブラックペッパー",
    "ペッパーコーン": "ブラックペッパー",
    "黒コショウ": "ブラックペッパー",
    "カンポットペッパー": "ブラックペッパー",
    "カンポット赤胡椒": "ブラックペッパー",
    "プークォックペッパー": "ブラックペッパー",
    "ヒハツ": "ブラックペッパー",
    "ヒハツモドキ": "ブラックペッパー",
    "ピパーチ": "ブラックペッパー",
    "モジェペッパー": "ピンクペッパー",
    "ピンクベリー": "ピンクペッパー",
    "チリ": "唐辛子",
    "バーズアイチリ": "唐辛子",
    "ハバネロ": "唐辛子",
    "直火焼きハバネロ": "唐辛子",
    "チポトレペッパー": "唐辛子",
    "内藤とうがらし": "唐辛子",
    "赤ペッパー": "レッドペッパー",
    "ティムールベリー": "ティムールペッパー",
    "ティムット": "ティムールペッパー",
    "ヴィチフェリペリペッパー": "ヴィチペリフェリペッパー",
    "タスマニアペッパー": "ペッパーベリー",
    "タスマニアペッパーリーフ": "ペッパーベリー",
    "ホロビト": "ホロピト",
    "ミルクシスル": "ミルクアザミ",
    "ミルクシスルシード": "ミルクアザミ",
    "フェネルシード": "フェンネルシード",
    "ワイルドフェンネル": "フェンネルシード",
    "ワイルドキャラウェイ": "キャラウェイシード",
    "杏仁霜": "アーモンド",
    "甘杏仁": "アーモンド",
    "イブキジャコウソウ": "タイム",
    "セルポレ": "タイム",
    "サボリー": "セイボリー",
    "サマーセイバリー": "セイボリー",
    "サルビア": "セージ",
    "パイナップルセージ": "セージ",
    "ワイルドマジョラム": "オレガノ",
    "ヴァーベナ": "レモンバーベナ",
    "シトロンバーベナ": "レモンバーベナ",
    "バーベナの新芽": "レモンバーベナ",
    "ハッカ油": "ミント",
    "和ハッカ": "ミント",
    "和薄荷": "ミント",
    "月桂樹": "ローレル",
    "ソレル": "スイバ",
    "シープソレル": "スイバ",
    "クルマバソウ": "スイートウッドラフ",
    "ミルテ": "マートル",
    "ボッグマートル": "ボグマートル",
    "アニスシードマートル": "アニスマートル",
    "ワームウッド": "ニガヨモギ",
    "ローマンワームウッド": "ニガヨモギ",
    "ウアカタイ": "マリーゴールド",
    "シダレカンバ": "白樺の葉",
    "ヨーロッパシラカバ": "白樺の葉",
    "白樺の樹液": "白樺の葉",
    "白樺の樹皮": "白樺の葉",
    "白樺枝葉": "白樺の葉",
    "白樺樹皮": "白樺の葉",
    "アマリロ": "ホップ",
    "ブナ": "ブナの葉",
    "イモーテル": "ヘリクリサム",
    "エヴァーラスティング": "ヘリクリサム",
    "イワベンケイ": "ロディオラロゼア",
    "カレンデュラ": "マリーゴールド",
    "カレンデュラペタル": "マリーゴールド",
    "キンモクセイ": "金木犀",
    "ジェラニウム": "ローズゼラニウム",
    "スイカズラ": "ハニーサックル",
    "ゴースフラワー": "ハリエニシダ",
    "ゴーズフラワー": "ハリエニシダ",
    "ボラージュ": "ボリジ",
    "セイヨウナツユキソウ": "メドウスイート",
    "セイヨウノコギリソウ": "ヤロウ",
    "ヤロー": "ヤロウ",
    "ニワトコ": "エルダーフラワー",
    "ヒース": "ヘザー",
    "ヒースの花": "ヘザー",
    "ベルヒース": "ヘザー",
    "ライムフラワー": "リンデン",
    "菩提樹の花": "リンデン",
    "フキノトウ": "蕗の花",
    "バラの花": "ローズ",
    "バラの花弁": "ローズ",
    "赤バラの花びら": "ローズ",
    "野バラの花弁": "ローズ",
    "野生のバラの花びら": "ローズ",
    "シナモンローズの花弁": "ローズ",
    "ぶどうの花": "ヴァインフラワー",
    "スギ": "杉",
    "吉野檜": "ヒノキ",
    "檜葉": "ヒバ",
    "アテビ": "ヒバ",
    "松": "赤松",
    "スコッチパイン": "松の芽",
    "スコットパイン": "松の芽",
    "ヨーロッパアカマツ": "松の芽",
    "マウンテンパイン": "松の芽",
    "モンタンパイン": "松の芽",
    "モンタナマツ": "松の芽",
    "ムゴマツ": "松の芽",
    "ハイマツ": "松の芽",
    "パインシュート": "松の芽",
    "パインの新芽": "松の芽",
    "松の新芽": "松の芽",
    "松葉": "松の芽",
    "パインオイル": "松の芽",
    "赤エゾマツの芽": "トウヒ",
    "黒文字の小枝": "クロモジ",
    "クールブラッシュアップル": "りんご",
    "グラニースミス": "りんご",
    "クラブアップル": "りんご",
    "ドライアップル": "りんご",
    "マッキントッシュアップル": "りんご",
    "ラフランス": "梨",
    "ルレクチェ": "梨",
    "スピノサスモモ": "スローベリー",
    "スロー": "スローベリー",
    "ダムソン": "プラム",
    "プルーン": "プラム",
    "ナナカマドの実": "ローワンベリー",
    "ハニーベリー": "ハスカップ",
    "ピーチパイン": "パイナップル",
    "フィグ": "イチジク",
    "ブレーベリー": "ビルベリー",
    "ブレイベリー": "ビルベリー",
    "マルベリー": "桑の実",
    "城州白": "梅",
    "桜": "桜花",
    "サクラ": "桜花",
    "日本の桜": "桜花",
    "桜の花びら": "桜花",
    "桜の葉漬け": "桜葉",
    "黄桜の葉": "桜葉",
    "椿": "椿の実",
    "椿の種": "椿の実",
    "藪つばき種": "椿の実",
    "雪つばき種": "椿の実",
    "椿油の搾り粕": "椿の実",
    "つばき茶": "椿茶",
    "笹": "笹の葉",
    "クマザサ": "笹の葉",
    "石焙煎熊笹": "笹の葉",
    "橘": "大和橘",
    "赤しそ": "赤紫蘇",
    "茶": "煎茶",
    "お茶": "煎茶",
    "日本茶": "煎茶",
    "グリーンティー": "煎茶",
    "中国緑茶": "煎茶",
    "宇治番茶": "煎茶",
    "宇治茶新茶": "煎茶",
    "宇治茶特上かりがね": "煎茶",
    "小那比茶": "煎茶",
    "檜山茶": "煎茶",
    "烏龍茶葉": "煎茶",
    "金萱烏龍茶": "煎茶",
    "ガンパウダーティー": "煎茶",
    "碾茶": "抹茶",
    "加賀棒茶": "ほうじ茶",
    "ブラックティー": "紅茶",
    "ブラックティーブレンド": "紅茶",
    "祁門茶": "紅茶",
    "パインスモークティー": "紅茶",
    "甘酒": "米",
    "酒粕": "米",
    "あおさ": "海藻",
    "スジアオノリ": "海藻",
    "シーウィード": "海藻",
    "ヒバマタ": "海藻",
    "ウィングケルプ": "海藻",
    "スイートケルプ": "シュガーケルプ",
    "スウィートケルプ": "シュガーケルプ",
    "ナガコンブ": "昆布",
    "アッケシソウ": "グラスワート",
    "サリコルニア": "グラスワート",
    "サンファイア": "グラスワート",
    "チェルヴィアの海塩": "シーソルト",
    "ヒマラヤ岩塩": "シーソルト",
    "天日塩": "シーソルト",
    "戸田塩": "シーソルト",
    "駿河湾の海水塩": "シーソルト",
    "塩水": "シーソルト",
    "24K金粉": "金箔",
    "金粉": "金箔",
    "生はちみつ": "蜂蜜",
    "ヘザーハニー": "蜂蜜",
    "黒ごま": "胡麻",
    "榧の実": "カヤの実",
    "コーヒー": "コーヒー豆",
    "コーヒー出し殻": "コーヒー豆",
    "燻された珈琲豆": "コーヒー豆",
    "カカオ豆": "カカオニブ",
    "ココアビーンズ": "カカオニブ",
    "モルト": "ベア大麦",
    "焙煎麦": "ベア大麦",
    "焙煎麦芽": "ベア大麦",
    "麦芽粕": "ベア大麦",
    "夏橙": "夏みかん",
    "トドマツ": "モミ",
    "ウラジロモミ": "モミ",
    "ダグラスファー": "モミ",
    "ダグラスファーリーフ": "モミ",
    "ニッキ葉": "ニッキ",
    "ニッキリーフ": "ニッキ",
    "ニッケイの葉": "ニッキ",
    "ニッケイ": "ニッキ",
    "肉桂": "ニッキ",
    "けせん": "ニッキ",
    "カラキ": "ニッキ",
    "パクチー": "コリアンダーリーフ",
    "香菜": "コリアンダーリーフ",
    "シャンツァイ": "コリアンダーリーフ",
    "コリアンダーの葉": "コリアンダーリーフ",
    "ブク": "ブチュー",
    "ブッコ": "ブチュー",
    "ブーフ": "ブチュー",
    "ワイルドブーク": "ブチュー",
    "ブークー": "ブチュー",
    "アンブレット": "アンブレットシード",
    "アンブレッドシード": "アンブレットシード",
    "オークチップ": "オーク",
    "ミズナラ": "オーク",
    "ナラ": "オーク",
    "シイタケ": "椎茸",
    "干し椎茸": "椎茸",
    "葡萄": "ぶどう",
    "グレープ": "ぶどう",
    "ブドウ果皮": "ぶどう",
    "ブドウの果皮": "ぶどう",
    "グレープピール": "ぶどう",
    "デラウェア": "ぶどう",
    "未成熟のデラウェア": "ぶどう",
    "シラーズ": "ぶどう",
    "ソーヴィニヨンブラン": "ぶどう",
    "巨峰": "ぶどう",
    "赤ワイン製造に使用した巨峰の絞りかす": "ぶどう",
    "山葡萄ワイン": "ぶどう",
    "杏": "アプリコット",
    "アンズ": "アプリコット",
    "パセリ": "パセリ根",
    "ペパーミントガムリーフ": "ユーカリ",
    "甘夏の花": "オレンジフラワー",
    "ベチパー": "ベチバー",
    "タンポポ根": "ダンデライオンルート",
    "生姜の葉": "ジンジャー"
  },
  "aliasExcludes": [
    "花梨",
    "ローズウッド",
    "アカシア",
    "フルーツ",
    "ヤマモモ",
    "プリムローズ",
    "ロックローズ",
    "アルペンローズ",
    "アニスヒソップ",
    "もみじ",
    "紅櫻公園のもみじ",
    "オクラ",
    "檀香梅",
    "ダンコウバイ",
    "タンジー",
    "ヨモギギク",
    "ブッシュ",
    "ブドウ由来ポリフェノール",
    "黄金柑"
  ]
};
})();
