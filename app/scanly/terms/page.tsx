import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scanly Terms",
  description:
    "Terms for Scanly, including Scanly Premium auto-renewing subscriptions and the health-information disclaimer.",
};

export default function ScanlyTermsPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Terms</h1>
      <p>Last updated: 15 October 2026</p>
      <p>
        <a href="#en">English</a>
        {" · "}
        <a href="#mn">Монгол</a>
      </p>

      <h2 id="en">English</h2>
      <p>
        These terms apply when you download or use Scanly (Scanly.mn), an
        iPhone and iPad app published by Usukhbayar Batbayar (Scanly LLC). If
        you do not agree, do not use the app.
      </p>
      <p>
        The app is licensed under{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple’s Licensed Application End User License Agreement
        </a>{" "}
        (the Standard EULA). These terms cover how Scanly works, subscriptions,
        and product information. If they conflict with the Standard EULA on a
        point the Standard EULA controls, the Standard EULA applies.
      </p>

      <h3>The app</h3>
      <p>
        Scanly reads food and beauty barcodes and shows a health score,
        ingredients, additives, Nutri-Score, NOVA, beauty ingredient flags, and
        approximate prices. The app is in English and Mongolian and is made for
        people in Mongolia. You can download it from the App Store without
        paying. Barcode scanning and the health score are available without a
        subscription.
      </p>
      <p>
        Some products are missing or incomplete. You can send photos of a
        missing product. I may add it, edit it, or decline it.
      </p>

      <h3>Not medical advice</h3>
      <p>
        Scanly is not a doctor, dietitian, or other health professional.
        Scores, Nutri-Score, NOVA, additive risk levels, beauty ingredient
        flags, comparisons, and prices are general information. They are not
        medical advice, diagnosis, or treatment, and they are not a promise
        that a product is safe for you.
      </p>
      <p>
        For allergies, pregnancy, illness, diet, or medicine, talk to a
        qualified professional. Read the package yourself. Prices are
        approximate and can differ by store, date, and place.
      </p>

      <h3>Product data</h3>
      <p>
        Product information can be wrong, outdated, or missing. Recipes and
        labels change. Scores are the app’s own general assessment, not an
        official certification.
      </p>
      <p>
        Some product data comes from Open Food Facts (
        <a
          href="https://world.openfoodfacts.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          world.openfoodfacts.org
        </a>
        ) and Open Beauty Facts (
        <a
          href="https://world.openbeautyfacts.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          world.openbeautyfacts.org
        </a>
        ). Those databases are available under the{" "}
        <a
          href="https://opendatacommons.org/licenses/odbl/1-0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Database License (ODbL)
        </a>
        . Text and photos from those projects may be under Creative Commons
        Attribution-ShareAlike (CC BY-SA). Other records come from people who
        submit products in the app.
      </p>

      <h3>Scanly Premium</h3>
      <p>
        Scanly Premium is an optional auto-renewing subscription through Apple
        In-App Purchase. The App Store shows the name, length, and price before
        you confirm. Apple sets the price in your local currency. On the United
        States store the listed prices are about $2.99 per month (Scanly
        Premium Monthly) and $29.99 per year (Scanly Premium).
      </p>
      <p>
        Premium adds the extra detail shown in the app, including product
        comparison, a fuller nutrition breakdown, allergen flags, additive
        explanations and risk levels, price comparison, and a longer scan
        history.
      </p>
      <ul>
        <li>Payment is charged to your Apple ID when you confirm the purchase.</li>
        <li>
          The subscription renews unless you turn off auto-renew at least 24
          hours before the end of the current period.
        </li>
        <li>
          Your account is charged for renewal within 24 hours before the
          current period ends.
        </li>
        <li>
          Manage or cancel the subscription in Settings, then your Apple ID,
          then Subscriptions. Deleting the app does not cancel it. The app also
          has Manage Subscription, which opens Apple’s subscription settings.
        </li>
        <li>
          After you reinstall, use Restore Purchases with the same Apple ID.
        </li>
        <li>
          Refunds are handled by Apple. I do not receive your card or payment
          details.
        </li>
      </ul>

      <h3>Submissions</h3>
      <p>
        If you send product photos or details, you confirm they are lawful and
        do not infringe anyone’s rights. You give Scanly LLC a worldwide,
        royalty-free license to host, reproduce, and use that material to
        review it and to add or improve the catalog. You keep ownership of what
        you send. I may refuse or remove a submission.
      </p>

      <h3>Acceptable use</h3>
      <p>
        Use the app lawfully. Do not copy or resell the app, try to break or
        overload it, or send false or infringing content.
      </p>

      <h3>Intellectual property</h3>
      <p>
        The Scanly name, the app, and its original text and design belong to
        Usukhbayar Batbayar or Scanly LLC, except for third-party product data
        under the licenses above. Apple is not a party to these terms, except
        where Apple’s Standard EULA says Apple is a third-party beneficiary.
      </p>

      <h3>Warranty and liability</h3>
      <p>
        The app is provided as is and as available. To the extent the law
        allows, I disclaim implied warranties, including merchantability and
        fitness for a particular purpose. I do not promise that the app or the
        product data will be uninterrupted, complete, or error-free.
      </p>
      <p>
        To the extent the law allows, I am not liable for indirect, incidental,
        special, or consequential damages, including decisions you make about
        health, diet, or purchases. If liability cannot be excluded, it is
        limited to the amount you paid for Scanly Premium in the 12 months
        before the claim, or zero if you paid nothing, except where the law
        does not allow that limit.
      </p>

      <h3>Law</h3>
      <p>
        These terms are governed by the laws of Mongolia. Courts in Mongolia
        have jurisdiction, except where applicable law requires otherwise.
      </p>

      <h3>Changes</h3>
      <p>
        I may update these terms by posting a new version on this page. The
        date at the top is the date of the current version.
      </p>

      <h3>Contact</h3>
      <p>
        Questions:{" "}
        <a href="mailto:unobatbayar@icloud.com">unobatbayar@icloud.com</a>
        {" · "}
        <a href="https://x.com/unoryas" target="_blank" rel="noopener noreferrer">
          @unoryas
        </a>
        {" · "}
        Instagram @scanly.mn. Related:{" "}
        <Link href="/scanly/privacy">Privacy Policy</Link>.
      </p>

      <h2 id="mn">Монгол</h2>
      <p>Сүүлд шинэчилсэн: 2026 оны 10-р сарын 15</p>
      <p>
        Энэхүү нөхцөл нь Өсөхбаяр Батбаярын (Scanly LLC) нийтэлсэн Scanly
        (Scanly.mn) iPhone, iPad аппыг татах, ашиглахад үйлчилнэ. Зөвшөөрөхгүй
        бол аппыг ашиглахгүй.
      </p>
      <p>
        Аппыг{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple-ийн лицензтэй аппликейшний стандарт эцсийн хэрэглэгчийн
          лицензийн гэрээ
        </a>{" "}
        (Стандарт EULA)-ээр лицензлэнэ. Энэхүү нөхцөл нь Scanly-ийн ажиллагаа,
        захиалга, бүтээгдэхүүний мэдээллийг зохицуулна. Стандарт EULA давуу
        эрхтэй зүйл дээр зөрвөл Стандарт EULA үйлчилнэ.
      </p>

      <h3>Апп</h3>
      <p>
        Scanly нь хоол, гоо сайхны баркодыг уншаад эрүүл мэндийн оноо, найрлага,
        нэмэлт, Nutri-Score, NOVA, гоо сайхны найрлагын тэмдэглэгээ, ойролцоо
        үнийг харуулна. Апп англи, монгол хэлтэй бөгөөд Монгол дахь хэрэглэгчдэд
        зориулагдсан. App Store-оос төлбөргүй татаж болно. Баркод скан хийх,
        эрүүл мэндийн оноо харах нь захиалгагүйгээр боломжтой.
      </p>
      <p>
        Зарим бүтээгдэхүүн дутуу эсвэл байхгүй байж болно. Та зураг илгээж болно.
        Би нэмэх, засах, эсвэл татгалзаж болно.
      </p>

      <h3>Эмнэлгийн зөвлөгөө биш</h3>
      <p>
        Scanly нь эмч, хоол зүйч, эрүүл мэндийн мэргэжилтэн биш. Оноо,
        Nutri-Score, NOVA, нэмэлтийн эрсдэл, гоо сайхны найрлагын тэмдэглэгээ,
        харьцуулалт, үнэ нь ерөнхий мэдээлэл юм. Эмнэлгийн зөвлөгөө, оношлогоо,
        эмчилгээ биш. Тухайн бүтээгдэхүүн танд аюулгүй гэсэн амлалт биш.
      </p>
      <p>
        Харшил, жирэмсэн, өвчин, хоолны дэглэм, эмийн шийдвэрт мэргэжилтэнтэй
        зөвлөлдөнө үү. Савлагааг өөрөө уншина уу. Үнэ ойролцоо бөгөөд дэлгүүр,
        огноо, газраас хамаарч өөр байж болно.
      </p>

      <h3>Бүтээгдэхүүний өгөгдөл</h3>
      <p>
        Бүтээгдэхүүний мэдээлэл буруу, хуучирсан, дутуу байж болно. Жор, шошго
        өөрчлөгдөнө. Оноо нь аппын ерөнхий үнэлгээ бөгөөд албан ёсны гэрчилгээ
        биш.
      </p>
      <p>
        Зарим өгөгдөл Open Food Facts (
        <a
          href="https://world.openfoodfacts.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          world.openfoodfacts.org
        </a>
        ) болон Open Beauty Facts (
        <a
          href="https://world.openbeautyfacts.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          world.openbeautyfacts.org
        </a>
        )-аас ирнэ. Эдгээр сан{" "}
        <a
          href="https://opendatacommons.org/licenses/odbl/1-0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Database License (ODbL)
        </a>{" "}
        лицензтэй. Тэндхээс ирсэн текст, зураг Creative Commons
        Attribution-ShareAlike (CC BY-SA) байж болно. Бусад бичлэгийг хүмүүс
        аппаас илгээдэг.
      </p>

      <h3>Scanly Premium</h3>
      <p>
        Scanly Premium нь Apple-ийн In-App Purchase-ээр зарагддаг, автоматаар
        сунгагддаг нэмэлт захиалга юм. Баталгаажуулахаас өмнө App Store нэр,
        хугацаа, үнийг харуулна. Үнийг Apple таны улсын мөнгөн тэмдэгтээр
        тогтооно. АНУ-ын дэлгүүрт жагсаасан үнэ ойролцоогоор сард $2.99 (Scanly
        Premium Monthly), жилд $29.99 (Scanly Premium) байна.
      </p>
      <p>
        Premium нь аппад харагдах нэмэлт дэлгэрэнгүйг нээнэ. Үүнд бүтээгдэхүүн
        харьцуулах, илүү дэлгэрэнгүй хоол тэжээл, харшлын тэмдэглэгээ, нэмэлтийн
        тайлбар ба эрсдэлийн түвшин, үнэ харьцуулах, илүү урт сканы түүх орно.
      </p>
      <ul>
        <li>Төлбөр худалдан авалтыг баталгаажуулахад таны Apple ID-д ногдоно.</li>
        <li>
          Тухайн хугацаа дуусахаас дор хаяж 24 цагийн өмнө автомат сунгалтыг
          унтраагаагүй бол захиалга сунгагдана.
        </li>
        <li>
          Сунгалтын төлбөр тухайн хугацаа дуусахаас 24 цагийн дотор ногдоно.
        </li>
        <li>
          Цуцлах, удирдахдаа Тохиргоо, дараа нь Apple ID, дараа нь Subscriptions
          руу орно. Аппыг устгаснаар захиалга цуцлагдахгүй. Апп дахь Manage
          Subscription нь Apple-ийн захиалгын тохиргоог нээнэ.
        </li>
        <li>
          Дахин суулгасны дараа ижил Apple ID-аар Restore Purchases ашиглана.
        </li>
        <li>
          Буцаан олголтыг Apple хариуцна. Би таны карт, төлбөрийн дэлгэрэнгүйг
          хүлээж авдаггүй.
        </li>
      </ul>

      <h3>Илгээлт</h3>
      <p>
        Бүтээгдэхүүний зураг, мэдээлэл илгээвэл та түүнийг хууль ёсны, бусдын
        эрхийг зөрчөөгүй гэдгийг батална. Та Scanly LLC-д тухайн материалыг
        шалгах, каталогт нэмэх, сайжруулахад дэлхий даяар, роялтигүйгээр
        байршуулах, хуулбарлах, ашиглах зөвшөөрөл олгоно. Өмчлөл танд үлдэнэ. Би
        илгээлтийг татгалзах, устгаж болно.
      </p>

      <h3>Зөвшөөрөгдсөн хэрэглээ</h3>
      <p>
        Аппыг хууль ёсоор ашиглана. Аппыг хуулах, дахин худалдах, эвдэх,
        хэт ачаалах, худал эсвэл эрх зөрчсөн агуулга илгээхийг хориглоно.
      </p>

      <h3>Оюуны өмч</h3>
      <p>
        Scanly нэр, апп, түүний эх текст, дизайн нь Өсөхбаяр Батбаяр эсвэл
        Scanly LLC-д хамаарна. Дээрх лицензтэй гуравдагч этгээдийн бүтээгдэхүүний
        өгөгдөл үүнээс бусад. Apple нь энэхүү нөхцлийн тал биш. Стандарт EULA-д
        Apple-ийг гуравдагч этгээдийн ашиг хүртэгч гэж заасан тохиолдол үүнээс
        бусад.
      </p>

      <h3>Баталгаа ба хариуцлага</h3>
      <p>
        Аппыг байгаагаар нь, боломжтой үед нь үзүүлнэ. Хууль зөвшөөрсөн хэмжээнд
        худалдаалагдах чанар, тодорхой зориулалтад нийцэх далд баталгааг
        татгалзана. Апп болон бүтээгдэхүүний өгөгдөл тасалдалгүй, бүрэн, алдаагүй
        байна гэж амлахгүй.
      </p>
      <p>
        Хууль зөвшөөрсөн хэмжээнд шууд бус, санамсаргүй, тусгай, үр дагаврын
        хохирол, түүний дотор эрүүл мэнд, хоол, худалдан авалтын шийдвэрээс
        үүссэн хохиролд би хариуцахгүй. Хариуцлагыг бүрэн хасах боломжгүй бол
        нэхэмжлэлээс өмнөх 12 сард Scanly Premium-д төлсөн дүнгээр хязгаарлагдана.
        Юу ч төлөөгүй бол тэг. Хууль ийм хязгаарлалтыг хориглосон бол үүнээс
        бусад.
      </p>

      <h3>Хууль</h3>
      <p>
        Энэхүү нөхцөл Монгол Улсын хуулиар зохицуулагдана. Холбогдох хууль өөрөөр
        шаардаагүй бол Монгол Улсын шүүх харьяална.
      </p>

      <h3>Өөрчлөлт</h3>
      <p>
        Би энэ хуудсанд шинэ хувилбар тавьж нөхцөлийг шинэчилж болно. Дээрх огноо
        нь одоогийн хувилбарын огноо.
      </p>

      <h3>Холбоо барих</h3>
      <p>
        Асуулт:{" "}
        <a href="mailto:unobatbayar@icloud.com">unobatbayar@icloud.com</a>
        {" · "}
        <a href="https://x.com/unoryas" target="_blank" rel="noopener noreferrer">
          @unoryas
        </a>
        {" · "}
        Instagram @scanly.mn. Холбоотой:{" "}
        <Link href="/scanly/privacy">Нууцлалын бодлого</Link>.
      </p>
    </article>
  );
}
