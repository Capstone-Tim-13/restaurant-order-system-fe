import FormLaporan from "../components/organisms/FormLaporan";
import FormTopPel from "../components/organisms/FormTopPel";
import FormMenuFav from "../components/organisms/FormMenuFav";
import FormMenuTren from "../components/organisms/FormMenuTren";

export default function AnalisisPage() {
  return (
    <div className="grid grid-cols-[3fr,2fr] gap-5">
      <FormMenuFav/>
      <FormMenuTren/>
      <FormLaporan/>
      <FormTopPel/>
    </div>
  );
}
