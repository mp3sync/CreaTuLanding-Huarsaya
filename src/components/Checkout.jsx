import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../service/firebase';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const CheckoutUseForm = () => {
  const { cart, cartTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const email = watch("email");

  const finalizarCompra = (data) => {
    if (data.email !== data.email2) {
      Swal.fire({
        icon: 'error',
        title: 'Correo no coincide',
        text: '¡Los correos no coinciden!',
        confirmButtonColor: '#d33',
        background: '#fff0f5'
      });
      return;
    }

    const orden = {
      comprador: {
        name: data.name,
        address: data.address,
        email: data.email
      },
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp()
    };

    const ventas = collection(db, "orders");

    addDoc(ventas, orden)
      .then((res) => {
        setOrderId(res.id);
        Swal.fire({
          title: '¡Gracias por tu compra!',
          text: 'Tu pedido kawaii ha sido generado exitosamente ✨',
          imageUrl: 'https://media4.giphy.com/media/IcJ6n6VJNjRNS/giphy.gif',
          imageWidth: 200,
          imageHeight: 200,
          confirmButtonColor: '#ff69b4',
          confirmButtonText: '¡Yay!',
          background: '#fff0f5'
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error al procesar',
          text: 'Intenta nuevamente más tarde',
          confirmButtonColor: '#d33',
          background: '#fff0f5'
        });
      });
  };

  return (
    <Container className="mt-5 pt-5" style={{ maxWidth: '500px' }}>
      {
        orderId ? (
          <div className="text-center">
            <h2 className="mb-3">🎉 ¡Tu orden kawaii fue generada!</h2>
            <h5>ID: {orderId}</h5>
            <Link to='/' className='btn btn-dark mt-3'>Volver a comprar</Link>
          </div>
        ) : (
          <>
            <h2 className="text-center mb-4">📝 Completa con tus datos</h2>
            <form onSubmit={handleSubmit(finalizarCompra)}>
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="🙍🏻‍♂️ Nombre completo"
                  {...register("name", { required: true })}
                />
                {errors.name && <p className="text-danger small">Por favor, ingresa tu nombre.</p>}
              </div>

              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="🏠 Dirección"
                  {...register("address", { required: true })}
                />
                {errors.address && <p className="text-danger small">Por favor, ingresa tu dirección.</p>}
              </div>

              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="📧 Correo"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="text-danger small">El correo es obligatorio.</p>}
              </div>

              <div className="mb-4">
                <input
                  className="form-control"
                  placeholder="📧 Repite tu correo"
                  type="email"
                  {...register("email2", { required: true })}
                />
                {errors.email2 && <p className="text-danger small">Debes repetir el correo.</p>}
              </div>

              <button className="btn btn-success w-100" type='submit'>Finalizar Compra</button>
            </form>
          </>
        )
      }
    </Container>
  );
};

export default CheckoutUseForm;
