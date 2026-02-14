import UnidadTemplate from "../components/UnidadTemplate";
import { getUnidad } from "../data/course-structure";

export default function Unidad2Page() {
  const unidad = getUnidad(2)!;

  return <UnidadTemplate unidad={unidad} prevUnidad={1} nextUnidad={3} />;
}
