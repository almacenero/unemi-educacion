import SubtemaTemplate from "../../components/SubtemaTemplate";
import { getUnidad, getSubtema, getAllSubtemas } from "../../data/course-structure";
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

  const todosSubtemas = getAllSubtemas(UNIDAD_ID);
  const currentIndex = todosSubtemas.findIndex(s => s.id === subtemaId);
  const prevSubtema = currentIndex > 0 ? todosSubtemas[currentIndex - 1] : null;
  const nextSubtema = currentIndex < todosSubtemas.length - 1 ? todosSubtemas[currentIndex + 1] : null;

  return (
    <SubtemaTemplate
      unidad={unidad}
      subtema={subtema}
      prevSubtema={prevSubtema}
      nextSubtema={nextSubtema}
    />
  );
}
