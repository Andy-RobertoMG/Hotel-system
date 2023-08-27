package com.hotel.app.hotel_system.commons;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hotel.app.hotel_system.exception.RoomNotFoundException;
import com.hotel.app.hotel_system.exception.RoomTypeNotFoundException;
import com.hotel.app.hotel_system.exception.TypeRoomFoundException;

@RestControllerAdvice
public class ErrorController {
  @ResponseStatus(code = HttpStatus.BAD_REQUEST)  
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String, List<Map<String, String>>> handleValidateExceptions(MethodArgumentNotValidException ex)
  {
    // Map<String,String> errors = new HashMap<String,String>();
    // ex.getBindingResult().getAllErrors().forEach((error)->{
    //   String fieldName = ((FieldError) error).getField();
    //   String message = error.getDefaultMessage();
    //   errors.put(fieldName, message);
    // });
    // return errors;
    Map<String, List<Map<String, String>>> response = new HashMap<>();
        List<Map<String, String>> errors = new ArrayList<>();

        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String message = error.getDefaultMessage();
            Map<String, String> fieldError = new HashMap<>();
            fieldError.put(fieldName, message);
            errors.add(fieldError);
        });

        response.put("errors", errors);
        return response;
  }
  @ResponseStatus(code = HttpStatus.INTERNAL_SERVER_ERROR)  
  @ExceptionHandler(RoomTypeNotFoundException.class)
  public Map<String,String> handleBusinessException(RoomTypeNotFoundException ex){
    Map<String, String> errorMap = new HashMap<>();
    errorMap.put("errorMessage", ex.getMessage());
    return errorMap;
  }
  @ResponseStatus(code = HttpStatus.NOT_FOUND)  
  @ExceptionHandler(RoomNotFoundException.class)
  public Map<String,String> handleBusinessException_Room(RoomNotFoundException ex){
    Map<String, String> errorMap = new HashMap<>();
    errorMap.put("errorMessage", ex.getMessage());
    return errorMap;
  }

  // @ResponseStatus(code = HttpStatus.PRECONDITION_FAILED)  
  @ExceptionHandler(TypeRoomFoundException.class)
  public ResponseEntity<Map<String,String>> handleTypeRom(TypeRoomFoundException ex){
    Map<String, String> errorMap = new HashMap<>();
    errorMap.put("errorMessage", ex.getMessage());
    return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED).body(errorMap);
  }
}