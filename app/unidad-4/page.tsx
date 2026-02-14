import UnidadTemplate from "../components/UnidadTemplate";
import { getUnidad } from "../data/course-structure";

export default function Unidad4Page() {
  const unidad = getUnidad(4)!;

  return <UnidadTemplate unidad={unidad} prevUnidad={3} />;
}
