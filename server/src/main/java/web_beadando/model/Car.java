package web_beadando.model;
import jakarta.persistence.*;
import jdk.jfr.Name;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "mycar")
public class Car {
  @Id
  @GeneratedValue
  private Integer Id;

  private String brand;

  private String model;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User owner;
}
