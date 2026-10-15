import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scanly Privacy Policy",
  description:
    "Scanly privacy policy. Barcode scans stay on the device. Photos you choose to submit for a missing product are uploaded for review. No analytics or ads.",
};

export default function ScanlyPrivacyPage() {
  return (
    <article className="prose prose-quoteless max-w-none prose-h1:text-2xl prose-h1:font-medium sm:prose-h1:text-3xl prose-h2:mt-8 prose-h2:text-lg">
      <h1>Privacy Policy</h1>
      <p>Last updated: 15 October 2026</p>
      <p>
        <a href="#en">English</a>
        {" · "}
        <a href="#mn">Монгол</a>
      </p>

      <h2 id="en">English</h2>
      <p>
        Scanly (Scanly.mn) is an iPhone and iPad app that reads food and beauty
        barcodes and shows a health score, ingredients, additives, Nutri-Score,
        NOVA, and approximate prices. It is published by Usukhbayar Batbayar
        (Scanly LLC). The app is in English and Mongolian and is made for
        people in Mongolia. This policy explains what the app does with
        information.
      </p>

      <h3>What the app does not do</h3>
      <p>
        Scanly has no account. It does not include third-party analytics,
        advertising, or crash-reporting SDKs. It does not use Firebase
        Analytics or Firebase Crashlytics. It does not sell personal
        information, and it does not track you across apps or websites.
      </p>

      <h3>Camera</h3>
      <p>
        The camera is used to read a barcode on your device. Frames from that
        scan are not saved and are not uploaded. You can turn camera access
        off in iOS Settings. Scanning with the camera needs that permission.
      </p>

      <h3>History and favourites</h3>
      <p>
        Scan history and favourites are stored on your device. You can remove
        them in the app. Deleting the app removes them from that device.
      </p>

      <h3>Add with photos</h3>
      <p>
        When a barcode is not in the catalog, you can choose to photograph the
        barcode, the front of the pack, the ingredients, and the nutrition
        panel. Those photos are uploaded with the barcode and an anonymous
        device identifier so I can review the submission and add the product.
      </p>
      <ul>
        <li>
          The photos go to a private Supabase Storage bucket. They are not a
          public gallery.
        </li>
        <li>
          The device identifier is not your name, email, or Apple ID. I use it
          to tell submissions apart. I do not use it for tracking, and I do not
          link it to your identity.
        </li>
        <li>
          I review submissions by hand. I keep the photos for as long as I need
          them to add the product. Email{" "}
          <a href="mailto:unobatbayar@icloud.com">unobatbayar@icloud.com</a> to
          ask for deletion.
        </li>
      </ul>

      <h3>Product information</h3>
      <p>
        Scores, Nutri-Score, NOVA, additive risk levels, beauty ingredient
        flags, and prices are general information. They are not medical,
        dietary, or professional advice. Prices are approximate and can differ
        by store and date.
      </p>
      <p>
        Product data includes Open Food Facts (
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
        ), available under the{" "}
        <a
          href="https://opendatacommons.org/licenses/odbl/1-0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Database License (ODbL)
        </a>
        . Text and photos from those projects may be under Creative Commons
        Attribution-ShareAlike (CC BY-SA). Other products come from submissions
        people choose to send in the app.
      </p>

      <h3>Purchases</h3>
      <p>
        Scanly Premium is an optional auto-renewing subscription sold through
        Apple In-App Purchase. Apple handles payment. I do not receive your
        card or payment details. See the <Link href="/scanly/terms">Terms</Link>{" "}
        for renewal and cancellation.
      </p>

      <h3>Children</h3>
      <p>
        Scanly is a general-audience app. I do not knowingly collect personal
        information from children under 13. If you believe a child has sent
        information, email me and I will delete it.
      </p>

      <h3>Changes</h3>
      <p>
        If this policy changes, I will post the new text on this page and
        change the date above.
      </p>

      <h3>Contact</h3>
      <p>
        Privacy questions and deletion requests:{" "}
        <a href="mailto:unobatbayar@icloud.com">unobatbayar@icloud.com</a>
        {" · "}
        <a href="https://x.com/unoryas" target="_blank" rel="noopener noreferrer">
          @unoryas
        </a>
        {" · "}
        Instagram @scanly.mn. Related: <Link href="/scanly/terms">Terms</Link>.
      </p>

      <h2 id="mn">Монгол</h2>
      <p>Сүүлд шинэчилсэн: 2026 оны 10-р сарын 15</p>
      <p>
        Scanly (Scanly.mn) нь хоол, гоо сайхны бүтээгдэхүүний баркодыг уншаад
        эрүүл мэндийн оноо, найрлага, нэмэлт, Nutri-Score, NOVA болон ойролцоо
        үнийг харуулдаг iPhone, iPad апп юм. Аппыг Өсөхбаяр Батбаяр (Scanly LLC)
        нийтэлдэг. Апп англи, монгол хэлтэй бөгөөд Монгол дахь хэрэглэгчдэд
        зориулагдсан. Энэхүү бодлого апп мэдээллийг хэрхэн ашиглахыг
        тайлбарлана.
      </p>

      <h3>Апп юу хийдэггүй вэ</h3>
      <p>
        Scanly-д бүртгэл байхгүй. Гуравдагч этгээдийн аналитик, сурталчилгаа,
        ослын тайлангийн SDK байхгүй. Firebase Analytics болон Firebase
        Crashlytics ашигладаггүй. Хувийн мэдээллийг худалдахгүй, апп, вэбсайтын
        хооронд таныг мөрддөггүй.
      </p>

      <h3>Камер</h3>
      <p>
        Камерыг төхөөрөмж дээр баркод уншихад ашиглана. Сканы кадрыг хадгалахгүй,
        илгээхгүй. Камерын зөвшөөрлийг iOS-ийн Тохиргооноос хааж болно. Камераар
        скан хийхэд энэ зөвшөөрөл хэрэгтэй.
      </p>

      <h3>Түүх ба дуртай</h3>
      <p>
        Сканы түүх, дуртай бүтээгдэхүүн таны төхөөрөмж дээр хадгалагдана. Апп
        дотроос устгаж болно. Аппыг устгахад тухайн төхөөрөмжөөс хамт арилна.
      </p>

      <h3>Зургаар нэмэх</h3>
      <p>
        Баркод каталогт байхгүй бол баркод, савлагааны нүүр, найрлага, хоол
        тэжээлийн хүснэгтийг өөрөө зургаар илгээж болно. Тэдгээр зураг баркод
        болон нэргүй төхөөрөмжийн таниулгын хамт илгээгдэж, би шалгаад
        бүтээгдэхүүнийг нэмнэ.
      </p>
      <ul>
        <li>
          Зургууд хувийн Supabase Storage саванд хадгалагдана. Нийтийн зургийн
          цомог биш.
        </li>
        <li>
          Төхөөрөмжийн таниулга нь таны нэр, имэйл, Apple ID биш. Илгээлтүүдийг
          ялгахад ашиглана. Мөрдлөгт ашиглахгүй, таны хувийн байдалтай
          холбохгүй.
        </li>
        <li>
          Илгээлтийг гараар шалгана. Бүтээгдэхүүнийг каталогт нэмэхэд шаардлагатай
          хугацаанд зургийг хадгална. Устгуулахыг хүсвэл{" "}
          <a href="mailto:unobatbayar@icloud.com">unobatbayar@icloud.com</a>{" "}
          хаягаар бичнэ үү.
        </li>
      </ul>

      <h3>Бүтээгдэхүүний мэдээлэл</h3>
      <p>
        Оноо, Nutri-Score, NOVA, нэмэлтийн эрсдэлийн түвшин, гоо сайхны
        найрлагын тэмдэглэгээ, үнэ нь ерөнхий мэдээлэл юм. Эмнэлэг, хоолны дэглэм,
        мэргэжлийн зөвлөгөө биш. Үнэ ойролцоо бөгөөд дэлгүүр, огноогоор өөр
        байж болно.
      </p>
      <p>
        Бүтээгдэхүүний өгөгдөлд Open Food Facts (
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
        ) багтана. Эдгээр сан{" "}
        <a
          href="https://opendatacommons.org/licenses/odbl/1-0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Database License (ODbL)
        </a>{" "}
        лицензтэй. Тэндхээс ирсэн текст, зураг Creative Commons
        Attribution-ShareAlike (CC BY-SA) байж болно. Бусад бүтээгдэхүүнийг
        хүмүүс аппаас сайн дураараа илгээдэг.
      </p>

      <h3>Худалдан авалт</h3>
      <p>
        Scanly Premium нь Apple-ийн In-App Purchase-ээр зарагддаг, автоматаар
        сунгагддаг нэмэлт захиалга юм. Төлбөрийг Apple хариуцна. Би таны карт,
        төлбөрийн дэлгэрэнгүйг хүлээж авдаггүй. Сунгалт, цуцлалтыг{" "}
        <Link href="/scanly/terms">Нөхцөл</Link> хэсгээс үзнэ үү.
      </p>

      <h3>Хүүхэд</h3>
      <p>
        Scanly нь ерөнхий хэрэглэгчдэд зориулагдсан. Би 13-аас доош насны
        хүүхдээс хувийн мэдээллийг санаатай цуглуулдаггүй. Хүүхэд мэдээлэл
        илгээсэн гэж үзвэл имэйлээр мэдэгдэнэ үү. Би устгана.
      </p>

      <h3>Өөрчлөлт</h3>
      <p>
        Бодлого өөрчлөгдвөл шинэ текстийг энэ хуудсанд тавьж, дээрх огноог
        шинэчилнэ.
      </p>

      <h3>Холбоо барих</h3>
      <p>
        Нууцлалын асуулт, устгах хүсэлт:{" "}
        <a href="mailto:unobatbayar@icloud.com">unobatbayar@icloud.com</a>
        {" · "}
        <a href="https://x.com/unoryas" target="_blank" rel="noopener noreferrer">
          @unoryas
        </a>
        {" · "}
        Instagram @scanly.mn. Холбоотой: <Link href="/scanly/terms">Нөхцөл</Link>.
      </p>
    </article>
  );
}
