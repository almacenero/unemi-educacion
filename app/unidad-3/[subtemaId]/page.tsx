import SubtemaTemplate from "../../components/SubtemaTemplate";
import { getUnidad, getSubtema } from "../../data/course-structure";
import { notFound } from "next/navigation";

const UNIDAD_ID = 3;

export default async function SubtemaPage({ 
  params 
}: { 
  params: Promise<{ subtemaId: string }>
}) {
  const { subtemaId } = await params;
  const unidad = getUnidad(UNIDAD_ID);
  const subtema = getSubtema(UNIDAD_ID, subtemaId);

  if (!unidad || !subtema) {
    notFound();
  }

  const currentIndex = unidad.subtemas.findIndex(s => s.id === subtemaId);
  const prevSubtema = currentIndex > 0 ? unidad.subtemas[currentIndex - 1] : null;
  const nextSubtema = currentIndex < unidad.subtemas.length - 1 ? unidad.subtemas[currentIndex + 1] : null;

  return (
    <SubtemaTemplate
      unidad={unidad}
      subtema={subtema}
      prevSubtema={prevSubtema}
      nextSubtema={nextSubtema}
    />
  );
}
