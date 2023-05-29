import { encodeHTML } from "./common/utils.js";

/**
 * Retrieves stat card labels in the available locales.
 *
 * @param {string} name The name of the locale.
 * @param {string} apostrophe Whether to use apostrophe or not.
 * @returns {Object} The locales object.
 */
const statCardLocales = ({ name, apostrophe }) => {
  const encodedName = encodeHTML(name);
  return {
    "statcard.title": {
      ar: `${encodedName} إحصائيات غيت هاب`,
      cn: `${encodedName} 的 GitHub 统计数据`,
      "zh-tw": `${encodedName} 的 GitHub 統計數據`,
      cs: `GitHub statistiky uživatele ${encodedName}`,
      de: `${encodedName + apostrophe} GitHub-Statistiken`,
      en: `${encodedName}'${apostrophe} GitHub Stats`,
      bn: `${encodedName} এর GitHub পরিসংখ্যান`,
      es: `Estadísticas de GitHub de ${encodedName}`,
      fr: `Statistiques GitHub de ${encodedName}`,
      hu: `${encodedName} GitHub statisztika`,
      it: `Statistiche GitHub di ${encodedName}`,
      ja: `${encodedName}の GitHub 統計`,
      kr: `${encodedName}의 GitHub 통계`,
      nl: `${encodedName}'${apostrophe} GitHub-statistieken`,
      "pt-pt": `Estatísticas do GitHub de ${encodedName}`,
      "pt-br": `Estatísticas do GitHub de ${encodedName}`,
      np: `${encodedName}'${apostrophe} गिटहब तथ्याङ्क`,
      el: `Στατιστικά GitHub του ${encodedName}`,
      ru: `Статистика GitHub пользователя ${encodedName}`,
      "uk-ua": `Статистика GitHub користувача ${encodedName}`,
      id: `Statistik GitHub ${encodedName}`,
      ml: `${encodedName}'${apostrophe} ഗിറ്റ്ഹബ് സ്ഥിതിവിവരക്കണക്കുകൾ`,
      my: `Statistik GitHub ${encodedName}`,
      sk: `GitHub štatistiky používateľa ${encodedName}`,
      tr: `${encodedName} Hesabının GitHub Yıldızları`,
      pl: `Statystyki GitHub użytkownika ${encodedName}`,
      uz: `${encodedName}ning GitHub'dagi statistikasi`,
      vi: `Thống Kê GitHub ${encodedName}`,
      se: `GitHubstatistik för ${encodedName}`,
    },
    "statcard.totalstars": {
      ar: "مجموع النجوم",
      cn: "获标星数（star）",
      "zh-tw": "獲標星數（star）",
      cs: "Celkem hvězd",
      de: "Insgesamt erhaltene Sterne",
      en: "Total Stars Earned",
      bn: "সর্বমোট Star",
      es: "Estrellas totales",
      fr: "Total d'étoiles",
      hu: "Csillagok",
      it: "Stelle totali",
      ja: "スターされた数",
      kr: "받은 스타 수",
      nl: "Totaal Sterren Ontvangen",
      "pt-pt": "Total de estrelas",
      "pt-br": "Total de estrelas",
      np: "कुल ताराहरू",
      el: "Σύνολο Αστεριών",
      ru: "Всего звезд",
      "uk-ua": "Всього зірок",
      id: "Total Bintang",
      ml: "ആകെ നക്ഷത്രങ്ങൾ",
      my: "Jumlah Bintang",
      sk: "Hviezdy",
      tr: "Toplam Yıldız",
      pl: "Liczba otrzymanych gwiazdek",
      uz: "Yulduzchalar",
      vi: "Tổng Số Sao",
      se: "Antal intjänade stjärnor",
    },
    "statcard.commits": {
      ar: "مجموع الحفظ",
      cn: "累计提交数（commit）",
      "zh-tw": "累計提交數（commit）",
      cs: "Celkem commitů",
      de: "Anzahl Commits",
      en: "Total Commits",
      bn: "সর্বমোট Commit",
      es: "Commits totales",
      fr: "Total des Commits",
      hu: "Összes commit",
      it: "Commit totali",
      ja: "合計コミット数",
      kr: "전체 커밋 수",
      nl: "Aantal commits",
      "pt-pt": "Total de Commits",
      "pt-br": "Total de Commits",
      np: "कुल Commits",
      el: "Σύνολο Commits",
      ru: "Всего коммитов",
      "uk-ua": "Всього коммітов",
      id: "Total Komitmen",
      ml: "ആകെ കമ്മിറ്റുകൾ",
      my: "Jumlah Komitmen",
      sk: "Všetky commity",
      tr: "Toplam Commit",
      pl: "Wszystkie commity",
      uz: "'Commit'lar",
      vi: "Tổng Số Cam Kết",
      se: "Totalt antal commits",
    },
    "statcard.prs": {
      ar: "مجموع طلبات السحب",
      cn: "拉取请求数（PR）",
      "zh-tw": "拉取請求數（PR）",
      cs: "Celkem PRs",
      de: "PRs Insgesamt",
      en: "Total PRs",
      bn: "সর্বমোট PR",
      es: "PRs totales",
      fr: "Total des PRs",
      hu: "Összes PR",
      it: "PR totali",
      ja: "合計 PR",
      kr: "PR 횟수",
      nl: "Aantal PR's",
      "pt-pt": "Total de PRs",
      "pt-br": "Total de PRs",
      np: "कुल PRs",
      el: "Σύνολο PRs",
      ru: "Всего pull request`ов",
      "uk-ua": "Всього pull request`iв",
      id: "Total Permintaan Tarik",
      ml: "ആകെ പുൾ അഭ്യർത്ഥനകൾ",
      my: "Jumlah PR",
      sk: "Všetky PR",
      tr: "Toplam PR",
      pl: "Wszystkie PR-y",
      uz: "'Pull Request'lar",
      vi: "Tổng Số PR",
      se: "Totalt antal PR",
    },
    "statcard.issues": {
      ar: "مجموع التحسينات",
      cn: "指出问题数（issue）",
      "zh-tw": "指出問題數（issue）",
      cs: "Celkem problémů",
      de: "Anzahl Issues",
      en: "Total Issues",
      bn: "সর্বমোট Issue",
      es: "Issues totales",
      fr: "Nombre total d'incidents",
      hu: "Összes hibajegy",
      it: "Segnalazioni totali",
      ja: "合計 issue",
      kr: "이슈 개수",
      nl: "Aantal kwesties",
      "pt-pt": "Total de Issues",
      "pt-br": "Total de Issues",
      np: "कुल मुद्दाहरू",
      el: "Σύνολο Ζητημάτων",
      ru: "Всего issue",
      "uk-ua": "Всього issue",
      id: "Total Masalah Dilaporkan",
      ml: "ആകെ ലക്കങ്ങൾ",
      my: "Jumlah Isu Dilaporkan",
      sk: "Všetky problémy",
      tr: "Toplam Hata",
      pl: "Wszystkie problemy",
      uz: "'Issue'lar",
      vi: "Tổng Số Vấn Đề",
      se: "Total antal issues",
    },
    "statcard.contribs": {
      ar: "ساهم في",
      cn: "参与项目数",
      "zh-tw": "參與項目數",
      cs: "Přispěl k",
      de: "Beigetragen zu",
      en: "Contributed to",
      bn: "অবদান রেখেছেন",
      es: "Contribuciones en",
      fr: "Contribué à",
      hu: "Hozzájárulások",
      it: "Ha contribuito a",
      ja: "貢献したリポジトリ",
      kr: "전체 기여도",
      nl: "Bijgedragen aan",
      "pt-pt": "Contribuiu em",
      "pt-br": "Contribuiu para",
      np: "कुल योगदानहरू",
      el: "Συνεισφέρθηκε σε",
      ru: "Внёс вклад в",
      "uk-ua": "Вніс внесок у",
      id: "Berkontribusi ke",
      ml: "സമർപ്പിച്ചിരിക്കുന്നത്",
      my: "Menyumbang kepada",
      sk: "Účasti",
      tr: "Katkı Verildi",
      pl: "Kontrybucje",
      uz: "Hissa qoʻshgan",
      vi: "Đã Đóng Góp",
      se: "Bidragit till",
    },
  };
};

const repoCardLocales = {
  "repocard.template": {
    ar: "قالب",
    bn: "টেমপ্লেট",
    cn: "模板",
    "zh-tw": "模板",
    cs: "Šablona",
    de: "Vorlage",
    en: "Template",
    es: "Plantilla",
    fr: "Modèle",
    hu: "Sablon",
    it: "Template",
    ja: "テンプレート",
    kr: "템플릿",
    nl: "Sjabloon",
    "pt-pt": "Modelo",
    "pt-br": "Modelo",
    np: "टेम्पलेट",
    el: "Πρότυπο",
    ru: "Шаблон",
    "uk-ua": "Шаблон",
    id: "Pola",
    ml: "ടെംപ്ലേറ്റ്",
    my: "Templat",
    sk: "Šablóna",
    tr: "Şablon",
    pl: "Szablony",
    vi: "Mẫu",
    se: "Mall",
  },
  "repocard.archived": {
    ar: "محفوظ",
    bn: "আর্কাইভড",
    cn: "已归档",
    "zh-tw": "已歸檔",
    cs: "Archivováno",
    de: "Archiviert",
    en: "Archived",
    es: "Archivados",
    fr: "Archivé",
    hu: "Archivált",
    it: "Archiviata",
    ja: "アーカイブ済み",
    kr: "보관됨",
    nl: "Gearchiveerd",
    "pt-pt": "Arquivados",
    "pt-br": "Arquivados",
    np: "अभिलेख राखियो",
    el: "Αρχειοθετημένα",
    ru: "Архивирован",
    "uk-ua": "Архивирован",
    id: "Arsip",
    ml: "ശേഖരിച്ചത്",
    my: "Arkib",
    sk: "Archivované",
    tr: "Arşiv",
    pl: "Zarchiwizowano",
    vi: "Đã Lưu Trữ",
    se: "Arkiverade",
  },
};

const langCardLocales = {
  "langcard.title": {
    ar: "أكثر اللغات إستخداماً",
    cn: "最常用的语言",
    "zh-tw": "最常用的語言",
    cs: "Nejpoužívanější jazyky",
    de: "Meist verwendete Sprachen",
    bn: "সর্বাধিক ব্যবহৃত ভাষা সমূহ",
    en: "Most Used Languages",
    es: "Lenguajes más usados",
    fr: "Langages les plus utilisés",
    hu: "Leggyakrabban használt nyelvek",
    it: "Linguaggi più utilizzati",
    ja: "最もよく使っている言語",
    kr: "가장 많이 사용된 언어",
    nl: "Meest gebruikte talen",
    "pt-pt": "Idiomas mais usados",
    "pt-br": "Linguagens mais usadas",
    np: "अधिक प्रयोग गरिएको भाषाहरू",
    el: "Οι περισσότερο χρησιμοποιούμενες γλώσσες",
    ru: "Наиболее часто используемые языки",
    "uk-ua": "Найчастіше використовувані мови",
    id: "Bahasa Yang Paling Banyak Digunakan",
    ml: "കൂടുതൽ ഉപയോഗിച്ച ഭാഷകൾ",
    my: "Bahasa Paling Digunakan",
    sk: "Najviac používané jazyky",
    tr: "En Çok Kullanılan Diller",
    pl: "Najczęściej używane języki",
    vi: "Ngôn Ngữ Thường Sử Dụng",
    se: "Mest använda språken",
  },
};

const wakatimeCardLocales = {
  "wakatimecard.title": {
    ar: "إحصائيات واكا تايم",
    cn: "Wakatime 周统计",
    "zh-tw": "Wakatime 周統計",
    cs: "Statistiky Wakatime",
    de: "Wakatime Status",
    en: "Wakatime Stats",
    bn: "Wakatime স্ট্যাটাস",
    es: "Estadísticas de Wakatime",
    fr: "Statistiques de Wakatime",
    hu: "Wakatime statisztika",
    it: "Statistiche Wakatime",
    ja: "Wakatime ワカタイム統計",
    kr: "Wakatime 주간 통계",
    nl: "Wakatime-statistieken",
    "pt-pt": "Estatísticas Wakatime",
    "pt-br": "Estatísticas Wakatime",
    np: "Wakatime तथ्या .्क",
    el: "Στατιστικά Wakatime",
    ru: "Статистика Wakatime",
    "uk-ua": "Статистика Wakatime",
    id: "Status Wakatime",
    ml: "വേക്ക് ടൈം സ്ഥിതിവിവരക്കണക്കുകൾ",
    my: "Statistik Wakatime",
    sk: "Wakatime štatistika",
    tr: "Waketime İstatistikler",
    pl: "Statystyki Wakatime",
    vi: "Thống Kê Wakatime",
    se: "Wakatime statistik",
  },
  "wakatimecard.nocodingactivity": {
    ar: "لا يوجد نشاط برمجي لهذا الأسبوع",
    cn: "本周没有编程活动",
    "zh-tw": "本周沒有編程活動",
    cs: "Tento týden žádná aktivita v kódování",
    de: "Keine Aktivitäten in dieser Woche",
    en: "No coding activity this week",
    bn: "এই সপ্তাহে কোন কোডিং অ্যাক্টিভিটি নেই",
    es: "No hay actividad de codificación esta semana",
    fr: "Aucune activité de codage cette semaine",
    hu: "Nem volt aktivitás ezen a héten",
    it: "Nessuna attività in questa settimana",
    ja: "今週のコーディング活動はありません",
    kr: "이번 주 작업내역 없음",
    nl: "Geen programmeeractiviteit deze week",
    "pt-pt": "Sem atividade esta semana",
    "pt-br": "Nenhuma atividade de codificação esta semana",
    np: "यस हप्ता कुनै कोडिंग गतिविधि छैन",
    el: "Δεν υπάρχει δραστηριότητα κώδικα γι' αυτή την εβδομάδα",
    ru: "На этой неделе не было активности",
    "uk-ua": "На цьому тижні не було активності",
    id: "Tidak ada aktivitas perkodingan minggu ini",
    ml: "ഈ ആഴ്ച കോഡിംഗ് പ്രവർത്തനങ്ങളൊന്നുമില്ല",
    my: "Tiada aktiviti pengekodan minggu ini",
    sk: "Žiadna kódovacia aktivita tento týždeň",
    tr: "Bu hafta herhangi bir kod yazma aktivitesi olmadı",
    pl: "Brak aktywności w tym tygodniu",
    uz: "Bu hafta faol bo'lmadi",
    vi: "Không Có Hoạt Động Trong Tuần Này",
    se: "Ingen aktivitet denna vecka",
  },
};

const availableLocales = Object.keys(repoCardLocales["repocard.archived"]);

/**
 * Checks whether the locale is available or not.
 *
 * @param {string} locale The locale to check.
 * @returns {boolean} Boolean specifying whether the locale is available or not.
 */
const isLocaleAvailable = (locale) => {
  return availableLocales.includes(locale.toLowerCase());
};

export {
  isLocaleAvailable,
  availableLocales,
  statCardLocales,
  repoCardLocales,
  langCardLocales,
  wakatimeCardLocales,
};
