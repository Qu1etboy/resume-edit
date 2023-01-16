import FormComponent from "@/components/FormComponent";
import Resume from "@/components/Resume";

export default function EditResume() {
  return (
    <main className="flex ">
      <section className="w-full print:hidden">
        <FormComponent />
      </section>
      <section className="w-full p-3 border print:border-0">
        <Resume />
      </section>
    </main>
  );
}
