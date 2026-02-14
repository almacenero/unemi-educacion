import UnidadTemplate from "../components/UnidadTemplate";
import { getUnidad } from "../data/course-structure";

export default function Unidad1Page() {
  const unidad = getUnidad(1)!;

  return <UnidadTemplate unidad={unidad} nextUnidad={2} />;
}
