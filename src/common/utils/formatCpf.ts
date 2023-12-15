export function formatCpf(cpf: string): string {
  const cleanedCPF = cpf.replace(/[^\d]/g, "");

  if (cleanedCPF.length <= 3) {
    return cleanedCPF;
  } else if (cleanedCPF.length <= 6) {
    return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(3)}`;
  } else if (cleanedCPF.length <= 9) {
    return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(
      3,
      6
    )}.${cleanedCPF.slice(6)}`;
  } else {
    return `${cleanedCPF.slice(0, 3)}.${cleanedCPF.slice(
      3,
      6
    )}.${cleanedCPF.slice(6, 9)}-${cleanedCPF.slice(9, 11)}`;
  }
}
