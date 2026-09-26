/*
 * Bar Soutsu ボタニカル表 共通データ。
 * 香気成分は代表例で、品種・産地・抽出条件により変動します。
 * ジン在庫カタログと蒸留ノートも、このファイルを読み込みます。ボタニカルを足すときは、ここだけ直してください。
 * aliasMap は、在庫カタログなどの表記ゆれ（例：生姜）を、表の名前（例：ジンジャー）に読み替える辞書です。
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
          "medium": "20%エタノール（Clutton & Evans 1978, ジンの香気成分）"
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
          "medium": "20%エタノール（Clutton & Evans 1978）"
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
          "medium": "45%エタノール（Buck et al. 2020）"
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
          "medium": "45%エタノール（Buck et al. 2020, ババリアのジン2銘柄の研究）"
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
          "medium": "水/エタノール 6:4（約40%）"
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
          "medium": "モデルワイン（水/エタノール 90+10）"
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
          "medium": "モデルワイン（水/エタノール 90+10）"
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
          "medium": "モデルワイン（12%）"
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
          "medium": "モデルワイン（12%）"
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
          "medium": "45%エタノール（Buck et al. 2020）"
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
          "medium": "45%エタノール（Buck et al. 2020, ジンの研究）"
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
          "medium": "モデルワイン（水/エタノール 90+10）"
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
          "medium": "モデルワイン（水/エタノール 90+10）"
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
          "medium": "40%エタノール（Lu et al. 2025）"
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
          "medium": "モデルワイン（水/エタノール 90+10）"
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
          "medium": "モデルワイン（水/エタノール 90+10）"
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
          "medium": "モデルワイン（水/エタノール 90+10）"
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
          "medium": "10%エタノール（cis体、Guth 1997）"
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
          "medium": "20%エタノール（Clutton & Evans 1978）"
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
          "medium": "45%エタノール（Buck et al. 2020）"
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
          "medium": "モデルワイン（水/エタノール 90+10）"
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
          "medium": "モデルワイン（12%）"
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
        "β-カリオフィレン"
      ]
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
        "γ-テルピネン"
      ]
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
        "シトラール"
      ]
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
        "リナロール"
      ]
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
        "ミリスチシン"
      ]
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
        "エストラゴール"
      ]
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
        "リナロール"
      ]
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
        "エストラゴール"
      ]
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
      ]
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
        "p-シメン"
      ]
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
        "β-カリオフィレン"
      ]
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
        "β-ミルセン"
      ]
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
        "クルクミン"
      ]
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
        "リナロール"
      ]
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
        "ボルネオール"
      ]
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
        "オイゲノール"
      ]
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
        "リナロール"
      ]
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
        "ネロール"
      ]
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
        "メチルオイゲノール"
      ]
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
        "α-フェランドレン"
      ]
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
        "アントシアニン"
      ]
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
        "ヘキサナール"
      ]
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
        "β-カリオフィレン"
      ]
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
        "カフェイン"
      ]
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
        "アントシアニン"
      ]
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
        "リナロール"
      ]
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
        "フィトール"
      ]
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
        "リナロール"
      ]
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
        "カンフェン"
      ]
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
        "ボルネオール"
      ]
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
        "α-ピネン"
      ]
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
        "ジメチルスルフィド"
      ]
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
        "ヘキサナール"
      ]
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
        "ヘキサナール"
      ]
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
        "フルフラール"
      ]
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
        "酢酸"
      ]
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
        "ゲラニオール"
      ]
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
        "リンゴ酸"
      ]
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
        "リンゴ酸"
      ]
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
        "ゲルマクレンD"
      ],
      "aliases": [
        "ごぼう",
        "ゴボウ",
        "牛蒡"
      ]
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
        "タンニン"
      ]
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
        "リナロール"
      ]
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
      ]
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
        "クロシン"
      ]
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
        "リナロール"
      ]
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
        "テアニン"
      ]
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
        "フラボノイド類"
      ]
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
        "ジンゲロール"
      ]
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
        "タンニン"
      ]
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
        "β-ピネン"
      ]
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
        "ローズオキサイド"
      ]
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
        "リナロール"
      ]
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
        "p-シメン"
      ]
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
        "フラボノイド類"
      ]
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
        "ジャスミンラクトン"
      ]
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
        "ミルセン"
      ]
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
        "酢酸エチル"
      ]
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
        "γ-テルピネン"
      ]
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
        "クマリン"
      ]
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
        "β-ピネン"
      ]
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
        "リナロール"
      ]
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
        "1,8-シネオール"
      ]
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
        "ローズオキサイド"
      ]
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
        "リナロール"
      ]
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
        "リンゴ酸"
      ]
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
        "リモネン"
      ]
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
        "セドロール"
      ]
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
        "ボルネオール"
      ]
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
        "ヘキサナール"
      ]
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
        "デカナール"
      ]
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
        "ヘキサナール"
      ]
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
        "シトラール"
      ]
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
        "酢酸エチル"
      ]
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
        "アトラクチレノリド類"
      ],
      "aliases": [
        "オケラ",
        "ビャクジュツ"
      ]
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
        "ブチリデンフタリド"
      ],
      "aliases": [
        "ロベージ",
        "ラベッジ",
        "ラベージルート"
      ]
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
        "セダネノリド"
      ],
      "aliases": [
        "セロリアック",
        "セルリアック",
        "セロリルート"
      ]
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
        "アピオール"
      ],
      "aliases": [
        "パセリルート",
        "ハンブルクパセリ"
      ]
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
        "リナロール"
      ]
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
        "デカナール"
      ]
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
        "ゲラニオール"
      ]
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
        "タンニン"
      ]
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
        "β-ミルセン"
      ]
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
        "タンニン"
      ]
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
        "1,8-シネオール"
      ]
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
        "γ-テルピネン"
      ]
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
        "フルフラール"
      ]
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
        "ヘキサナール"
      ]
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
        "α-ピネン"
      ]
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
        "フルフラール"
      ]
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
        "酢酸エチル"
      ]
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
      ]
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
        "2-フェニルエタノール"
      ]
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
        "2-フェニルエタノール"
      ]
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
        "リナロール"
      ]
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
        "タンニン"
      ]
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
        "タンニン"
      ]
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
        "β-ミルセン"
      ]
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
        "β-カリオフィレン"
      ]
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
        "β-カリオフィレン"
      ]
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
        "フェンコン"
      ]
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
        "ヘキサナール"
      ]
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
        "リナロール"
      ]
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
        "デカナール"
      ]
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
        "カンフェン"
      ]
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
        "ピペリン"
      ]
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
        "リモネン"
      ]
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
        "β-カリオフィレン"
      ]
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
        "α-ピネン"
      ]
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
        "カンフェン"
      ]
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
        "γ-テルピネン"
      ]
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
        "バニリン"
      ]
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
        "ネロリドール"
      ]
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
        "フラボノイド類"
      ]
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
        "フラネオール"
      ]
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
        "フルフラール"
      ]
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
        "γ-テルピネン"
      ]
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
        "β-カリオフィレン"
      ]
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
        "リナロール"
      ]
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
        "フィトール"
      ]
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
        "リナロール"
      ]
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
        "リナロール"
      ]
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
        "ヘキサナール"
      ]
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
        "リモネン"
      ]
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
        "ネロリドール"
      ]
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
        "ヌートカトン"
      ]
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
        "p-シメン"
      ]
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
        "リナロール"
      ]
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
        "ピペリン"
      ]
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
        "ゲラニオール"
      ]
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
        "ヘキサナール"
      ]
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
        "リナロール"
      ]
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
        "フルフラール"
      ]
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
        "ミリスチン酸"
      ]
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
        "リナロール"
      ]
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
        "1,8-シネオール"
      ]
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
        "リナロール"
      ]
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
        "フラボノイド類"
      ]
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
        "タンニン"
      ]
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
        "リナロール"
      ]
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
        "2-フェニルエタノール"
      ]
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
        "フルフラール"
      ]
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
        "オイゲノール"
      ]
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
        "サビネン"
      ]
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
        "リナロール"
      ]
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
        "p-シメン"
      ]
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
        "フラボノイド類"
      ]
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
        "リナロール"
      ]
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
        "安息香酸"
      ]
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
        "サビネン"
      ]
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
        "タンニン"
      ]
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
        "クマリン"
      ]
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
        "リナロール"
      ]
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
        "フラボノイド類"
      ]
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
        "カンフェン"
      ]
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
        "β-カリオフィレン"
      ]
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
        "ミリスチン酸"
      ]
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
        "α-ピネン"
      ]
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
        "ピラジン類"
      ]
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
        "タンニン"
      ]
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
        "リナロール"
      ]
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
        "酢酸エチル"
      ]
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
        "β-カリオフィレン"
      ]
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
        "フラボノイド類"
      ]
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
        "2-アセチル-1-ピロリン"
      ]
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
        "β-カリオフィレン"
      ]
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
        "ゲラニオール"
      ]
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
        "ヘキサナール"
      ]
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
    "茗荷": "ショウガ科"
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
    "みかんピール": "オレンジピール",
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
    "橙": "甘夏",
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
    "珈琲": "コーヒー豆"
  }
};
})();
