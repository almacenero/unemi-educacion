import UnidadTemplate from "../components/UnidadTemplate";
import { getUnidad } from "../data/course-structure";

export default function Unidad3Page() {
  const unidad = getUnidad(3)!;

  return <UnidadTemplate unidad={unidad} prevUnidad={2} nextUnidad={4} />;
}
