extern "C"{
  double fact(int i);
}

double fact(int i) {
  long long n = 1;
  for (;i > 0; i--) {
    n *= i;
  }
  return (double)n;
}