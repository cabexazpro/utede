import tkinter as tk
from tkinter import messagebox

print("hola , Mundo!")

nombre=input("dime un nombre:")
print( nombre)
def sumar():
    try:
        num1 = float(entry_num1.get())
        num2 = float(entry_num2.get())
        resultado = num1 + num2
        messagebox.showinfo("Resultado", f"La suma es: {resultado}")
    except ValueError:
        messagebox.showerror("Error", "Por favor ingresa números válidos.")

root = tk.Tk()
root.title("Suma de dos números")

tk.Label(root, text="Número 1:").pack()
entry_num1 = tk.Entry(root)
entry_num1.pack()

tk.Label(root, text="Número 2:").pack()
entry_num2 = tk.Entry(root)
entry_num2.pack()

tk.Button(root, text="Sumar", command=sumar).pack()

root.mainloop()


