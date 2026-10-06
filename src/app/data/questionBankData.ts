export type QuestionTemplate = 'compliance' | 'internal-control';

export type InherentRisk = 'high' | 'medium' | 'low' | 'none';

export interface QuestionBankRow {
  id: string;
  externalRule: string;
  operationalRisk: string;
  controlMeasure: string;
  title: string;
  question: string;
  inherentRisk: InherentRisk;
  frequency: string;
}

export interface QuestionBankCategory {
  id: string;
  riskCategory: string;
  process: string;
  department: string;
  responsibleUnit: string;
  internalRule: string;
  rows: QuestionBankRow[];
}

export const TEMPLATE_OPTIONS: { value: QuestionTemplate; label: string }[] = [
  { value: 'compliance', label: '法令遵循自行評估' },
  { value: 'internal-control', label: '內部控制制度自行查核' },
];

export const COMPLIANCE_QUESTION_BANK: QuestionBankCategory[] = [
  {
    id: 'comp-1',
    riskCategory: '利害關係人/利益衝突',
    process: '授信審查',
    department: '授信管理部、審查部、營業部',
    responsibleUnit: '凱基銀行 - 風管部',
    internalRule: '個金業務授信辦法',
    rows: [
      {
        id: 'comp-1-1',
        title: '名單資料庫更新',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第8條',
        operationalRisk: '利害關係人交易相關業務規範及作業未盡周延。',
        controlMeasure: '定期請同仁確認利害關係人系統名單資料庫之正確及完整性，並監管追蹤完成情形。',
        question: '名單資料庫應定期更新。',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
      {
        id: 'comp-1-2',
        title: '利害關係人授信迴避',
        externalRule: '銀行法第33-1條',
        operationalRisk: '授信人員對於銀行法第33-1條中規定利害關係者經手之授信案件，未予迴避，恐有利害衝突之風險。',
        controlMeasure: '授信人員對於利害關係人之授信案件應予以迴避，改由職務代理人代為執行職務；營業單位主管應迴避核定授權案件，由其職務代理人核轉總行核定。',
        question: '各級授信人員就其所辦理有利害關係之授信案件時應予迴避，改由職務代理人代為執行職務。',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
      {
        id: 'comp-1-3',
        title: '利害關係人授信提報',
        externalRule: '銀行法第三十二條',
        operationalRisk: '利害關係人授信未依規定提報董事會，核貸層級與揭露不足。',
        controlMeasure: '利害關係人授信應依授權層級提報，並留存董事會或審計委員會決議。',
        question: '利害關係人授信是否已依規定提報並留存決議紀錄？',
        inherentRisk: 'high',
        frequency: '每半年',
      },
      {
        id: 'comp-1-4',
        title: '授信條件變更複核',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法',
        operationalRisk: '授信條件變更未重新檢視利害關係，可能規避原核准限制。',
        controlMeasure: '展期、增貸或條件變更時應重新確認利害關係人身分。',
        question: '授信條件變更時是否重新確認利害關係人身分？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
    ],
  },
  {
    id: 'comp-2',
    riskCategory: '客戶身分識別',
    process: '存款開戶',
    department: '營業部、個金業務部',
    responsibleUnit: '凱基金控 - 資訊部',
    internalRule: '存款業務作業手冊',
    rows: [
      {
        id: 'comp-2-1',
        title: '開戶證件核對',
        externalRule: '洗錢防制法第7條',
        operationalRisk: '未落實客戶身分識別程序，導致不法分子利用人頭帳戶。',
        controlMeasure: '開戶時應確實核對雙證件，並透過聯徵中心查詢異常紀錄。',
        question: '開戶作業是否落實證件核對？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'comp-2-2',
        title: '高風險客戶盡職審查',
        externalRule: '洗錢防制法第七條',
        operationalRisk: '未對高風險客戶採取加強審查，無法說明資金來源。',
        controlMeasure: '高風險客戶開戶應完成加強盡職審查，並留存資金來源說明。',
        question: '高風險客戶是否已完成加強盡職審查？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'comp-2-3',
        title: '代理人開戶核對',
        externalRule: '金融機構防制洗錢辦法',
        operationalRisk: '代理人開戶未核對代理權限，帳戶可能遭冒用。',
        controlMeasure: '代理開戶應核對身分證件、委任文件及受任範圍。',
        question: '代理人開戶是否已核對委任文件與代理權限？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
    ],
  },
  {
    id: 'comp-3',
    riskCategory: '資訊服務委外',
    process: '資訊服務委外',
    department: '資訊科技部、數位金融部',
    responsibleUnit: '凱基銀行 - 資訊部',
    internalRule: '資訊服務委外管理辦法',
    rows: [
      {
        id: 'comp-3-1',
        title: '供應商資訊資產評估',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法',
        operationalRisk: '未辨識委外供應商接觸之資訊資產，可能使核心系統曝險。',
        controlMeasure: '委外前應確認供應商涉及之資訊資產範圍，包含核心系統、關鍵系統軟體與關鍵系統設備。',
        question: '是否已評估供應商涉及之資訊資產？',
        inherentRisk: 'high',
        frequency: '每半年',
      },
      {
        id: 'comp-3-2',
        title: '供應商資料存取評估',
        externalRule: '個人資料保護法',
        operationalRisk: '供應商存取個人資料或重要文件未納入評估。',
        controlMeasure: '應確認是否涉及特種個資、可識別個人資料，以及其他重要文件與資料。',
        question: '是否已評估供應商會存取或保管之資料？',
        inherentRisk: 'high',
        frequency: '每半年',
      },
      {
        id: 'comp-3-3',
        title: '供應商傳輸連線評估',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '未評估傳輸路徑，資料可能經由未加密網路外洩。',
        controlMeasure: '應確認連線係透過網際網路、封閉或加密網路，或不進行外部傳輸。',
        question: '與供應商之傳輸連線方式是否已評估並符合要求？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
      {
        id: 'comp-3-4',
        title: '委外可行性評估',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '未評估委外可行性或未遵循主管機關規範即進行委外。',
        controlMeasure: '委外前應完成可行性評估，並確認符合內規與主管機關要求。',
        question: '資訊服務委外事項是否已考量可行性，並遵守內規與主管機關規範？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
      {
        id: 'comp-3-5',
        title: '資安成本與替代方案',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '資訊安全要求未列入成本，或供應商過度集中且無替代方案。',
        controlMeasure: '資安要求應列入成本計算，並評估供應商集中度與無法履約時之替代方案。',
        question: '是否已將資訊安全要求列入成本，並考量供應商集中與替代方案？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
    ],
  },
  {
    id: 'comp-4',
    riskCategory: '財富管理銷售',
    process: '理財商品銷售',
    department: '財富管理部',
    responsibleUnit: '凱基銀行 - 風管部',
    internalRule: '財富管理業務管理辦法',
    rows: [
      {
        id: 'comp-4-1',
        title: '商品風險屬性確認',
        externalRule: '金融消費者保護法',
        operationalRisk: '未依客戶風險屬性銷售，可能造成不合適推介。',
        controlMeasure: '銷售前應完成風險屬性評估，並確認商品風險不大於客戶屬性。',
        question: '銷售前是否已確認商品風險符合客戶風險屬性？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'comp-4-2',
        title: '商品說明與客戶簽署',
        externalRule: '銀行辦理財富管理業務應注意事項',
        operationalRisk: '說明文件未交付或未留存客戶簽署，爭議時無法舉證。',
        controlMeasure: '應交付商品說明書與風險預告，並保存客戶簽署紀錄。',
        question: '是否已交付商品說明並留存客戶簽署？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
      {
        id: 'comp-4-3',
        title: '理專異動權限調整',
        externalRule: '個人資料保護法',
        operationalRisk: '理專離職後仍可查詢客戶資產，個資外洩風險升高。',
        controlMeasure: '人員異動當日應調整客戶查詢權限，並留存異動紀錄。',
        question: '理專異動時是否已即時調整客戶資料查詢權限？',
        inherentRisk: 'high',
        frequency: '每季',
      },
    ],
  },
  {
    id: 'comp-5',
    riskCategory: '個人金融授信',
    process: '個人貸款',
    department: '個金業務部',
    responsibleUnit: '凱基銀行 - 風管部',
    internalRule: '個人貸款授信辦法',
    rows: [
      {
        id: 'comp-5-1',
        title: '撥貸前收入與成數核對',
        externalRule: '銀行法',
        operationalRisk: '收入與負債比未查核，授信成數可能逾越內規。',
        controlMeasure: '撥貸前應核對收入證明、負債比及核貸成數。',
        question: '撥貸前是否已核對收入證明與授信成數？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'comp-5-2',
        title: '利率與費用說明',
        externalRule: '金融消費者保護法',
        operationalRisk: '費用與提前清償條件未說明，客戶申訴增加。',
        controlMeasure: '簽約前應說明利率、費用及提前清償條件，並留存說明紀錄。',
        question: '簽約前是否已說明利率、費用與提前清償條件？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
      {
        id: 'comp-5-3',
        title: '撥款用途抽查',
        externalRule: '洗錢防制法',
        operationalRisk: '貸款資金用途與申請不符，可能遭利用於洗錢。',
        controlMeasure: '應抽查撥款流向是否符合申請用途，異常者提報疑似交易。',
        question: '撥款用途是否已抽查並與申請內容相符？',
        inherentRisk: 'high',
        frequency: '每半年',
      },
    ],
  },
  {
    id: 'comp-6',
    riskCategory: '數位通路',
    process: '網路銀行',
    department: '數位金融部',
    responsibleUnit: '凱基銀行 - 資訊部',
    internalRule: '電子銀行業務管理辦法',
    rows: [
      {
        id: 'comp-6-1',
        title: '非約定轉帳驗證',
        externalRule: '金融機構辦理電子銀行業務安全控管作業基準',
        operationalRisk: '未落實多因子驗證，網路轉帳可能遭盜用。',
        controlMeasure: '非約定轉帳應採多因子驗證，並保存驗證紀錄。',
        question: '非約定轉帳是否已採行多因子驗證？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'comp-6-2',
        title: '行動銀行權限審查',
        externalRule: '個人資料保護法',
        operationalRisk: 'App 權限超出必要範圍，個資蒐集不符最小必要。',
        controlMeasure: '上架前應審查權限與個資蒐集項目，並留存審查紀錄。',
        question: '行動銀行權限是否已依最小必要原則審查？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
      {
        id: 'comp-6-3',
        title: '電子銀行異常通報',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法',
        operationalRisk: '系統異常未即時通報，客戶交易中斷無法追溯。',
        controlMeasure: '重大異常應於規定時限通報，並保存事件處理紀錄。',
        question: '電子銀行重大異常是否已依時限通報並留存紀錄？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
    ],
  },
  {
    id: 'comp-7',
    riskCategory: '法令遵循',
    process: '洗錢防制',
    department: '法令遵循部、營業部、個金業務部',
    responsibleUnit: '凱基金控 - 法遵部',
    internalRule: '防制洗錢及打擊資恐政策',
    rows: [
      {
        id: 'comp-7-1',
        title: '疑似洗錢交易申報',
        externalRule: '洗錢防制法',
        operationalRisk: '疑似洗錢交易未依期限申報，遭主管機關裁罰。',
        controlMeasure: '疑似交易應於規定工作日內完成申報，並保存申報檔。',
        question: '疑似洗錢交易是否已於規定期限內申報？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'comp-7-2',
        title: '制裁名單比對',
        externalRule: '資恐防制法',
        operationalRisk: '制裁名單未即時更新，禁制對象仍可交易。',
        controlMeasure: '名單更新後應於規定時間完成系統參數調整與比對。',
        question: '制裁名單更新後是否已完成系統比對？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'comp-7-3',
        title: '洗錢防制教育訓練',
        externalRule: '金融機構防制洗錢辦法',
        operationalRisk: '教育訓練未涵蓋新進人員，第一線無法辨識異常。',
        controlMeasure: '新進人員到職後應完成洗錢防制訓練並留存紀錄。',
        question: '新進人員是否已完成洗錢防制教育訓練？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
    ],
  },
  {
    id: 'comp-8',
    riskCategory: '法務合約',
    process: '合約審查',
    department: '法務部',
    responsibleUnit: '凱基金控 - 法遵部',
    internalRule: '契約審查作業要點',
    rows: [
      {
        id: 'comp-8-1',
        title: '定型化契約法務審查',
        externalRule: '金融消費者保護法',
        operationalRisk: '定型化契約未送審即使用，條款可能不利客戶。',
        controlMeasure: '對外定型化契約應經法務審查後才可使用。',
        question: '定型化契約啟用前是否已經法務審查？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
      {
        id: 'comp-8-2',
        title: '委外契約個資約定',
        externalRule: '個人資料保護法',
        operationalRisk: '委外契約未約定個資保護義務，外洩時責任不明。',
        controlMeasure: '涉及個資之契約應載明保密、轉委託限制與事故通知。',
        question: '委外契約是否已約定個資保護與事故通知義務？',
        inherentRisk: 'high',
        frequency: '每半年',
      },
      {
        id: 'comp-8-3',
        title: '用印文件版本核對',
        externalRule: '銀行法',
        operationalRisk: '合約版本與用印文件不一致，爭議時無法對應核准版。',
        controlMeasure: '用印前應核對核准版本，並保存版本比對紀錄。',
        question: '用印文件是否已與核准合約版本一致？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
    ],
  },
];

export const INTERNAL_CONTROL_QUESTION_BANK: QuestionBankCategory[] = [
  {
    id: 'ic-1',
    riskCategory: '作業流程控管',
    process: '內部查核',
    department: '稽核處、法令遵循部',
    responsibleUnit: '凱基銀行 - 稽核處',
    internalRule: '內部控制制度自行查核作業要點',
    rows: [
      {
        id: 'ic-1-1',
        title: '依計畫完成自行查核',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第26條',
        operationalRisk: '自行查核未依規定頻率執行，或查核範圍未涵蓋主要作業流程。',
        controlMeasure: '各業務單位依查核計畫執行自行查核，並將結果陳報法令遵循單位彙整。',
        question: '本單位是否依計畫完成自行查核並留存查核紀錄？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-1-2',
        title: '查核缺失追蹤改善',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第27條',
        operationalRisk: '查核缺失未追蹤改善，導致相同缺失重複發生。',
        controlMeasure: '建立缺失追蹤表，定期追蹤改善進度並回報主管。',
        question: '自行查核發現之缺失是否已完成追蹤及改善？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
    ],
  },
  {
    id: 'ic-2',
    riskCategory: '資訊安全控管',
    process: '系統權限管理',
    department: '資訊部、資訊科技部、營運管理部',
    responsibleUnit: '凱基銀行 - 資訊部',
    internalRule: '資訊安全管理制度',
    rows: [
      {
        id: 'ic-2-1',
        title: '帳號權限定期覆核',
        externalRule: '個人資料保護法第12條',
        operationalRisk: '系統權限未定期覆核，導致離職或調職人員仍具存取權限。',
        controlMeasure: '每季進行系統帳號與權限覆核，並保存覆核紀錄。',
        question: '系統帳號與權限是否已依規定完成定期覆核？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-2-2',
        title: '特權帳號個別配發',
        externalRule: '個人資料保護法施行細則',
        operationalRisk: '高權限帳號共用，無法追溯實際操作人員。',
        controlMeasure: '特權帳號應個別配發，禁止共用，並保存存取日誌。',
        question: '特權帳號是否個別配發且未與他人共用？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-2-3',
        title: '離調職帳號停用',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法',
        operationalRisk: '離職人員帳號未於期限內停用，仍可登入系統。',
        controlMeasure: '人資異動通知後應於規定時間完成帳號停用。',
        question: '離職或調職人員帳號是否已於期限內停用？',
        inherentRisk: 'high',
        frequency: '每季',
      },
    ],
  },
  {
    id: 'ic-3',
    riskCategory: '委外作業控管',
    process: '資訊服務委外',
    department: '資訊科技部、數位金融部',
    responsibleUnit: '凱基銀行 - 資訊部',
    internalRule: '資訊服務委外管理辦法',
    rows: [
      {
        id: 'ic-3-1',
        title: '委外資訊資產辨識',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第26條',
        operationalRisk: '委外供應商涉及之資訊資產未納入查核，核心系統接觸範圍不明。',
        controlMeasure: '查核時應核對供應商涉及之資訊資產清單，包含核心系統與關鍵系統軟硬體。',
        question: '本單位是否已辨識委外供應商涉及之資訊資產並留存評估紀錄？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-3-2',
        title: '委外資料存取查核',
        externalRule: '個人資料保護法第12條',
        operationalRisk: '供應商存取個人資料或重要文件，查核範圍未涵蓋。',
        controlMeasure: '自行查核應包含供應商存取或保管之資料種類，並保存查核紀錄。',
        question: '委外供應商對資料之存取是否已納入自行查核範圍？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-3-3',
        title: '供應商傳輸連線查核',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '與供應商之傳輸未採封閉或加密網路，查核時未能提出紀錄。',
        controlMeasure: '應查核傳輸連線方式，確認採行封閉、加密網路或不進行外部傳輸。',
        question: '與供應商之傳輸連線是否依規定辦理，並留存查核紀錄？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
      {
        id: 'ic-3-4',
        title: '委外可行性與替代方案',
        externalRule: '金融機構辦理資訊服務委外作業相關規定',
        operationalRisk: '委外可行性、資安成本或替代方案未經評估，缺失無法追蹤。',
        controlMeasure: '查核應確認可行性、資訊安全成本、供應商集中度與替代方案均已評估並留存文件。',
        question: '委外可行性、資訊安全成本及替代方案是否已完成評估？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
    ],
  },
  {
    id: 'ic-4',
    riskCategory: '作業風險控管',
    process: '作業風險自評',
    department: '風險管理部',
    responsibleUnit: '凱基金控 - 風管部',
    internalRule: '作業風險管理政策',
    rows: [
      {
        id: 'ic-4-1',
        title: '新業務作業風險自評',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法',
        operationalRisk: '風險自評未涵蓋新業務，控制缺口未被辨識。',
        controlMeasure: '新業務上線前應完成作業風險自評並經風管覆核。',
        question: '新業務上線前是否已完成作業風險自評？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-4-2',
        title: '關鍵風險指標逾限追蹤',
        externalRule: '銀行內部控制三道防線實務',
        operationalRisk: '關鍵風險指標逾限未追蹤，損失事件重複發生。',
        controlMeasure: '指標逾限應開立追蹤單，並於期限內回報改善。',
        question: '關鍵風險指標逾限是否已開立追蹤並回報？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
      {
        id: 'ic-4-3',
        title: '作業損失事件登錄',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法',
        operationalRisk: '損失事件未入帳，管理報表低估作業風險。',
        controlMeasure: '達門檻之損失事件應登錄事件庫並經單位主管確認。',
        question: '達門檻之作業損失事件是否已登錄並經主管確認？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
    ],
  },
  {
    id: 'ic-5',
    riskCategory: '數位服務控管',
    process: '行動銀行維運',
    department: '數位金融部',
    responsibleUnit: '凱基銀行 - 資訊部',
    internalRule: '資訊系統維運管理辦法',
    rows: [
      {
        id: 'ic-5-1',
        title: '行動銀行版本雙人覆核',
        externalRule: '金融機構辦理電子銀行業務安全控管作業基準',
        operationalRisk: '版本上線未經雙人覆核，錯誤程式進入正式環境。',
        controlMeasure: '正式環境變更應經申請、覆核與上線確認三步驟。',
        question: '行動銀行版本上線是否已經雙人覆核？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-5-2',
        title: '測試環境資料去識別',
        externalRule: '個人資料保護法',
        operationalRisk: '測試環境使用正式客戶資料，個資遭非必要人員接觸。',
        controlMeasure: '測試應使用去識別資料，禁止直接複製正式客戶檔。',
        question: '測試環境是否已避免使用未去識別之正式客戶資料？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-5-3',
        title: '備援演練留存結果',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法',
        operationalRisk: '備援演練未執行，災難時無法於目標時間恢復服務。',
        controlMeasure: '應依計畫完成備援演練，並保存演練結果與缺失改善。',
        question: '本季備援演練是否已完成並留存結果？',
        inherentRisk: 'medium',
        frequency: '每半年',
      },
    ],
  },
  {
    id: 'ic-6',
    riskCategory: '法令遵循查核',
    process: '法遵自行查核',
    department: '法令遵循部',
    responsibleUnit: '凱基銀行 - 法遵部',
    internalRule: '法令遵循自行查核作業程序',
    rows: [
      {
        id: 'ic-6-1',
        title: '高風險業務抽樣理由',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第26條',
        operationalRisk: '法遵查核樣本不足，主要法規遵循情形無法涵蓋。',
        controlMeasure: '查核樣本應涵蓋高風險業務，並載明抽樣理由。',
        question: '法遵查核樣本是否涵蓋高風險業務並載明抽樣理由？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-6-2',
        title: '查核意見與改善計畫',
        externalRule: '洗錢防制法',
        operationalRisk: '查核意見未回饋業務單位，相同缺失持續存在。',
        controlMeasure: '查核意見應於期限內送業務單位回覆改善計畫。',
        question: '查核意見是否已送業務單位並取得改善計畫？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
      {
        id: 'ic-6-3',
        title: '逾期缺失展延核准',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法第27條',
        operationalRisk: '改善期限展延未再覆核，缺失長期未結案。',
        controlMeasure: '展延應經法遵主管核准，並更新追蹤表。',
        question: '逾期未結案之缺失是否已經主管核准展延？',
        inherentRisk: 'medium',
        frequency: '每季',
      },
    ],
  },
  {
    id: 'ic-7',
    riskCategory: '人力作業控管',
    process: '人員異動',
    department: '人力資源部、法令遵循部',
    responsibleUnit: '凱基金控 - 法遵部',
    internalRule: '人員進用及異動作業要點',
    rows: [
      {
        id: 'ic-7-1',
        title: '關鍵職務資格核對',
        externalRule: '銀行負責人應具備資格條件兼職限制及應遵行事項準則',
        operationalRisk: '關鍵職務任用未查核資格，不符合法令條件。',
        controlMeasure: '任用前應核對法定資格與利益衝突聲明。',
        question: '關鍵職務任用前是否已核對法定資格？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-7-2',
        title: '離職權限停用與交接',
        externalRule: '個人資料保護法',
        operationalRisk: '離職程序未回收系統權限與文件，資料持續外流。',
        controlMeasure: '離職當日應完成權限停用、證件回收與交接清單。',
        question: '離職手續是否已包含權限停用與資料交接？',
        inherentRisk: 'high',
        frequency: '每季',
      },
      {
        id: 'ic-7-3',
        title: '關鍵職務代理人名冊',
        externalRule: '金融控股公司及銀行業內部控制及稽核制度實施辦法',
        operationalRisk: '職務代理未指定，關鍵作業於休假期間中斷。',
        controlMeasure: '關鍵職務應指定代理人，並定期更新代理名冊。',
        question: '關鍵職務是否已指定代理人並更新名冊？',
        inherentRisk: 'low',
        frequency: '每半年',
      },
    ],
  },
];

export function getQuestionBankByTemplate(template: QuestionTemplate): QuestionBankCategory[] {
  return template === 'compliance' ? COMPLIANCE_QUESTION_BANK : INTERNAL_CONTROL_QUESTION_BANK;
}

export function saveQuestionBankEntry(input: {
  template: QuestionTemplate;
  rowId?: string;
  riskCategory: string;
  process: string;
  department: string;
  responsibleUnit: string;
  internalRule: string;
  externalRule: string;
  operationalRisk: string;
  controlMeasure: string;
  title: string;
  question: string;
  inherentRisk: InherentRisk;
  frequency: string;
  checkOptions?: string[];
}): string {
  const bank = getQuestionBankByTemplate(input.template);
  const prefix = input.template === 'compliance' ? 'comp' : 'ic';
  const rowId = input.rowId || `${prefix}-new-${Date.now()}`;
  const nextRow: QuestionBankRow = {
    id: rowId,
    externalRule: input.externalRule,
    operationalRisk: input.operationalRisk,
    controlMeasure: input.controlMeasure,
    title: input.title,
    question: input.question,
    inherentRisk: input.inherentRisk,
    frequency: input.frequency,
  };

  for (const category of bank) {
    const index = category.rows.findIndex((row) => row.id === rowId);
    if (index < 0) continue;
    category.rows[index] = nextRow;
    if (input.riskCategory) category.riskCategory = input.riskCategory;
    if (input.process) category.process = input.process;
    if (input.department) category.department = input.department;
    if (input.responsibleUnit) category.responsibleUnit = input.responsibleUnit;
    if (input.internalRule) category.internalRule = input.internalRule;
    if (input.checkOptions) setControlAnswerOptions(rowId, input.checkOptions, input.template);
    return rowId;
  }

  const matched = bank.find((category) =>
    category.process === input.process
    && category.responsibleUnit === input.responsibleUnit
    && category.department === input.department
    && category.internalRule === input.internalRule
  );
  if (matched) {
    matched.rows.push(nextRow);
  } else {
    bank.push({
      id: `${prefix}-cat-${Date.now()}`,
      riskCategory: input.riskCategory || input.process,
      process: input.process,
      department: input.department,
      responsibleUnit: input.responsibleUnit,
      internalRule: input.internalRule,
      rows: [nextRow],
    });
  }
  if (input.checkOptions) setControlAnswerOptions(rowId, input.checkOptions, input.template);
  return rowId;
}

export function findQuestionRow(
  template: QuestionTemplate,
  rowId: string
): { category: QuestionBankCategory; row: QuestionBankRow } | undefined {
  const categories = getQuestionBankByTemplate(template);
  for (const category of categories) {
    const row = category.rows.find((r) => r.id === rowId);
    if (row) return { category, row };
  }
  return undefined;
}

export function getTemplateLabel(template: QuestionTemplate): string {
  return TEMPLATE_OPTIONS.find((o) => o.value === template)?.label || '';
}

export const COMPLIANCE_ANSWER_OPTIONS = ['符合', '未符合', '不適用'];
export const DEFAULT_CONTROL_ANSWER_OPTIONS = ['是', '否', 'N/A'];

const controlAnswerOptions = new Map<string, string[]>();

export function getDefaultAnswerOptions(template: QuestionTemplate): string[] {
  return [...(template === 'compliance' ? COMPLIANCE_ANSWER_OPTIONS : DEFAULT_CONTROL_ANSWER_OPTIONS)];
}

export function getAnswerOptions(template: QuestionTemplate, rowId: string): string[] {
  const saved = controlAnswerOptions.get(rowId);
  return saved ? [...saved] : getDefaultAnswerOptions(template);
}

export function setControlAnswerOptions(rowId: string, options: string[], template: QuestionTemplate = 'internal-control') {
  const next = options.map((option) => option.trim()).filter(Boolean);
  controlAnswerOptions.set(rowId, next.length > 0 ? next : getDefaultAnswerOptions(template));
}

/** 自評問卷題目（由題庫彙整） */
export interface SelfAssessmentQuestion {
  id: string;
  no: number;
  title: string;
  question: string;
  controlMeasure: string;
  externalRule: string;
  operationalRisk: string;
  inherentRisk: InherentRisk;
  process: string;
  responsibleUnit: string;
  department: string;
  internalRule: string;
}

export function getSelfAssessmentQuestions(template: QuestionTemplate, categoryId?: string): SelfAssessmentQuestion[] {
  const categories = getQuestionBankByTemplate(template).filter((category) => !categoryId || category.id === categoryId);
  const questions: SelfAssessmentQuestion[] = [];
  let index = 1;
  for (const category of categories) {
    for (const row of category.rows) {
      questions.push({
        id: row.id,
        no: index,
        title: row.title || (template === 'compliance' ? row.controlMeasure : row.question),
        question: row.question,
        controlMeasure: row.controlMeasure,
        externalRule: row.externalRule,
        operationalRisk: row.operationalRisk,
        inherentRisk: row.inherentRisk,
        process: category.process,
        responsibleUnit: category.responsibleUnit,
        department: category.department,
        internalRule: category.internalRule,
      });
      index += 1;
    }
  }
  return questions;
}
